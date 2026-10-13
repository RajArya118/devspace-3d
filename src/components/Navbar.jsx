import React, { useState } from 'react';
import { Menu, X, Sparkles, Code2 } from 'lucide-react';
import './Navbar.css';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar glass-card">
      <div className="nav-container">
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={closeMobileMenu}>
          <div className="logo-icon-box">
            <Code2 size={20} className="logo-icon" />
          </div>
          <span className="logo-text">DevSpace<span className="highlight">.3D</span></span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="nav-cta">
          <a href="#contact" className="btn-primary nav-btn">
            <Sparkles size={16} /> Let's Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" className="mobile-link" onClick={closeMobileMenu}>About</a>
          <a href="#skills" className="mobile-link" onClick={closeMobileMenu}>Skills</a>
          <a href="#projects" className="mobile-link" onClick={closeMobileMenu}>Projects</a>
          <a href="#contact" className="mobile-link" onClick={closeMobileMenu}>Contact</a>
          <a href="#contact" className="btn-primary" style={{ marginTop: '0.5rem' }} onClick={closeMobileMenu}>
            <Sparkles size={16} /> Let's Connect
          </a>
        </div>
      )}
    </nav>
  );
}
