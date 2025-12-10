import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function PortfolioPage() {
  return (
    <section className="section fade">

      {/* ============================================================
          HEADER PRINCIPAL (ÚNICAMENTE ESTE)
      ============================================================ */}
      <div className="fade fade-delay-1">
        <SectionTitle
          chip="Portafolio"
          title="Proyectos y soluciones que he construido"
          subtitle="Una selección curada de mis desarrollos profesionales, académicos y de infraestructura. Cada proyecto refleja una combinación de diseño, ingeniería y propósito real."
        />
      </div>

      {/* ============================================================
          PROYECTOS DESTACADOS (MeshStep + MasterTrack)
      ============================================================ */}
      <div className="section-divider" />

      <div className="fade fade-delay-1">
        <SectionTitle
          chip="Destacados"
          title="Proyectos principales"
          subtitle="Desarrollos de alto impacto técnico y profesional."
        />
      </div>

      <div className="grid-2" style={{ marginBottom: 28 }}>
        
        {/* MeshStep */}
        <div className="project-card fade fade-delay-2">
          <div className="project-icon">🧬</div>
          <h3 className="card-title" style={{ marginTop: 12 }}>MeshStep</h3>
          <p className="card-subtitle">
            Software de visualización de algoritmos geométricos — 2000 horas — Proyecto destacado Feria de Software 2025.
          </p>

          <p className="card-body" style={{ marginTop: 10 }}>
            Plataforma que permite analizar y visualizar algoritmos de mallado geométrico.
            Reconocido por la UTFSM por su calidad técnica y aporte académico.
          </p>

          <Link to="/portafolio/meshstep">
            <Button variant="outline" style={{ marginTop: 14 }}>Ver detalles →</Button>
          </Link>
        </div>

        {/* MasterTrack */}
        <div className="project-card fade fade-delay-3">
          <div className="project-icon">⚙️</div>
          <h3 className="card-title" style={{ marginTop: 12 }}>MasterTrack</h3>
          <p className="card-subtitle">
            Plataforma profesional — Rocked AD.
          </p>

          <p className="card-body" style={{ marginTop: 10 }}>
            Sistema para automatizar procesos de adopción de clientes, configuración de CAPI,
            gestión de cuentas publicitarias y flujos de onboarding.
          </p>

          <Link to="/portafolio/mastertrack">
            <Button variant="outline" style={{ marginTop: 14 }}>Ver detalles →</Button>
          </Link>
        </div>
      </div>

      {/* ============================================================
          PROYECTOS PROFESIONALES ROCKED AD
      ============================================================ */}
      <div className="section-divider" />

      <div className="fade fade-delay-1">
        <SectionTitle
          chip="Trabajo profesional"
          title="Desarrollos en Rocked AD"
          subtitle="Sistemas internos y proyectos para clientes, centrados en automatización y gestión."
        />
      </div>

      <div className="grid-2" style={{ marginBottom: 28 }}>
        {/* Inter Rocked Manager */}
        <div className="project-card fade fade-delay-2">
          <div className="project-icon">📊</div>
          <h3 className="card-title" style={{ marginTop: 12 }}>Inter Rocked Manager</h3>
          <p className="card-subtitle">
            Sistema de gestión interna — Rocked AD.
          </p>
          <p className="card-body" style={{ marginTop: 10 }}>
            Herramienta interna para la administración operacional, organización y control
            de procesos dentro de la empresa.
          </p>

          <Link to="/portafolio/inter-rocked-manager">
            <Button variant="outline" style={{ marginTop: 14 }}>Ver detalles →</Button>
          </Link>
        </div>

        {/* MiPlusvalia */}
        <div className="project-card fade fade-delay-3">
          <div className="project-icon">🌐</div>
          <h3 className="card-title" style={{ marginTop: 12 }}>Rediseño Web MiPlusvalia</h3>
          <p className="card-subtitle">
            Cliente real — Rocked AD.
          </p>
          <p className="card-body" style={{ marginTop: 10 }}>
            Rediseño profesional enfocado en optimizar UI, mejorar experiencia de usuario,
            velocidad y estructura general del sitio.
          </p>

          <Link to="/portafolio/miplusvalia">
            <Button variant="outline" style={{ marginTop: 14 }}>Ver detalles →</Button>
          </Link>
        </div>
      </div>

      {/* ============================================================
          SOLUCIONES PARA CLIENTES (Softwave SPA y otros)
      ============================================================ */}
      <div className="section-divider" />

      <div className="fade fade-delay-1">
        <SectionTitle
          chip="Clientes"
          title="Soluciones desarrolladas para clientes"
          subtitle="Desarrollos que agregan valor real a emprendimientos y empresas."
        />
      </div>

      <div className="grid-2" style={{ marginBottom: 28 }}>

        {/* JR CRM */}
        <div className="project-card fade fade-delay-2">
          <div className="project-icon">🗂️</div>
          <h3 className="card-title" style={{ marginTop: 12 }}>JR CRM</h3>
          <p className="card-subtitle">
            Sistema CRM — Soluciones RIDS.
          </p>
          <p className="card-body" style={{ marginTop: 10 }}>
            Plataforma completa para gestionar clientes, productos, inventario
            y reportes. Construido desde cero en un entorno real.
          </p>

          <Link to="/portafolio/jr-crm">
            <Button variant="outline" style={{ marginTop: 14 }}>Ver detalles →</Button>
          </Link>
        </div>

        {/* Bikes Website */}
        <div className="project-card fade fade-delay-3">
          <div className="project-icon">🚲</div>
          <h3 className="card-title" style={{ marginTop: 12 }}>WebSite Bikes</h3>
          <p className="card-subtitle">
            Cliente de Softwave SPA — Primer proyecto de la empresa.
          </p>
          <p className="card-body" style={{ marginTop: 10 }}>
            Sitio web moderno diseñado e implementado para un emprendimiento,
            nuestro primer cliente como Softwave SPA.
          </p>

          <Link to="/portafolio/bikes">
            <Button variant="outline" style={{ marginTop: 14 }}>Ver detalles →</Button>
          </Link>
        </div>

      </div>

      {/* ============================================================
          INFRAESTRUCTURA & DEVOPS
      ============================================================ */}
      <div className="section-divider" />

      <div className="fade fade-delay-1">
        <SectionTitle
          chip="Infraestructura"
          title="HomeLab Proxmox & VPS Hosting"
          subtitle="Mi propio ecosistema para desplegar páginas web, APIs y servicios."
        />
      </div>

      <div className="grid-2">

        <div className="project-card fade fade-delay-2">
          <div className="project-icon">🖥️</div>
          <h3 className="card-title" style={{ marginTop: 12 }}>
            HomeLab con Proxmox
          </h3>

          <p className="card-body" style={{ marginTop: 10 }}>
            HomeLab completamente auto-gestionado: virtualización con Proxmox, contenedores
            Docker, reverse proxy, seguridad, monitoreo, bases de datos y despliegue continuo.
            Además administro un VPS para proyectos de clientes.
          </p>

          <Link to="/portafolio/homelab">
            <Button variant="outline" style={{ marginTop: 14 }}>Ver detalles →</Button>
          </Link>
        </div>

      </div>

    </section>
  );
}
