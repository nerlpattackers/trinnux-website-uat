import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-5 bg-white border-top reveal" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="150">
            <h3 className="fw-bold">About Trinnux</h3>
            <p className="text-muted mt-3">We help companies build reliable, scalable infrastructure.</p>

            <ul className="text-muted small mt-3">
              <li>Cross-region HA deployments</li>
              <li>Production-grade runbooks</li>
              <li>Transparent pricing models</li>
            </ul>
          </div>

          <div className="col-md-6" data-aos="fade-left" data-aos-delay="180">
            <div className="card border-0 shadow-sm p-3 card-hover">
              <div className="card-body">
                <div className="small text-muted">Technologies we use</div>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {['Kubernetes','Terraform','Prometheus','MySQL','NGINX','MariaDB'].map(t => (
                    <span key={t} className="badge bg-light text-dark border">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
