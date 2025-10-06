// src/pages/AdminList.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAll, remove } from "../lib/storage";
import { serviceImages } from "../data/serviceImages"; // 🔹 Importa las imágenes centralizadas
import "../styles/adminList.css";

export default function AdminList() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(getAll());
  }, []);

  function handleDelete(id) {
    if (window.confirm("¿Seguro que quieres eliminar este servicio?")) {
      remove(id);
      setItems(getAll());
    }
  }

  return (
    <div className="services-page">
      {/* Encabezado */}
      <div className="services-header">
        <h2>Gestión de Servicios</h2>
        <Link to="/admin/servicios/nuevo" className="create-btn">
          + Crear nuevo
        </Link>
      </div>

      {/* Grid de servicios */}
      <div className="services-grid">
        {items.length === 0 ? (
          <p>No hay servicios registrados.</p>
        ) : (
          items.map((s) => {
            const imageSrc = serviceImages[s.name] || null; // 🔹 Usa el mapeo de imágenes

            return (
              <div className="service-card" key={s.id}>
                {/* Imagen */}
                <div className="service-image">
                  {imageSrc ? (
                    <img src={imageSrc} alt={s.name} className="thumb-img" />
                  ) : (
                    <span className="no-image">Sin imagen</span>
                  )}
                </div>

                {/* Contenido */}
                <div className="service-body">
                  <h3>{s.name}</h3>
                  <div className="price">
                    {s.price.toLocaleString("es-CO", {
                      style: "currency",
                      currency: "COP",
                    })}{" "}
                    <small>desde</small>
                  </div>
                  <p className="desc">{s.description}</p>
                </div>

                {/* Botones */}
                <div className="service-actions">
                  <button
                    className="btn edit"
                    onClick={() => navigate(`/admin/servicios/${s.id}`)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn delete"
                    onClick={() => handleDelete(s.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
