// src/pages/AdminList.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAll, remove } from "../lib/storage";
import "../styles/services.css";

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
      <div className="services-header">
        <h2>Gestión de Servicios</h2>
        <Link to="/admin/servicios/nuevo" className="create-btn">
          + Crear nuevo
        </Link>
      </div>

      <div className="services-grid">
        {items.length === 0 ? (
          <p>No hay servicios registrados.</p>
        ) : (
          items.map((s) => (
            <div className="service-card" key={s.id}>
              <div className="service-image">
                {s.image ? (
                  <img src={s.image} alt={s.name} />
                ) : (
                  "Sin imagen"
                )}
              </div>
              <div className="service-body">
                <h3>{s.name}</h3>
                <div className="price">
                  {s.price.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}{" "}
                  <small>desde</small>
                </div>
                <p>{s.description}</p>
              </div>
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
          ))
        )}
      </div>
    </div>
  );
}
