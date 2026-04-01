import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            FinExpert
          </a>
          <p>
            Professional accounting services you can trust. Helping businesses
            grow since 2008.
          </p>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <a href="#services">Tax Planning</a>
          <a href="#services">Bookkeeping</a>
          <a href="#services">Audit Support</a>
          <a href="#services">Payroll</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#why">About Us</a>
          <a href="#contact">Careers</a>
          <a href="#services">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Service</a>
          <a href="#home">Cookie Policy</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 FinExpert Accounting. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;