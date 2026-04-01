import React from 'react';

const Services = () => {
  const data = [
    {
      title: 'Tax Preparation',
      desc: 'Strategic tax planning and preparation to maximize your returns.',
    },
    {
      title: 'Financial Analysis',
      desc: 'In-depth reporting and forecasting to help you make decisions.',
    },
    {
      title: 'Audit Defense',
      desc: 'Expert representation and support during IRS audits.',
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container text-center">
        <p className="small">OUR EXPERTISE</p>
        <h2>Comprehensive Financial Solutions</h2>
        <p>
          From daily bookkeeping to complex tax litigation, we provide a full
          spectrum of accounting services.
        </p>

        <div className="grid-3">
          {data.map((item, i) => (
            <div key={i} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#contact">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;