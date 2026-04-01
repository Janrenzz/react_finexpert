import React from 'react';

const Why = () => {
  return (
    <section className="why" id="why">
      <div className="container why-grid">
        <div>
          <h2>Why Partner With FinExpert?</h2>
          <p>
            We believe in proactive accounting. Instead of just reporting what
            happened, we help you plan for what&apos;s next. Our team of CPAs and
            financial advisors are dedicated to your success.
          </p>
          <ul>
            <li>Certified Public Accountants</li>
            <li>24/7 Online Portal Access</li>
            <li>Dedicated Account Manager</li>
            <li>Transparent Flat-Fee Pricing</li>
          </ul>
        </div>

        <div className="stats">
          <div>Years Experience</div>
          <div>Taxes Saved</div>
          <div>Clients Served</div>
          <div>Commitment</div>
        </div>
      </div>
    </section>
  );
};

export default Why;