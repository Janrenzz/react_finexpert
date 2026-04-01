import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Trusted by 500+ Businesses</span>

            <h1>
              Precision Accounting for <br />
              <span>Growing Businesses</span>
            </h1>

            <p>
              We handle the numbers so you can handle the business. Expert tax
              strategy, bookkeeping, and CFO services tailored to your goals.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Schedule Consultation
              </a>
              <a href="#services" className="btn-outline">
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;