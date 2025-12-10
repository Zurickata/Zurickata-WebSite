import React from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>

      {/* ===========================
          HERO SECTION
      ============================ */}
      <section className="section fade-in" style={{ marginBottom: 32 }}>
        <div className="hero">

          {/* LEFT SIDE */}
          <div>
            <span className="section-chip">Portafolio profesional</span>

            <h1 className="hero-title" style={{ marginTop: 8 }}>
              Desarrollo software con enfoque en{" "}
              <span className="hero-highlight">claridad, eficiencia</span>  
              y resultados reales.
            </h1>

            <p className="hero-subtitle">
              Full-Stack Developer con experiencia en diseño de sistemas,
              construcción de aplicaciones web, consultoría técnica e
              implementación de soluciones digitales para empresas y proyectos.
            </p>

            <div className="hero-actions">
              <Link to="/contacto" >
                <Button>Hablemos</Button>
              </Link>
              <Link to="/sobre-mi">
                <Button variant="outline">Sobre mí</Button>
              </Link>
            </div>

            <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="hero-pill">React</span>
              <span className="hero-pill">Node · Nest</span>
              <span className="hero-pill">PostgreSQL</span>
              <span className="hero-pill">Docker</span>
            </div>
          </div>

          {/* RIGHT SIDE — CURRENT STATUS (RESTORED STYLE) */}
          <div className="hero-right fade-in" style={{ animationDelay: "0.2s" }}>
            <div
              className="hero-panel"
              style={{
                padding: "20px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div className="hero-panel-header">
                <div>
                  <div style={{ fontSize: 12, color: "var(--text-soft)" }}>
                    Estado actual
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>
                    Full-Stack Developer & Consultor
                  </div>
                </div>

                <span className="hero-panel-badge">
                  Disponible para asesoraría
                </span>
              </div>

              <div style={{ fontSize: 13, lineHeight: 1.55 }}>
                <strong>● Rocked AD — Full-Time</strong><br />
                Desarrollo full-stack en aplicaciones web, APIs y herramientas de producto.
                <br />

                <strong>● Softwave SPA — Co-Fundador</strong><br />
                Creación de soluciones tecnológicas para clientes de distintos sectores.
                <br />

                <strong>● Ingeniería Civil Informática — UTFSM</strong><br />
                Enfoque en diseño de sistemas, arquitectura y desarrollo full-stack.
              </div>

              {/* PROGRESS BAR SMALL */}
              <div style={{ marginTop: 4 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    color: "var(--text-soft)",
                    marginBottom: 4,
                  }}
                >
                  <span>Experiencia acumulada</span>
                  <span style={{ color: "var(--accent-secondary)" }}>En crecimiento</span>
                </div>

                <div
                  style={{
                    height: 5,
                    background: "rgba(148, 163, 184, 0.2)",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "72%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, rgba(139,92,246,1), rgba(56,189,248,1))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===========================
          TRAYECTORIA PROFESIONAL (GRID)
      ============================ */}
      <section className="section fade-in" style={{ animationDelay: "0.15s" }}>
        <div className="section-header">
          <span className="section-chip">Trayectoria</span>
          <h2 className="section-title">Mi camino profesional</h2>
        </div>

        <div className="grid-3" style={{ marginTop: 8 }}>

          {/* Rocked AD */}
          <div className="timeline-card">
            <span className="badge-mini">2025 – Presente</span>
            <h3 className="card-title" style={{ marginTop: 8 }}>Rocked AD</h3>
            <p className="card-subtitle">Full-Stack Developer</p>
            <p className="card-body">
              Desarrollo de aplicaciones web, APIs, integraciones y sistemas
              orientados a producto.
            </p>
          </div>

          {/* Softwave SPA */}
          <div className="timeline-card">
            <span className="badge-mini">2024 – Presente</span>
            <h3 className="card-title" style={{ marginTop: 8 }}>Softwave SPA</h3>
            <p className="card-subtitle">Co-Fundador & Full-Stack Developer</p>
            <p className="card-body">
              Diseño e implementación de soluciones tecnológicas para clientes
              de distintos sectores.
            </p>
          </div>

          {/* MeshStep */}
          <div className="timeline-card">
            <span className="badge-mini">2025</span>
            <h3 className="card-title" style={{ marginTop: 8 }}>MeshStep</h3>
            <p className="card-subtitle">Proyecto destacado</p>
            <p className="card-body">
              Software de visualización de algoritmos geométricos, presentado
              en la XXXIII Feria de Software (2000 horas).
            </p>
          </div>

          {/* Certificación */}
          <div className="timeline-card">
            <span className="badge-mini">2024</span>
            <h3 className="card-title" style={{ marginTop: 8 }}>Certificación Microsoft/LinkedIn</h3>
            <p className="card-subtitle">Fundamentos desarrollo de software</p>
            <p className="card-body">
              Validación profesional en fundamentos de programación e ingeniería
              de software.
            </p>
          </div>

          {/* Coordinador lab */}
          <div className="timeline-card">
            <span className="badge-mini">2022 – 2025</span>
            <h3 className="card-title" style={{ marginTop: 8 }}>UTFSM</h3>
            <p className="card-subtitle">Coordinador Lab. Desarrollo de Software</p>
            <p className="card-body">
              Administración de sistemas Linux, infraestructura y soporte técnico avanzado.
            </p>
          </div>

          {/* Banco de Chile */}
          <div className="timeline-card">
            <span className="badge-mini">2023</span>
            <h3 className="card-title" style={{ marginTop: 8 }}>Banco de Chile</h3>
            <p className="card-subtitle">Analista de Datos Junior</p>
            <p className="card-body">
              Automatización de reportes, análisis de datos y documentación de procesos.
            </p>
          </div>
        </div>
      </section>


      {/* ===========================
          SERVICIOS EN RESUMEN
      ============================ */}
      <section className="section fade-in" style={{ animationDelay: "0.25s" }}>
        <div className="section-header">
          <span className="section-chip">Servicios</span>
          <h2 className="section-title">Qué puedo hacer por ti</h2>
        </div>

        <div className="grid-3">

          <div className="timeline-card">
            <h3 className="card-title">Desarrollo Web</h3>
            <p className="card-body">
              Aplicaciones modernas, APIs, paneles administrativos y soluciones full-stack.
            </p>
          </div>

          <div className="timeline-card">
            <h3 className="card-title">Sistemas & Consultoría</h3>
            <p className="card-body">
              Implementación de CRM/ERP, optimización de procesos y acompañamiento técnico.
            </p>
          </div>

          <div className="timeline-card">
            <h3 className="card-title">Asesoría Técnica</h3>
            <p className="card-body">
              Revisión de arquitectura, recomendaciones técnicas y validación de decisiones.
            </p>
          </div>

        </div>

        <div style={{ marginTop: 20, textAlign: "right" }}>
          <Link to="/servicios">
            <Button variant="primary">Ver servicios completos</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
