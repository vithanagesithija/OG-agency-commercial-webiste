import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'TITP', href: '#pathways' },
  { label: 'SSW', href: '#pathways' },
  { label: 'Vacancies', href: '#vacancies' },
  { label: 'Training', href: '#training' },
  { label: 'Journey', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="navbar-logo-icon">OG</div>
          <div className="navbar-logo-text">
            <span className="logo-main">OG AGENCY</span>
            <span className="logo-sub">Sri Lanka → Japan</span>
          </div>
        </a>

        {/* Nav Links */}
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={i === 0 ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="#contact" className="navbar-apply-btn" id="navbar-apply-btn">
            Apply Now →
          </a>
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}
