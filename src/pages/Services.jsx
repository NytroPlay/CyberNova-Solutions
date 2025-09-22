// src/pages/Services.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../lib/storage";

export default function Services() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getAll());
  }, []);

  return (
    <div className="container">
      {/* HEADER DEL CATÁLOGO */}
      <div className="catalogo-header">
        <h2>Catálogo de Servicios</h2>
        <p>
          Explora nuestro portafolio de soluciones tecnológicas pensadas para impulsar tu negocio.  
          Haz clic en cualquier servicio para ver más detalles y solicitar una cotización.
        </p>
      </div>

      {/* GRID DE SERVICIOS */}
      <div className="catalogo-grid">
        {items.map((s) => (
          <div className="catalogo-card" key={s.id}>
            {/* Imagen/Thumb */}
            <div className="thumb">Sin imagen</div>

            {/* Contenido */}
            <h3>{s.name}</h3>
            {s.promo && <span className="promo-tag">En promoción</span>}
            <div className="price">
              {s.price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })}{" "}
              <small>desde</small>
            </div>

            <p>{s.description}</p>
            <p className="meta">
              <strong>Duración:</strong> {s.duration || "A convenir"}
            </p>
            <p className="meta">
              <strong>Modalidad:</strong> {s.mode || "Remota"}
            </p>

            {/* Tags */}
            {s.tags?.length > 0 && (
              <div className="badges">
                {s.tags.map((t, i) => (
                  <span className="chip" key={i}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Link a detalle */}
            <Link to={`/servicios/${s.id}`} className="detail-link">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
