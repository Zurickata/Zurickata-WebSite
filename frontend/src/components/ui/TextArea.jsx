import React from "react";

export default function Textarea({ label, helper, error, rows = 4, ...props }) {
  return (
    <div>
      {label && <div className="form-label">{label}</div>}
      <textarea className="form-control" rows={rows} {...props} />
      {helper && !error && <div className="form-helper">{helper}</div>}
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}
