import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/styles.css";
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

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <nav className="nav">
      <div className="container inner">
        <div className="brand" onClick={() => navigate("/")}>
          CyberNova Solutions
        </div>

        {/* Botón hamburguesa */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              className={pathname === "/" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className={pathname.startsWith("/servicios") ? "active" : ""}
              onClick={handleLinkClick}
            >
              Servicios
            </Link>
          </li>
          <li>
            <a href="/#contacto" onClick={handleLinkClick}>
              Contacto
            </a>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <Link
                  to="/admin/servicios"
                  className={pathname.startsWith("/admin") ? "active" : ""}
                  onClick={handleLinkClick}
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
                  className="logout-btn"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="login-btn" onClick={handleLinkClick}>
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
