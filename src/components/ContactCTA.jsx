// src/components/ContactCTA.jsx
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import "../styles/contactcta.css";

const COOLDOWN_KEY = "ctaCooldownUntil";

export default function ContactCTA() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cooldown, setCooldown] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  /* Restore cooldown from localStorage */
  useEffect(() => {
    const stored = localStorage.getItem(COOLDOWN_KEY);
    if (!stored) return;

    const remaining = Math.ceil((Number(stored) - Date.now()) / 1000);
    if (remaining > 0) {
      setCooldown(remaining);
      setError("Too many submissions. Please try again later.");
    } else {
      localStorage.removeItem(COOLDOWN_KEY);
    }
  }, []);

  /* Countdown tick */
  useEffect(() => {
    if (cooldown <= 0) {
      localStorage.removeItem(COOLDOWN_KEY);
      return;
    }
    const timer = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* Submit to new backend endpoint */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || cooldown > 0) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://trinnux-slack-proxy-production.up.railway.app/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.status === 429) {
        const retryAfter = Number(res.headers.get("Retry-After")) || 900;
        const until = Date.now() + retryAfter * 1000;

        localStorage.setItem(COOLDOWN_KEY, until);
        setCooldown(retryAfter);
        setError(data?.error || "Too many submissions. Please try again later.");
        return;
      }

      if (!res.ok) {
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }

      // SUCCESS
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      setTimeout(() => setSent(false), 3500);
    } catch (err) {
      setError("Network error. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cta-v3-section reveal" aria-labelledby="contact-cta">
      <div className="cta-v3-overlay"></div>

      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 id="contact-cta" className="cta-v3-title">
            Let’s talk about your project
          </h2>
          <p className="cta-v3-sub">
            Our engineers will get back to you within the day — no sales pressure, ever.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="cta-v3-card p-4">

              {error && (
                <div className="cta-v3-error">
                  {error}
                  {cooldown > 0 && (
                    <div className="cta-v3-countdown">
                      Try again in <strong>{cooldown}s</strong>
                    </div>
                  )}
                </div>
              )}

              {sent && (
                <div className="cta-v3-success">
                  Thank you! We'll get in touch shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6 cta-v3-input-wrap">
                  <User className="cta-v3-icon" size={18} />
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-control cta-v3-input"
                  />
                </div>

                <div className="col-md-6 cta-v3-input-wrap">
                  <Mail className="cta-v3-icon" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-control cta-v3-input"
                  />
                </div>

                <div className="col-md-6 cta-v3-input-wrap">
                  <Phone className="cta-v3-icon" size={18} />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone (optional)"
                    className="form-control cta-v3-input"
                  />
                </div>

                <div className="col-md-6 cta-v3-input-wrap">
                  <Building2 className="cta-v3-icon" size={18} />
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="form-control cta-v3-input"
                  />
                </div>

                <div className="col-12 cta-v3-input-wrap">
                  <MessageSquare className="cta-v3-icon" size={18} />
                  <textarea
                    name="message"
                    rows="3"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    className="form-control cta-v3-input"
                  />
                </div>

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="cta-v3-btn btn-maroon-gradient"
                    disabled={loading || cooldown > 0}
                  >
                    {cooldown > 0
                      ? `Please wait (${cooldown}s)`
                      : loading
                      ? "Sending..."
                      : "Send message"}
                  </button>
                </div>
              </form>

              <div className="cta-v3-channels mt-4">
                <div><Phone size={18} /> +63 912 345 6789</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
