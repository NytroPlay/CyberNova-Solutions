// src/lib/storage.js
import initial from "../data/services.json";

const KEY = "cybernova_services";

/**
 * Inicializa los servicios si aún no existe nada en localStorage.
 * Solo se ejecuta una vez (no sobrescribe los cambios del usuario).
 */
function seedIfNeeded() {
  try {
    const current = JSON.parse(localStorage.getItem(KEY) || "[]");
    if (!current.length) {
      localStorage.setItem(KEY, JSON.stringify(initial));
    }
  } catch {
    localStorage.setItem(KEY, JSON.stringify(initial));
  }
}

export function getAll() {
  seedIfNeeded();
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function getById(id) {
  return getAll().find((s) => s.id === id);
}

export function save(service) {
  const items = getAll();

  if (service.id) {
    // Editar
    const i = items.findIndex((s) => s.id === service.id);
    if (i >= 0) {
      items[i] = service;
    }
  } else {
    // Crear
    service.id = String(Date.now());
    items.push(service);
  }

  localStorage.setItem(KEY, JSON.stringify(items));
  return service; // ✅ devuelve el servicio guardado
}

export function remove(id) {
  const items = getAll().filter((s) => s.id !== id);
  localStorage.setItem(KEY, JSON.stringify(items));
}
