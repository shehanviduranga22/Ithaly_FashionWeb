export type AppUser = {
  id: string;
  fullName: string;
  email: string;
};

const tokenKey = "cdm-auth-token";
const userKey = "cdm-auth-user";

export function getAuthToken() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(tokenKey);
}

export function getStoredUser(): AppUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(userKey);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AppUser;
  } catch {
    window.localStorage.removeItem(userKey);
    return null;
  }
}

export function saveAuthSession(token: string, user: AppUser) {
  window.localStorage.setItem(tokenKey, token);
  window.localStorage.setItem(userKey, JSON.stringify(user));
}

export function clearAuthSession() {
  window.localStorage.removeItem(tokenKey);
  window.localStorage.removeItem(userKey);
}
