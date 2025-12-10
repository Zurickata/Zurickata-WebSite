import React from "react";

export default function Card({ title, subtitle, tag, children, footer }) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
        {tag && <span className="card-tag">{tag}</span>}
      </div>
      {children && <div className="card-body">{children}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
