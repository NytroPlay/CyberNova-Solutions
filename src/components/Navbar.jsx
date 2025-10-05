import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("cybernova_token");

  function handleLogout() {
    localStorage.removeItem("cybernova_token");
    navigate("/login");
  }

  return (
    <nav className="nav">
      <div className="container inner">
        <div className="brand">CyberNova Solutions</div>

        {/* Botón Hamburguesa */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú principal */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className={pathname === "/" ? "active" : ""}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              onClick={() => setMenuOpen(false)}
              className={pathname.startsWith("/servicios") ? "active" : ""}
            >
              Servicios
            </Link>
          </li>
          <li>
            <a href="/#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <Link
                  to="/admin/servicios"
                  onClick={() => setMenuOpen(false)}
                  className={pathname.startsWith("/admin") ? "active" : ""}
                >
                  Admin
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="login-btn logout-btn"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="login-btn">
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
