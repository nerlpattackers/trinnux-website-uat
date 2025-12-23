import React, { useState } from "react";
import "../styles/contact-quote.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    ok: null,
    message: "",
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/\S+@\S+\.\S+/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.message.trim())
      return "Please describe your requirements.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setStatus({ submitting: false, ok: false, message: err });
      return;
    }

    setStatus({ submitting: true, ok: null, message: "" });

    try {
      const res = await fetch(
        "https://trinnux-slack-proxy-production.up.railway.app/quote-submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error();

      setStatus({
        submitting: false,
        ok: true,
        message:
          "Your request has been sent successfully. Our team will review your requirements and get back to you within one business day.",
      });

      setForm({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setStatus({
        submitting: false,
        ok: false,
        message:
          "Unable to send your request right now. Please try again later.",
      });
    }
  };

  return (
    <main className="quote-page">
      {/* HERO */}
      <section className="quote-hero">
        <div className="quote-hero-inner">
          <h1>Request a Quote</h1>
          <p>
            Tell us about your project, infrastructure, or support needs.
            Our engineers will assess your requirements and provide a
            tailored quotation — no obligation.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="quote-form-section">
        <form className="quote-form-card" onSubmit={onSubmit} noValidate>
          {status.message && (
            <div
              className={`quote-alert ${
                status.ok ? "success" : "error"
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="quote-grid">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Full name"
            />

            <input
              name="email"
              value={form.email}
              onChange={onChange}
              type="email"
              placeholder="Business email"
            />

            <input
              name="company"
              value={form.company}
              onChange={onChange}
              placeholder="Company (optional)"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows="4"
              placeholder="Briefly describe your requirements, scope, or timeline…"
            />
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className="quote-submit"
          >
            {status.submitting ? "Submitting…" : "Request Quote"}
          </button>

          <div className="quote-footer">
            <span>sales@trinnux.com</span>
            <span>Response within one business day</span>
          </div>
        </form>
      </section>
    </main>
  );
}
