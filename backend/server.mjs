import "dotenv/config";
import bcrypt from "bcryptjs";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";

const app = express();
const port = Number(process.env.PORT || 4000);
const mongoUri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB || "ciao_d_milano";
const jwtSecret = process.env.JWT_SECRET;

if (!mongoUri) throw new Error("MONGODB_URI is required in backend/.env");
if (!jwtSecret) throw new Error("JWT_SECRET is required in backend/.env");

const client = new MongoClient(mongoUri, {
  serverSelectionTimeoutMS: 5000,
  maxPoolSize: 10,
});
const database = client.db(databaseName);
const users = database.collection("users");
const accountDetails = database.collection("account_details");
const orderDetails = database.collection("order_details");

const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:8080,http://localhost:8081,http://localhost:8082")
  .split(",")
  .map((origin) => origin.trim());

app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "10kb" }));

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function issueToken(user) {
  return jwt.sign({ sub: user._id.toString(), email: user.email }, jwtSecret, {
    expiresIn: "7d",
  });
}

function authenticatedUser(request, response) {
  const header = request.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    response.status(401).json({ message: "Authentication required." });
    return null;
  }

  try {
    return jwt.verify(header.slice(7), jwtSecret);
  } catch {
    response.status(401).json({ message: "Authentication required." });
    return null;
  }
}

app.post("/api/auth/register", async (request, response) => {
  const { fullName, email, password } = request.body ?? {};
  const normalizedEmail = typeof email === "string" ? normalizeEmail(email) : "";

  if (
    typeof fullName !== "string" ||
    fullName.trim().length < 2 ||
    !/^\S+@\S+\.\S+$/.test(normalizedEmail) ||
    typeof password !== "string" ||
    password.length < 8
  ) {
    return response.status(400).json({ message: "Enter a name, valid email, and password of at least 8 characters." });
  }

  const existingUser = await users.findOne({ email: normalizedEmail }, { projection: { _id: 1 } });
  if (existingUser) {
    return response.status(409).json({ message: "An account with this email already exists." });
  }

  const user = {
    fullName: fullName.trim(),
    email: normalizedEmail,
    passwordHash: await bcrypt.hash(password, 12),
    createdAt: new Date(),
  };
  const result = await users.insertOne(user);

  return response.status(201).json({
    message: "Account created successfully.",
    token: issueToken({ _id: result.insertedId, email: user.email }),
    user: { id: result.insertedId.toString(), fullName: user.fullName, email: user.email },
  });
});

app.post("/api/auth/login", async (request, response) => {
  const { email, password } = request.body ?? {};
  const normalizedEmail = typeof email === "string" ? normalizeEmail(email) : "";
  const user = await users.findOne({ email: normalizedEmail });
  const passwordMatches = user ? await bcrypt.compare(password ?? "", user.passwordHash) : false;

  if (!user || !passwordMatches) {
    return response.status(401).json({ message: "Invalid email or password." });
  }

  return response.json({
    message: "Login successful.",
    token: issueToken(user),
    user: { id: user._id.toString(), fullName: user.fullName, email: user.email },
  });
});

app.get("/api/account/details", async (request, response) => {
  const tokenUser = authenticatedUser(request, response);
  if (!tokenUser || typeof tokenUser !== "object" || typeof tokenUser.email !== "string") return;

  const details = await accountDetails.findOne(
    { email: tokenUser.email },
    { projection: { _id: 0, email: 0, userId: 0, createdAt: 0, updatedAt: 0 } },
  );
  return response.json({ details: details ?? null });
});

