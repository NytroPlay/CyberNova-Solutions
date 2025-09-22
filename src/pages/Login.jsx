// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { loginUser, EMAIL_RE } from "../lib/api";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("admin@cybernova.co");
  const [password, setPassword] = useState("123456");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/admin/servicios";

  function validate() {
    if (!EMAIL_RE.test(email)) return "Ingresa un correo válido";
    if (!password || password.length < 4) return "La contraseña es muy corta";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setErr(v);
      return;
    }
    try {
      setLoading(true);
      setErr("");
      const { token, user } = await loginUser(email, password);

      // Guardamos sesión en localStorage
      localStorage.setItem("auth", JSON.stringify({ token, user }));

      navigate(redirectTo, { replace: true });
    } catch (e) {
      setErr("Correo o contraseña inválidos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="title">Panel de Administración</h2>
        <p className="subtitle">Accede para gestionar tus servicios</p>

        {err && <div className="error">{err}</div>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Correo</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@cybernova.co"
              required
            />
          </div>

          <div className="field">
            <label className="label">Contraseña</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>

          <div className="field checkbox">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />{" "}
              Recordarme (7 días)
            </label>
          </div>

          <div className="actions">
            <button type="submit" className="btn primary" disabled={loading}>
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
          </div>
        </form>

        <div className="back-link">
          <Link to="/">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
