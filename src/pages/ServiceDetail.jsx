// src/pages/ServiceDetail.jsx
import { useParams, Link } from "react-router-dom";
import { getById } from "../lib/storage";
import { serviceImages } from "../data/serviceImages"; // ✅ importar imágenes
import "../styles/serviceDetail.css";

export default function ServiceDetail() {
  const { id } = useParams();
  const s = getById(id);
  if (!s) return <div className="container">Servicio no encontrado.</div>;

  const money = s.price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });

  // ✅ Obtener imagen asociada
  const imageSrc = serviceImages[s.name] || null;

  return (
    <div className="service-detail-container">
      <div className="service-card-detail">
        <div className="service-img-box">
          {imageSrc ? (
            <img src={imageSrc} alt={s.name} className="service-image" />
          ) : (
            <span className="no-img">Sin imagen</span>
          )}
        </div>

        <div className="service-info-box">
          <h2 className="service-title">{s.name}</h2>
          <p className="service-price">
            {money} <span>desde</span>
          </p>

          {s.stock && <div className="badge-stock">Stock: {s.stock}</div>}

          <p className="service-description">{s.description}</p>

          {s.duration && (
            <p>
              <strong>Duración:</strong> {s.duration}
            </p>
          )}
          {s.mode && (
            <p>
              <strong>Modalidad:</strong> {s.mode}
            </p>
          )}

          {s.tags && s.tags.length > 0 && (
            <div className="service-tags">
              {s.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <button className="btn-detail">Solicitar cotización</button>

          <div className="back-link">
            <Link to="/servicios">← Volver al catálogo</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
