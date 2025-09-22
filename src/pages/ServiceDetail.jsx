// src/pages/ServiceDetail.jsx
import { useParams, Link } from "react-router-dom";
import { getById } from "../lib/storage";

export default function ServiceDetail() {
  const { id } = useParams();
  const s = getById(id);
  if (!s) return <div className="container">Servicio no encontrado.</div>;

  const money = s.price.toLocaleString("es-CO", { style:"currency", currency:"COP" });

  return (
    <div className="container detail">
      <div className="thumb">
        {/* Aquí luego puedes poner imágenes dinámicas */}
        <span style={{color:"#999"}}>Sin imagen</span>
      </div>

      <div className="meta">
        <h2>{s.name}</h2>
        <div className="priceBig">{money} desde</div>
        {s.promo && <div className="badge">🔥 En promoción</div>}
        <div className="badge">Stock: {s.stock}</div>

        <p className="subtitle">{s.description}</p>

        {/* Campos adicionales */}
        {s.duration && (
          <p><strong>Duración:</strong> {s.duration}</p>
        )}
        {s.mode && (
          <p><strong>Modalidad:</strong> {s.mode}</p>
        )}

        {/* Tags */}
        {s.tags && s.tags.length > 0 && (
          <div className="badges">
            {s.tags.map((tag, i) => (
              <span key={i} className="chip">{tag}</span>
            ))}
          </div>
        )}

        <button className="btn primary" style={{marginTop: "16px"}}>
          Solicitar cotización
        </button>

        <div style={{ marginTop: 16 }}>
          <Link className="link" to="/servicios">← Volver al catálogo</Link>
        </div>
      </div>
    </div>
  );
}
