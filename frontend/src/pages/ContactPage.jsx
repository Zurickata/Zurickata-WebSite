import React, { useState, useEffect } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/TextArea";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import axios from "axios";
import emailjs from "@emailjs/browser";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  serviceType: "",
  message: "",
  howDidYouFindMe: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [botField, setBotField] = useState(""); // honeypot
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Validación un poco más estricta y amigable
  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 3) {
      newErrors.fullName = "Ingresa tu nombre completo (al menos 3 caracteres).";
    }

    if (!form.email.trim()) {
      newErrors.email = "Ingresa tu correo.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email.trim())) {
        newErrors.email = "Ingresa un correo válido.";
      }
    }

    if (!form.serviceType.trim()) {
      newErrors.serviceType = "Selecciona el tipo de servicio.";
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = "Cuéntame un poco más sobre lo que necesitas.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: si el campo oculto tiene algo, asumimos bot y salimos silenciosamente
    if (botField.trim()) {
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // 1) Enviar lead a tu backend
      const leadPromise = axios.post("http://localhost:3000/leads", form);

      // 2) Enviar correo vía EmailJS
      const emailPromise = emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          fullName: form.fullName,
          email: form.email,
          phone: form.phone || "No especificado",
          company: form.company || "No especificado",
          serviceType: form.serviceType || "No especificado",
          message: form.message,
          howDidYouFindMe: form.howDidYouFindMe || "No especificado",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await Promise.all([leadPromise, emailPromise]);

      setStatus("success");
      setForm(initialForm);
      setErrors({});

      // Scroll suave al principio del formulario para que vea el banner
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(
        "Ocurrió un problema al enviar el mensaje. Intenta nuevamente o escríbeme directamente a tu correo de contacto."
      );
    }
  };

  // Auto-ocultar banner de éxito después de unos segundos
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="section fade">
      <SectionTitle
        title="Conversemos sobre tu proyecto"
        subtitle="Cuéntame qué necesitas y te responderé con ideas concretas de cómo podemos avanzar."
        chip="Contacto"
      />

      {/* Banner de feedback */}
      {status === "success" && (
        <div className="form-banner form-banner-success fade fade-delay-1">
          <strong>¡Gracias!</strong> Tu mensaje fue enviado correctamente. Te responderé pronto.
        </div>
      )}

      {status === "error" && (
        <div className="form-banner form-banner-error fade fade-delay-1">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-grid fade fade-delay-2">
        {/* honeypot (oculto) */}
        <input
          type="text"
          name="botField"
          autoComplete="off"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
          style={{ display: "none" }}
        />

        <div>
          <Input
            label="Nombre completo"
            name="fullName"
            placeholder="Ej: Rodrigo Ramírez"
            value={form.fullName}
            onChange={handleChange}
            helper="Cómo te llamo en la primera respuesta."
            error={errors.fullName}
          />
        </div>

        <div>
          <Input
            label="Correo electrónico"
            name="email"
            type="email"
            placeholder="tu-correo@ejemplo.com"
            value={form.email}
            onChange={handleChange}
            helper="Aquí recibirás la respuesta."
            error={errors.email}
          />
        </div>

        <div>
          <Input
            label="Teléfono (opcional)"
            name="phone"
            type="tel"
            placeholder="+56 9 ..."
            value={form.phone}
            onChange={handleChange}
            helper="Solo si prefieres que te contacte por teléfono o WhatsApp."
          />
        </div>

        <div>
          <Input
            label="Empresa (opcional)"
            name="company"
            placeholder="Nombre de tu empresa o proyecto"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div>
          <Select
            label="Tipo de servicio"
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            helper="Selecciona lo que más se aproxime a lo que necesitas."
            error={errors.serviceType}
          >
            <option value="">Seleccionar...</option>
            <option value="desarrollo-web">Desarrollo de aplicación web</option>
            <option value="landing-page">Landing page / sitio informativo</option>
            <option value="sistema-gestion">Sistema de ventas / CRM / ERP</option>
            <option value="asesoria">Asesoría técnica / consultoría</option>
            <option value="servicio_tecnico">Servicio Técnico</option>
            <option value="otro">Otro / no estoy seguro</option>
          </Select>

          {/* Tip contextual dinámico según tipo de servicio */}
          {form.serviceType === "servicio_tecnico" && (
            <div className="form-helper">
              Indica en el mensaje si necesitas limpieza, instalación de hardware,
              formateo o configuración de software.
            </div>
          )}
          {form.serviceType === "desarrollo-web" && (
            <div className="form-helper">
              Si tienes referencias de sitios que te gusten, compártelas en el mensaje.
            </div>
          )}
        </div>

        <div>
          <Input
            label="¿Cómo llegaste aquí? (opcional)"
            name="howDidYouFindMe"
            placeholder="Ej: recomendación, LinkedIn, Google..."
            value={form.howDidYouFindMe}
            onChange={handleChange}
          />
        </div>

        <div className="form-grid-full">
          <Textarea
            label="Cuéntame brevemente qué necesitas"
            name="message"
            rows={5}
            placeholder="Ej: Necesito una plataforma interna para gestionar ventas y reportes, integrada con..."
            value={form.message}
            onChange={handleChange}
            error={errors.message}
          />
        </div>

        <div className="form-grid-full" style={{ marginTop: 6 }}>
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </div>
      </form>
    </section>
  );
}
