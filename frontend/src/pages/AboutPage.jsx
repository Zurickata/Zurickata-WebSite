import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="section fade">

      {/* ===========================
          SECTION HEADER
      ============================ */}
      <div className="fade fade-delay-1">
        <SectionTitle
          title="Sobre mí"
          subtitle="Construyo software con enfoque en claridad, calidad técnica y creación de valor real para las personas y organizaciones."
          chip="Quién soy"
        />
      </div>

      {/* ===========================
          PRESENTACIÓN GENERAL
      ============================ */}
      <div className="grid-2" style={{ marginBottom: 28 }}>
        <div className="fade fade-delay-2">
          <Card title="Hola, soy Rodrigo Ramírez" tag="Full-Stack Developer">
            <p style={{ fontSize: 14, marginBottom: 12 }}>
              Soy <strong>Desarrollador Full-Stack</strong> e Ingeniero Civil
              Informático. Actualmente trabajo en{" "}
              <strong>Rocked AD</strong> desarrollando aplicaciones web,
              APIs y herramientas orientadas a optimizar productos digitales.
            </p>

            <p style={{ fontSize: 14, marginBottom: 12 }}>
              Desde diciembre de 2025 desempeño este rol a tiempo completo y
              paralelamente soy <strong>co-fundador de Softwave SPA</strong>,
              empresa donde diseño e implemento soluciones para clientes de
              distintos rubros.
            </p>

            <p style={{ fontSize: 14 }}>
              Me interesa construir software que sea claro, mantenible y
              escalable, aplicado a problemas reales y con impacto directo en
              la operación o crecimiento de un negocio.
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-3">
          <Card title="Mi enfoque de trabajo" tag="Filosofía">
            <p style={{ fontSize: 14, marginBottom: 12 }}>
              El desarrollo no es solo escribir código: es entender profundamente
              un problema y sus procesos para hacer que la tecnología trabaje a favor de las
              personas. Me gusta trabajar con transparencia, iteración constante
              y comunicación clara.
            </p>

            <ul style={{ paddingLeft: 18, color: "var(--text-soft)" }}>
              <li>Arquitecturas limpias y mantenibles</li>
              <li>Diseño iterativo y centrado en el usuario</li>
              <li>Comunicación técnica precisa</li>
              <li>Entregas frecuentes con valor real</li>
              <li>Acompañamiento técnico continuo</li>
            </ul>

            <p style={{ fontSize: 14, marginTop: 12 }}>
              También cuento con amplia experiencia en docencia universitaria,
              lo que me permite explicar conceptos complejos de forma simple
              y guiar equipos en buenas prácticas.
            </p>
          </Card>
        </div>
      </div>

      <div className="section-divider fade fade-delay-3" />

      {/* ===========================
          EXPERIENCIA PROFESIONAL
      ============================ */}
      <div className="fade fade-delay-1">
        <SectionTitle
          title="Experiencia profesional"
          subtitle="Trayectoria que combina desarrollo, soporte técnico, análisis de datos y docencia."
          chip="Experiencia"
        />
      </div>

      <div className="grid-2" style={{ marginBottom: 28 }}>
        <div className="fade fade-delay-2">
          <Card
            title="Rocked AD"
            subtitle="Desarrollador Full-Stack"
            tag="2025 – Presente"
          >
            <p style={{ fontSize: 14 }}>
              Desarrollo de plataformas web, APIs, componentes frontend y lógica
              backend, integración de plataformas de Ads y marketing digital.
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-3">
          <Card
            title="Softwave SPA"
            subtitle="Co-fundador / Full-Stack Developer"
            tag="2024 – Presente"
          >
            <p style={{ fontSize: 14 }}>
              Desarrollo de soluciones a medida, consultoría técnica y liderazgo
              en gestión interna y relación con clientes.
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-4">
          <Card
            title="UTFSM · Laboratorio de Desarrollo de Software"
            subtitle="Coordinador de Laboratorios del DI"
            tag="2022 – 2025"
          >
            <p style={{ fontSize: 14 }}>
              Administración de sistemas Linux, mantenimiento de infraestructura,
              creación de imágenes y soporte técnico avanzado.
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-2">
          <Card
            title="Ayudantías universitarias"
            subtitle="Análisis y Diseño de Software · Programación"
            tag="2023 – 2024"
          >
            <p style={{ fontSize: 14 }}>
              Guía en buenas prácticas, corrección de proyectos,
              comunicación técnica y apoyo académico.
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-3">
          <Card
            title="Práctica - Banco de Chile"
            subtitle="Analista de Datos Junior"
            tag="2023"
          >
            <p style={{ fontSize: 14 }}>
              Automatización de reportes manuales, levantamiento de sistemas legados,
              documentación de procesos y limpieza de informes.
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-4">
          <Card
            title="Soluciones RIDS"
            subtitle="Técnico Informático"
            tag="2024 – 2025"
          >
            <p style={{ fontSize: 14 }}>
              Soporte técnico, armado de equipos, soporte en software corporativo, administración de Servidores Linux/Windows, resolución de fallas y asesoría tecnológica.
            </p>
          </Card>
        </div>
      </div>

      <div className="section-divider fade fade-delay-3" />

      {/* ===========================
          LOGROS DESTACADOS
      ============================ */}
      <div className="fade fade-delay-1">
        <SectionTitle
          title="Logros destacados"
          subtitle="Reconocimientos y certificaciones que respaldan mi enfoque profesional."
          chip="Logros"
        />
      </div>

      <div className="grid-2" style={{ marginBottom: 28 }}>
        <div className="fade fade-delay-2">
          <Card
            title="MeshStep – Feria de Software UTFSM 2025"
            subtitle="Proyecto destacado · 2000 horas"
            tag="Premio académico"
          >
            <p style={{ fontSize: 14, marginBottom: 12 }}>
              Desarrollo de una herramienta de visualización para algoritmos
              de mallado geométrico. Presentado en la XXXIII Feria de Software 2025,
              obteniendo diploma de reconocimiento por desempeño destacado.
            </p>
            <p style={{ fontSize: 13, color: "var(--text-soft)" }}>
              Rol: Product Owner · Desarrollo full-stack · Visualización
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-3">
          <Card
            title="Certificación Microsoft & LinkedIn"
            subtitle="Fundamentos Profesionales del Desarrollo de Software"
            tag="Certificado"
          >
            <p style={{ fontSize: 14, marginBottom: 12 }}>
              Certificación que refuerza bases sólidas en programación y fundamentos
              de ingeniería de software, completada en agosto de 2024.
            </p>
            <p style={{ fontSize: 13, color: "var(--text-soft)" }}>
              Áreas: Programación · Buenas prácticas · Fundamentos técnicos
            </p>
          </Card>
        </div>
      </div>

      <div className="section-divider fade fade-delay-3" />

      {/* ===========================
          STACK TÉCNICO
      ============================ */}
      <div className="fade fade-delay-1">
        <SectionTitle
          title="Stack técnico"
          subtitle="Tecnologías con las que trabajo en mis proyectos profesionales y personales."
          chip="Tecnologías"
        />
      </div>

      <div className="grid-3" style={{ marginBottom: 28 }}>
        <div className="fade fade-delay-2">
          <Card title="Frontend" tag="UI/UX · SPA">
            <p style={{ fontSize: 13, color: "var(--text-soft)" }}>
              React · Vite · HTML · PHP · JS · Component-driven development · Responsive design
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-3">
          <Card title="Backend" tag="APIs">
            <p style={{ fontSize: 13, color: "var(--text-soft)" }}>
              Node.js · NestJS · Express · Arquitectura de capas · Validación · JWT
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-4">
          <Card title="Bases de datos" tag="SQL/NoSQL">
            <p style={{ fontSize: 13, color: "var(--text-soft)" }}>
              PostgreSQL · MongoDB · MySQL · Diseño de modelos y normalización
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-2">
          <Card title="Infraestructura & DevOps" tag="Ops">
            <p style={{ fontSize: 13, color: "var(--text-soft)" }}>
              Docker · Linux · SSH · Servidores VPS · Proxmox · Automatización básica
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-3">
          <Card title="Herramientas de trabajo" tag="Productividad">
            <p style={{ fontSize: 13, color: "var(--text-soft)" }}>
              Git/GitHub · Postman · Flourish · Office · Análisis de datos
            </p>
          </Card>
        </div>

        <div className="fade fade-delay-4">
          <Card title="Habilidades blandas" tag="Comunicación">
            <p style={{ fontSize: 13, color: "var(--text-soft)" }}>
              Trabajo en equipo · Liderazgo · Resolución de problemas · Atención al
              usuario · Enseñanza técnica
            </p>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="fade fade-delay-4" style={{ textAlign: "right", marginTop: 16 }}>
        <Link to="/contacto">
          <Button variant="primary">Conversemos sobre tu proyecto</Button>
        </Link>
      </div>
    </section>
  );
}
