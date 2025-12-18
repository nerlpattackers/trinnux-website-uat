import React from 'react';

const items = [
  { title: 'Cloud Architecture', desc: 'AWS, GCP, Azure design & migration.' },
  { title: 'DevOps & CI/CD', desc: 'Automation pipelines, IaC, GitOps.' },
  { title: 'SRE & Monitoring', desc: 'Uptime, alerting, runbooks.' },
  { title: 'Managed Databases', desc: 'MySQL/MariaDB high availability.' },
  { title: 'Security & Compliance', desc: 'Hardening, audits, best practices.' },
  { title: 'Cost Optimization', desc: 'Reduce cloud bills efficiently.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-5 reveal" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <h3 className="fw-bold" data-aos="fade-up" data-aos-delay="150">What we do</h3>
        <p className="text-muted" data-aos="fade-up" data-aos-delay="180">Tailored solutions for your infrastructure needs.</p>

        <div className="row mt-4 g-4">
          {items.map((s, i) => (
            <div
              className="col-md-6 col-lg-4"
              key={s.title}
              data-aos="zoom-in"
              data-aos-delay={220 + i * 60}
            >
              <div className="card h-100 shadow-sm card-hover">
                <div className="card-body">
                  <h5 className="card-title text-primary">{s.title}</h5>
                  <p className="text-muted">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
