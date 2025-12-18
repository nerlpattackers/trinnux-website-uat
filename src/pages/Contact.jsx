import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState({ submitting: false, ok: null, message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email check
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email address.";
    if (!form.message.trim()) return "Please add a brief message.";
    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ submitting: false, ok: false, message: err });
      return;
    }

    setStatus({ submitting: true, ok: null, message: "" });

    // Demo: simulate async submit
    setTimeout(() => {
      setStatus({ submitting: false, ok: true, message: "Thanks — we received your request. We will contact you soon." });
      setForm({ name: "", email: "", company: "", message: "" });
    }, 900);
  };

  return (
    <main>
      <section className="py-5">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="row g-4">
            <div className="col-md-5" data-aos="fade-right">
              <h2 className="section-title">Get in touch</h2>
              <p className="section-sub">Tell us briefly about your project and preferred timeline.</p>

              <div className="mt-4">
                <h6 className="mb-1">Contact details</h6>
                <p className="small text-muted mb-0">hello@trinnux.com</p>
                <p className="small text-muted">+63 912 345 678</p>
              </div>
            </div>

            <div className="col-md-7" data-aos="fade-left" data-aos-delay="120">
              <form onSubmit={onSubmit} noValidate>
                {status.message && (
                  <div className={`alert ${status.ok ? "alert-success" : "alert-danger"}`} role="alert">
                    {status.message}
                  </div>
                )}

                <div className="row g-2">
                  <div className="col-md-6">
                    <label className="form-label small">Full name</label>
                    <input name="name" value={form.name} onChange={onChange} className="form-control" placeholder="Your full name" required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small">Email</label>
                    <input name="email" value={form.email} onChange={onChange} className="form-control" type="email" placeholder="you@company.com" required />
                  </div>

                  <div className="col-12">
                    <label className="form-label small">Company (optional)</label>
                    <input name="company" value={form.company} onChange={onChange} className="form-control" placeholder="Company name" />
                  </div>

                  <div className="col-12">
                    <label className="form-label small">Message</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows="5" className="form-control" placeholder="How can we help?" required />
                  </div>

                  <div className="col-12 d-flex align-items-center gap-3">
                    <button type="submit" className="btn btn-primary" disabled={status.submitting}>
                      {status.submitting ? "Sending..." : "Send message"}
                    </button>
                    <small className="text-muted">We typically reply within one business day.</small>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
