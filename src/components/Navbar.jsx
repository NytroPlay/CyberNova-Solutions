import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import "./Navbar.css";

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
        {/* Marca */}
        <div className="brand" onClick={() => navigate("/")}>
          CyberNova <span>Solutions</span>
        </div>

        {/* Botón hamburguesa */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Enlaces */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className={pathname.startsWith("/servicios") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </Link>
          </li>
          <li>
            <a href="/#contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </a>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <Link
                  to="/admin/servicios"
                  className={pathname.startsWith("/admin") ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
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
              <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
