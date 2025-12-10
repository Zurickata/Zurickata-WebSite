import React from "react";

export default function Button({ variant = "primary", size = "md", children, ...props }) {
  const classes = [
    "btn",
    variant === "primary" ? "btn-primary" : "btn-outline",
    size === "sm" ? "btn-sm" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
