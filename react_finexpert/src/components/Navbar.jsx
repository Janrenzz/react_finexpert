import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="container nav-flex">
        <a href="#home" className="logo" onClick={closeMenu}>
          FinExpert
        </a>

        <div className="nav-right">
          <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            <li>
              <a href="#services" className="nav-link" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#why" className="nav-link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="nav-link" onClick={closeMenu}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li className="mobile-cta-item">
              <a href="#contact" className="btn-primary mobile-nav-cta" onClick={closeMenu}>
                Get Started
              </a>
            </li>
          </ul>

          <a href="#contact" className="btn-primary nav-cta">
            Get Started
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`menu-bar ${menuOpen ? 'menu-bar-open' : ''}`}></span>
            <span className={`menu-bar ${menuOpen ? 'menu-bar-open' : ''}`}></span>
            <span className={`menu-bar ${menuOpen ? 'menu-bar-open' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;