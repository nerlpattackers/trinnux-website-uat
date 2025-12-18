import React from 'react';

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // replace with real form integration as needed
    alert('Message submitted! (demo)');
  };

  return (
    <section id="contact" className="py-5 reveal" data-aos="fade-up" data-aos-delay="100">
      <div className="container" style={{ maxWidth: 720 }}>
        <h4 className="fw-bold" data-aos="fade-up" data-aos-delay="150">Get in touch</h4>
        <p className="text-muted" data-aos="fade-up" data-aos-delay="170">We reply within one business day.</p>

        <form className="row g-3 mt-3" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="220">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Full name" required />
          </div>

          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email address" required />
          </div>

          <div className="col-12">
            <input className="form-control" placeholder="Company (optional)" />
          </div>

          <div className="col-12">
            <textarea className="form-control" rows="5" placeholder="How can we help?" required></textarea>
          </div>

          <div className="col-12 d-flex gap-3 align-items-center">
            <button type="submit" className="btn btn-primary">Send message</button>
            <span className="small text-muted">Or email <a href="mailto:hello@trinnux.com">hello@trinnux.com</a></span>
          </div>
        </form>
      </div>
    </section>
  );
}
