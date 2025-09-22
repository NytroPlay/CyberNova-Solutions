// src/components/Navbar.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("cybernova_token"); // ✅ detectamos si hay sesión

  function handleLogout() {
    localStorage.removeItem("cybernova_token");
    navigate("/login");
  }

  return (
    <nav className="nav">
      <div className="container inner">
        <div className="brand">CyberNova Solutions</div>
        <ul>
          <li>
            <Link to="/" className={pathname === "/" ? "active" : ""}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className={pathname.startsWith("/servicios") ? "active" : ""}
            >
              Servicios
            </Link>
          </li>
          <li>
            <a href="/#contacto">Contacto</a>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <Link
                  to="/admin/servicios"
                  className={pathname.startsWith("/admin") ? "active" : ""}
                >
                  Admin
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="login-btn"
                  style={{ cursor: "pointer", background: "transparent", border: "none", color: "#fff" }}
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="login-btn">
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
