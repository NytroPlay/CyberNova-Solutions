// src/pages/Home.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const nav = useNavigate();
  const location = useLocation(); // ✅ usamos el hook correcto

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]); // ✅ se ejecuta cuando cambia la ruta

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container narrow">
          <h1>Innovación tecnológica para tu negocio</h1>
          <p className="lead">
            Desarrollamos soluciones web, apps, nube y ciberseguridad con foco en
            <strong> resultados medibles</strong> y <strong>experiencia de usuario</strong>.
          </p>
          <div className="hero_actions">
            <Link className="cta" to="/servicios">Cotizar ahora</Link>
            <button className="btn ghost" onClick={() => nav("/servicios")}>Ver catálogo</button>
          </div>
          <div className="kpis">
            <div className="kpi"><span>+30</span>proyectos entregados</div>
            <div className="kpi"><span>98%</span>satisfacción</div>
            <div className="kpi"><span>24/7</span>soporte</div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section" id="servicios">
        <div className="container">
          <h2 className="title">Nuestros Servicios</h2>
          <div className="service-grid">
            <div className="service-card-modern">
              <div className="icon-circle">🌐</div>
              <h3>Desarrollo Web</h3>
              <p>Aplicaciones modernas y escalables con tecnologías de última generación.</p>
            </div>
            <div className="service-card-modern">
              <div className="icon-circle">🔒</div>
              <h3>Ciberseguridad</h3>
              <p>Protección de datos, auditorías y monitoreo proactivo contra amenazas digitales.</p>
            </div>
            <div className="service-card-modern">
              <div className="icon-circle">☁️</div>
              <h3>Consultoría en la Nube</h3>
              <p>Migración, optimización y administración de servicios en AWS, Azure o GCP.</p>
            </div>
            <div className="service-card-modern">
              <div className="icon-circle">📱</div>
              <h3>Desarrollo Móvil</h3>
              <p>Apps iOS y Android nativas e híbridas, optimizadas para alto rendimiento.</p>
            </div>
            <div className="service-card-modern">
              <div className="icon-circle">⚙️</div>
              <h3>Automatización & DevOps</h3>
              <p>Integración continua, despliegues automáticos y eficiencia en procesos.</p>
            </div>
            <div className="service-card-modern">
              <div className="icon-circle">🛠️</div>
              <h3>Soporte & Mantenimiento</h3>
              <p>Mesa de ayuda, mantenimiento preventivo y resolución de incidencias críticas.</p>
            </div>
            <div className="service-card-modern">
              <div className="icon-circle">📡</div>
              <h3>Redes y Conectividad</h3>
              <p>Diseño, implementación y optimización de infraestructuras de red.</p>
            </div>
            <div className="service-card-modern">
              <div className="icon-circle">🤖</div>
              <h3>IA y Chatbots</h3>
              <p>Soluciones inteligentes de automatización con modelos de IA y chatbots.</p>
            </div>
            <div className="service-card-modern">
              <div className="icon-circle">🎨</div>
              <h3>UX/UI</h3>
              <p>Investigación y diseño de interfaces enfocadas en la experiencia del usuario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section alt">
        <div className="container">
          <h2 className="title">¿Por qué elegir CyberNova?</h2>
          <div className="grid three">
            <div className="card feature modern-feature">
              <div className="icon-circle-small">⚡</div>
              <h3>Entrega ágil</h3>
              <p>Iteramos semanalmente con demos y tablero de tareas compartido.</p>
            </div>
            <div className="card feature modern-feature">
              <div className="icon-circle-small">🔐</div>
              <h3>Calidad y seguridad</h3>
              <p>Buenas prácticas, pruebas y hardening básico desde el día uno.</p>
            </div>
            <div className="card feature modern-feature">
              <div className="icon-circle-small">📈</div>
              <h3>Escalabilidad</h3>
              <p>Arquitecturas pensadas para crecer sin reescribir el producto.</p>
            </div>
          </div>
          <div className="badges modern-badges">
            <span className="chip">React</span>
            <span className="chip">Node</span>
            <span className="chip">Next.js</span>
            <span className="chip">Vite</span>
            <span className="chip">Tailwind/CSS</span>
            <span className="chip">Cloud</span>
            <span className="chip">DevOps</span>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section" id="proceso">
        <div className="container">
          <h2 className="title">Nuestro Proceso</h2>
          <div className="steps">
            <div className="step">
              <div className="step_num">1</div>
              <div>
                <h4>Descubrimiento</h4>
                <p>Levantamiento de requisitos y definición de éxito.</p>
              </div>
            </div>
            <div className="step">
              <div className="step_num">2</div>
              <div>
                <h4>Diseño & Prototipo</h4>
                <p>UI/UX y arquitectura base para validar rápido.</p>
              </div>
            </div>
            <div className="step">
              <div className="step_num">3</div>
              <div>
                <h4>Desarrollo iterativo</h4>
                <p>Sprints cortos, CI y entregas continuas.</p>
              </div>
            </div>
            <div className="step">
              <div className="step_num">4</div>
              <div>
                <h4>Soporte & mejora</h4>
                <p>Monitoreo, optimización y nuevas funcionalidades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="ctaBar" id="contacto">
        <div className="container ctaBar_inner">
          <div>
            <h3>¿Listo para empezar?</h3>
            <p className="subtitle">Agenda una llamada o cuéntanos tu idea y te enviamos propuesta.</p>
          </div>
          <div className="ctaBar_actions">
            <a
              className="btn primary"
              href="mailto:contacto@cybernova.co?subject=Cotización%20CyberNova"
            >
              Escríbenos
            </a>
            <a className="btn ghost" href="#servicios">Ver servicios</a>
          </div>
        </div>
      </section>
    </>
  );
}
