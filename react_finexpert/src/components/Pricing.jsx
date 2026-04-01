import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>No hidden fees. Choose a plan that fits your business size.</p>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <h3>Starter</h3>

            <div className="price-amount">
              <span className="currency">$</span>
              <span className="number">199</span>
              <span className="duration">/month</span>
            </div>

            <ul className="price-features">
              <li>Monthly Bookkeeping</li>
              <li>Annual Tax Filing</li>
              <li>Email Support</li>
              <li>Basic Reports</li>
            </ul>

            <a href="#contact" className="btn-outline">Choose Plan</a>
          </div>

          <div className="price-card active">
            <div className="price-badge">Most Popular</div>

            <h3>Business</h3>

            <div className="price-amount">
              <span className="currency">$</span>
              <span className="number">499</span>
              <span className="duration">/month</span>
            </div>

            <ul className="price-features">
              <li>Weekly Bookkeeping</li>
              <li>Quarterly Tax Strategy</li>
              <li>Priority Phone Support</li>
              <li>CFO Dashboard</li>
              <li>Payroll Management</li>
            </ul>

            <a href="#contact" className="btn-primary">Choose Plan</a>
          </div>

          <div className="price-card">
            <h3>Enterprise</h3>

            <div className="price-custom">Custom</div>

            <ul className="price-features">
              <li>Dedicated Accounting Team</li>
              <li>Daily Reconciliation</li>
              <li>Audit Representation</li>
              <li>Financial Forecasting</li>
              <li>Custom Integrations</li>
            </ul>

            <a href="#contact" className="btn-outline">Choose Plan</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;