import React from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../components/ui/Button";

// Datos de proyectos (puede crecer después)
const projects = {
  meshstep: {
    title: "MeshStep",
    icon: "🧬",
    description: `
      MeshStep es una plataforma de visualización y análisis de algoritmos
      de mallado geométrico. Desarrollada durante más de 2000 horas y
      presentada en la XXXIII Feria de Software UTFSM, donde recibió
      reconocimiento por su calidad técnica y aporte académico.
    `,
    stack: ["TypeScript", "React", "Node", "Python", "C++", "Make", "Algoritmos geométricos"],
    role: "Product Owner · Full-Stack Developer · Arquitectura del sistema"
  },

  mastertrack: {
    title: "MasterTrack",
    icon: "⚙️",
    description: `
      Plataforma utilizada en Rocked AD para automatizar el onboarding y adopción
      de clientes publicitarios, integrando CAPI, cuentas de Ads, tracking avanzado
      y procesos internos.
    `,
    stack: ["Node.js", "React", "MongoDB", "Redis", "Marketing API", "Automatización", "Docker"],
    role: "Full-Stack Developer · Integraciones · Backend · UI"
  },

  "inter-rocked-manager": {
    title: "Inter Rocked Manager",
    icon: "📊",
    description: `
      Sistema interno de gestión operativa para Rocked AD. Permite organizar procesos,
      administrar información interna y optimizar tareas administrativas.
    `,
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    role: "Full-Stack Developer · Infraestructura interna"
  },

  miplusvalia: {
    title: "Rediseño Web MiPlusvalia",
    icon: "🌐",
    description: `
      Rediseño completo del sitio MiPlusvalia para mejorar la experiencia de usuario,
      navegación, rendimiento y estética general.
    `,
    stack: ["PHP", "HTML", "CSS", "React", "UI/UX", "SEO"],
    role: "Full-Stack Developer · UI/UX"
  },

  "jr-crm": {
    title: "JR CRM",
    icon: "🗂️",
    description: `
      CRM completo creado para Soluciones RIDS. Incluye gestión de clientes,
      productos, inventario y reportes.
    `,
    stack: ["React", "Nest.js", "PostgreSQL", "TypeScript", "Docker"],
    role: "Full-Stack Developer · Arquitectura · Backend"
  },

  bikes: {
    title: "WebSite Bikes",
    icon: "🚲",
    description: `
      Sitio web profesional creado para un emprendimiento, siendo el primer trabajo
      como empresa Softwave SPA.
    `,
    stack: ["React", "MongoDB", "Nest.js", "CSS", "Docker"],
    role: "Full-Stack Developer · Diseño · Implementación"
  },

  homelab: {
    title: "HomeLab con Proxmox",
    icon: "🖥️",
    description: `
      HomeLab auto-gestionado basado en Proxmox, máquinas virtuales, contenedores Docker,
      reverse proxy, hosting de APIs, sitios web, bases de datos y automatizaciones.
    `,
    stack: ["Proxmox", "Docker", "NGINX", "Linux", "DevOps"],
    role: "SysAdmin · DevOps · Infraestructura"
  }
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <section className="section fade">
        <h2>Proyecto no encontrado</h2>
        <Link to="/portafolio"><Button variant="outline">Volver al portafolio</Button></Link>
      </section>
    );
  }

  return (
    <section className="section fade">

      {/* ===========================
          HEADER DEL PROYECTO
      ============================ */}
      <div
        className="project-card fade fade-delay-1"
        style={{
          padding: "28px 26px",
          marginBottom: "32px",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div className="project-icon" style={{ fontSize: 28 }}>
            {project.icon}
          </div>
          <h1 className="hero-title" style={{ margin: 0 }}>
            {project.title}
          </h1>
        </div>

        <p
          style={{
            maxWidth: "760px",
            marginTop: 16,
            color: "var(--text-soft)",
            fontSize: 15,
            lineHeight: 1.55,
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Separador luminoso */}
      <div className="section-divider fade fade-delay-2" />

      {/* ===========================
          ROL
      ============================ */}
      <h3 className="section-title fade fade-delay-2">Rol en el proyecto</h3>

      <p
        className="fade fade-delay-3"
        style={{
          maxWidth: "720px",
          marginTop: 8,
          fontSize: 15,
          lineHeight: 1.5,
        }}
      >
        {project.role}
      </p>

      {/* ===========================
          STACK
      ============================ */}
      <h3 className="section-title fade fade-delay-3" style={{ marginTop: 28 }}>
        Tecnologías utilizadas
      </h3>

      <div
        className="fade fade-delay-4"
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginTop: 12,
        }}
      >
        {project.stack.map((s) => (
          <span key={s} className="badge-mini">
            {s}
          </span>
        ))}
      </div>

      {/* ===========================
          CTA FINAL
      ============================ */}
      <div className="fade fade-delay-5" style={{ marginTop: 40 }}>
        <Link to="/portafolio">
          <Button variant="outline">← Volver al portafolio</Button>
        </Link>
      </div>

    </section>
  );

}
