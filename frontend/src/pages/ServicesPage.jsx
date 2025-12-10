import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <section className="section fade">

      {/* ===========================
          HEADER
      ============================ */}
      <div className="fade fade-delay-1">
        <SectionTitle
          chip="Servicios"
          title="Soluciones diseñadas para entregar valor real"
          subtitle="Ofrezco servicios enfocados en desarrollo full-stack, consultoría tecnológica, infraestructura y soporte, ayudando a empresas y personas a construir tecnología útil y mantenible."
        />
      </div>

      {/* ===========================
          SERVICES GRID
      ============================ */}
      <div className="grid-2" style={{ marginTop: 24 }}>

        {/* Desarrollo Web */}
        <div className="service-card fade fade-delay-1">
          <div className="service-icon">💻</div>

          <h3 className="card-title" style={{ marginTop: 12 }}>
            Desarrollo Web & Full-Stack
          </h3>
          <p className="card-subtitle">
            Aplicaciones modernas, escalables y diseñadas a medida.
          </p>

          <ul style={{ marginTop: 12, paddingLeft: 18, fontSize: 13, color: "var(--text-soft)" }}>
            <li>Aplicaciones web completas</li>
            <li>APIs y backend con Node & Nest</li>
            <li>Paneles internos y dashboards</li>
            <li>Integración con servicios externos</li>
          </ul>

          <div style={{ marginTop: 16 }}>
            <Link to="/contacto">
              <Button variant="outline">Hablemos de tu proyecto →</Button>
            </Link>
          </div>
        </div>

        {/* Consultoría */}
        <div className="service-card fade fade-delay-2">
          <div className="service-icon">🧩</div>

          <h3 className="card-title" style={{ marginTop: 12 }}>
            Implementación de Sistemas & Consultoría
          </h3>
          <p className="card-subtitle">
            Alineo procesos, tecnología y herramientas para tu negocio.
          </p>

          <ul style={{ marginTop: 12, paddingLeft: 18, fontSize: 13, color: "var(--text-soft)" }}>
            <li>Implementación CRM/ERP</li>
            <li>Optimización de procesos internos</li>
            <li>Automatización de flujos</li>
            <li>Integración entre plataformas</li>
          </ul>

          <div style={{ marginTop: 16 }}>
            <Link to="/contacto">
              <Button variant="outline">Revisemos tus necesidades →</Button>
            </Link>
          </div>
        </div>

        {/* Asesoría Técnica */}
        <div className="service-card fade fade-delay-3">
          <div className="service-icon">🔍</div>

          <h3 className="card-title" style={{ marginTop: 12 }}>
            Asesoría Técnica & Auditoría
          </h3>
          <p className="card-subtitle">
            Acompañamiento experto para decisiones técnicas clave.
          </p>

          <ul style={{ marginTop: 12, paddingLeft: 18, fontSize: 13, color: "var(--text-soft)" }}>
            <li>Revisión de arquitectura</li>
            <li>Análisis de calidad de código</li>
            <li>Evaluación de stack & performance</li>
            <li>Informe técnico con riesgos y mejoras</li>
          </ul>

          <div style={{ marginTop: 16 }}>
            <Link to="/contacto">
              <Button variant="outline">Solicitar asesoría →</Button>
            </Link>
          </div>
        </div>

        {/* Servicio Técnico — NUEVO */}
        <div className="service-card fade fade-delay-4">
          <div className="service-icon">🛠️</div>

          <h3 className="card-title" style={{ marginTop: 12 }}>
            Servicio Técnico & Mantención
          </h3>
          <p className="card-subtitle">
            Soporte integral para mantener tus equipos en óptimas condiciones.
          </p>

          <ul style={{ marginTop: 12, paddingLeft: 18, fontSize: 13, color: "var(--text-soft)" }}>
            <li>Limpieza y optimización de computadores</li>
            <li>Instalación y reemplazo de hardware</li>
            <li>Configuración de programas y entornos</li>
            <li>Formateo y reinstalación de sistemas</li>
            <li>Diagnóstico y resolución de fallas</li>
          </ul>

          <div style={{ marginTop: 16 }}>
            <Link to="/contacto">
              <Button variant="outline">Solicitar mantención →</Button>
            </Link>
          </div>
        </div>

      </div>

      {/* ===========================
          WHY WORK WITH ME
      ============================ */}
      <div className="section fade" style={{ marginTop: 32 }}>
        <SectionTitle
          chip="Valor agregado"
          title="¿Por qué trabajar conmigo?"
          subtitle="Mi enfoque combina claridad técnica, comunicación efectiva y un compromiso real con entregar soluciones mantenibles."
        />

        <div className="grid-3" style={{ marginTop: 24 }}>

          <div className="timeline-card service-delay-3">
            <h3 className="card-title">Claridad & Comunicación</h3>
            <p className="card-body">
              Explico conceptos técnicos de forma clara, evitando ruido innecesario.
            </p>
          </div>

          <div className="timeline-card service-delay-3">
            <h3 className="card-title">Arquitecturas Mantenibles</h3>
            <p className="card-body">
              Diseño sistemas que soportan crecimiento sin convertirse en deuda técnica.
            </p>
          </div>

          <div className="timeline-card service-delay-3">
            <h3 className="card-title">Experiencia Real</h3>
            <p className="card-body">
              He trabajado con empresas, startups, instituciones y equipos académicos.
            </p>
          </div>

        </div>
      </div>

      {/* CTA FINAL */}
      <div className="fade fade-delay-4" style={{ marginTop: 32, textAlign: "right" }}>
        <Link to="/contacto">
          <Button variant="primary">Conversemos sobre tu proyecto</Button>
        </Link>
      </div>

    </section>
  );
}
