// src/pages/AdminForm.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { save, getById } from "../lib/storage";
import "../styles/adminForm.css";

export default function AdminForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [service, setService] = useState({
    name: "",
    price: "",
    description: "",
    duration: "",
    mode: "Remota",
    tags: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      const s = getById(id);
      if (s) {
        setService({
          ...s,
          tags: s.tags ? s.tags.join(", ") : "",
        });
      }
    }
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const serviceToSave = {
      ...service,
      price: Number(service.price),
      tags: service.tags
        ? service.tags.split(",").map((t) => t.trim())
        : [],
    };

    setTimeout(() => {
      save(serviceToSave);
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        navigate("/admin/servicios");
      }, 1500);
    }, 1200);
  }

  return (
    <div className="admin-form-page">
      <div className="admin-form-card">
        <h2>{id ? "Editar Servicio" : "Crear Servicio"}</h2>

        {!success ? (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Nombre</label>
              <input
                type="text"
                name="name"
                className="input"
                value={service.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label className="label">Precio (COP)</label>
              <input
                type="number"
                name="price"
                className="input"
                value={service.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label className="label">Descripción</label>
              <textarea
                name="description"
                className="textarea"
                value={service.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label className="label">Duración</label>
              <input
                type="text"
                name="duration"
                className="input"
                placeholder="Ej: 2 semanas"
                value={service.duration}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label className="label">Modalidad</label>
              <select
                name="mode"
                className="input"
                value={service.mode}
                onChange={handleChange}
              >
                <option value="Remota">Remota</option>
                <option value="Presencial">Presencial</option>
              </select>
            </div>

            <div className="field">
              <label className="label">Tags (separados por coma)</label>
              <input
                type="text"
                name="tags"
                className="input"
                value={service.tags}
                onChange={handleChange}
                placeholder="Ej: React, Node, Seguridad"
              />
            </div>

            <div className="actions">
              <button
                type="button"
                className="btn ghost"
                onClick={() => navigate("/admin/servicios")}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className={`btn primary ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {!loading && "Guardar"}
              </button>
            </div>
          </form>
        ) : (
          <div className="success-message">
            ✅ {id ? "Servicio actualizado" : "Servicio creado"} con éxito
          </div>
        )}
      </div>
    </div>
  );
}
