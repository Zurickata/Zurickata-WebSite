import React from "react";

export default function Input({
  label,
  helper,
  error,
  ...props
}) {
  return (
    <div>
      {label && <div className="form-label">{label}</div>}
      <input className="form-control" {...props} />
      {helper && !error && <div className="form-helper">{helper}</div>}
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}
