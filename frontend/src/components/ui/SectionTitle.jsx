import React from "react";

export default function SectionTitle({ title, subtitle, chip }) {
  return (
    <div className="section-header">
      <div>
        {chip && (
          <span className="section-chip">{chip}</span>
        )}

        <h2 className="section-title">
          {title}
        </h2>

        {subtitle && (
          <p className="section-subtitle">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
