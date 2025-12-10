import React from "react";

export default function Select({ label, helper, error, children, ...props }) {
  return (
    <div>
      {label && <div className="form-label">{label}</div>}
      <select className="form-control" {...props}>
        {children}
      </select>
      {helper && !error && <div className="form-helper">{helper}</div>}
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}
