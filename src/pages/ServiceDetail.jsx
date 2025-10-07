// src/pages/ServiceDetail.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getById } from "../lib/storage";
import { serviceImages } from "../data/serviceImages";
import "../styles/serviceDetail.css";

export default function ServiceDetail() {
  const { id } = useParams();
  const s = getById(id);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [success, setSuccess] = useState(false);

  // ✅ Forzar scroll al inicio al cargar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!s) return <div className="container">Servicio no encontrado.</div>;

  const money = s.price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });

  const imageSrc = serviceImages[s.name] || null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setShowModal(false);
      setFormData({ nombre: "", email: "", mensaje: "" });
    }, 2000);
  };

  return (
    <div className="service-detail-container">
      <div className="service-card-detail">
        <div className="service-img-box">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={s.name}
              loading="lazy"
              className="service-image"
            />
          ) : (
            <span className="no-img">Sin imagen</span>
          )}
        </div>

        <div className="service-info-box">
          <h2 className="service-title">{s.name}</h2>
          <p className="service-price">
            {money} <span>desde</span>
          </p>

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

          <button className="btn-detail" onClick={() => setShowModal(true)}>
            Solicitar cotización
          </button>

          <div className="back-link">
            <Link to="/servicios">← Volver al catálogo</Link>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Solicitar cotización</h3>
            {!success ? (
              <form onSubmit={handleSubmit}>
                <label>Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />

                <label>Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label>Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder={`Estoy interesado en el servicio: ${s.name}`}
                  required
                ></textarea>

                <button type="submit" className="btn-enviar">
                  Enviar solicitud
                </button>
              </form>
            ) : (
              <div className="success-message">
                ✅ ¡Solicitud enviada con éxito!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
