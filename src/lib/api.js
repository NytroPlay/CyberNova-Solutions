// src/lib/api.js

// Expresión regular para validar correos
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Key donde guardamos sesión
const SESSION_KEY = "cybernova_session";

// Simulación de login (modo demo)
export async function loginUser(email, password) {
  if (email === "admin@cybernova.co" && password === "123456") {
    const session = {
      token: "fake-token-123",
      user: { email, role: "admin" },
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }
  throw new Error("Credenciales inválidas");
}

// Obtener sesión guardada
export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

// Cerrar sesión
export function logout() {
  localStorage.removeItem(SESSION_KEY);
}
