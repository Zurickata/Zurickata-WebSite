import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <div className="footer-dot" /> Rodrigo Ramírez
        </div>

        <div className="footer-links">
          <a href="mailto:rodrigoramirezcatrileo@gmail.com" className="footer-link">
            📩 Correo
          </a>

          <a
            href="https://github.com/Zurickata"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            🐙 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rodrigo-ramirez-catrileo"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            💼 LinkedIn
          </a>

          <Link to="/sobre-mi" className="footer-link">
            👤 Sobre mí
          </Link>
        </div>

        <div className="footer-copy">
          © {year} Rodrigo Ramírez · Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
