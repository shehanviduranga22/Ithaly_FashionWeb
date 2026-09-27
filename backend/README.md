# Auth backend

## Setup

1. Copy `.env.example` to `.env`.
2. Replace `<db_password>` with the MongoDB database user's password. URL-encode special characters in the password.
3. Replace `JWT_SECRET` with a long random value.
4. Allow the development machine's IP address in MongoDB Atlas Network Access.
5. Start the backend:

```powershell
npm install
npm run dev
```

The API listens on `http://localhost:4000`.

## Endpoints

- `POST /api/auth/register` stores `{ fullName, email, password }` in the `users` collection.
- `POST /api/auth/login` verifies `{ email, password }` and returns a JWT on success.
- `GET /api/health` checks that the server is running.

Passwords are never stored in plain text. The frontend uses `VITE_AUTH_API_URL` when provided; otherwise it calls `http://localhost:4000`.
