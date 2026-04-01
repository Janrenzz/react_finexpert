import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h2>Let&apos;s Discuss Your Finances</h2>
            <p className="contact-subtext">
              Ready to take the first step towards financial clarity? Fill out the form and
              our team will reach out within 24 hours.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-info-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-info-text">
                  <h4>Email</h4>
                  <p>contact@finexpert.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-info-text">
                  <h4>Office</h4>
                  <p>100 Financial District, Suite 400</p>
                  <p>New York, NY 10005</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="John" />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@company.com" />
              </div>

              <div className="form-group full-width">
                <label htmlFor="service">Service Interest</label>
                <select id="service" defaultValue="Tax Preparation">
                  <option>Tax Preparation</option>
                  <option>Bookkeeping</option>
                  <option>Financial Analysis</option>
                  <option>Audit Defense</option>
                  <option>Payroll</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;