app.put("/api/account/details", async (request, response) => {
  const tokenUser = authenticatedUser(request, response);
  if (!tokenUser || typeof tokenUser !== "object" || typeof tokenUser.email !== "string") return;

  const { full_name, phone, address_line1, address_line2, city, emirate } = request.body ?? {};
  const required = [full_name, phone, address_line1, city, emirate];
  if (required.some((value) => typeof value !== "string" || !value.trim())) {
    return response.status(400).json({ message: "Please fill in all required delivery details." });
  }

  const details = {
    email: tokenUser.email,
    userId: typeof tokenUser.sub === "string" ? tokenUser.sub : undefined,
    full_name: full_name.trim(),
    phone: phone.trim(),
    address_line1: address_line1.trim(),
    address_line2: typeof address_line2 === "string" ? address_line2.trim() : "",
    city: city.trim(),
    emirate: emirate.trim(),
    updatedAt: new Date(),
  };

  await accountDetails.updateOne(
    { email: tokenUser.email },
    { $set: details, $setOnInsert: { createdAt: new Date() } },
    { upsert: true },
  );
  return response.json({ message: "Delivery details saved.", details });
});

app.post("/api/order-details", async (request, response) => {
  const tokenUser = authenticatedUser(request, response);
  if (!tokenUser || typeof tokenUser !== "object" || typeof tokenUser.email !== "string") return;

  const { address, payment_method, items, total_amount, notes } = request.body ?? {};
  const requiredAddress = [
    address?.full_name,
    address?.phone,
    address?.address_line1,
    address?.city,
    address?.emirate,
  ];
  if (
    requiredAddress.some((value) => typeof value !== "string" || !value.trim()) ||
    payment_method !== "card" ||
    !Array.isArray(items) ||
    items.length === 0 ||
    typeof total_amount !== "number" ||
    !Number.isFinite(total_amount) ||
    total_amount < 0
  ) {
    return response.status(400).json({ message: "Incomplete order details." });
  }

  const order = {
    email: tokenUser.email,
    userId: typeof tokenUser.sub === "string" ? tokenUser.sub : undefined,
    address: {
      full_name: address.full_name.trim(),
      phone: address.phone.trim(),
      address_line1: address.address_line1.trim(),
      address_line2: typeof address.address_line2 === "string" ? address.address_line2.trim() : "",
      city: address.city.trim(),
      emirate: address.emirate.trim(),
    },
    notes: typeof notes === "string" ? notes.trim() : "",
    payment_method,
    items: items.map((item) => ({
      slug: typeof item.slug === "string" ? item.slug : "",
      name: typeof item.name === "string" ? item.name : "",
      image: typeof item.image === "string" ? item.image : "",
      size: typeof item.size === "string" ? item.size : "",
      color: typeof item.color === "string" ? item.color : "",
      quantity: Number(item.quantity),
      price: Number(item.price),
    })),
    total_amount,
    payment_status: "paid",
    createdAt: new Date(),
  };

  const result = await orderDetails.insertOne(order);
  return response.status(201).json({ message: "Order saved.", orderId: result.insertedId.toString() });
});

app.get("/api/order-details", async (request, response) => {
  const tokenUser = authenticatedUser(request, response);
  if (!tokenUser || typeof tokenUser !== "object" || typeof tokenUser.email !== "string") return;

  const orders = await orderDetails
    .find({ email: tokenUser.email })
    .sort({ createdAt: -1 })
    .toArray();

  return response.json({
    orders: orders.map((order) => ({
      id: order._id.toString(),
      createdAt: order.createdAt,
      status: order.payment_status,
      totalAmount: order.total_amount,
      items: order.items,
      address: order.address,
      paymentMethod: order.payment_method,
    })),
  });
});

app.get("/api/health", (_request, response) => response.json({ ok: true }));

async function start() {
  await client.connect();
  await users.createIndex({ email: 1 }, { unique: true });
  await accountDetails.createIndex({ email: 1 }, { unique: true });
  await orderDetails.createIndex({ email: 1, createdAt: -1 });
  app.listen(port, () => console.log(`Auth backend listening on http://localhost:${port}`));
}

start().catch((error) => {
  console.error("Could not start auth backend:", error);
  process.exit(1);
});
