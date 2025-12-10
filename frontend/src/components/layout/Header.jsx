import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const avatarRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const avatar = avatarRef.current;
      const dot = dotRef.current;
      if (!avatar || !dot) return;

      const rect = avatar.getBoundingClientRect();

      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const max = rect.width * 0.15; // 15% del tamaño → elegante, no exagerado

      const limitedX = Math.max(-max, Math.min(max, x));
      const limitedY = Math.max(-max, Math.min(max, y));

      dot.style.transform = `translate(${limitedX}px, ${limitedY}px)`;
    };

    const reset = () => {
      const dot = dotRef.current;
      if (dot) dot.style.transform = "translate(0,0)";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  const navItems = [
    { to: "/", label: "Inicio", end: true },
    { to: "/sobre-mi", label: "Sobre mí" },
    { to: "/servicios", label: "Servicios" },
    { to: "/portafolio", label: "Portafolio" },
  ];

  const renderNavLink = ({ to, label, end }) => (
    <NavLink
      key={to}
      to={to}
      end={end}
      className={({ isActive }) =>
        "nav-link" + (isActive ? " nav-link-active" : "")
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header className={`app-header ${open ? "header-open" : ""}`}>
      <div className="app-header-inner">

        {/* BRAND */}
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-avatar-glow" ref={avatarRef}>
            <div className="brand-avatar-dot" ref={dotRef} />
          </div>
          <div className="brand-text">
            <span className="brand-name">Rodrigo Ramírez</span>
            <span className="brand-role">Full-Stack Developer</span>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="nav-links">
          {navItems.map(renderNavLink)}

          <Link to="/contacto" className="nav-cta">
            Hablemos
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`nav-links-mobile ${open ? "visible" : ""}`}>
        {navItems.map(renderNavLink)}

        <Link
          to="/contacto"
          className="nav-cta"
          style={{ display: "inline-flex", marginTop: 6 }}
          onClick={() => setOpen(false)}
        >
          Hablemos
        </Link>
      </div>
    </header>
  );
}
