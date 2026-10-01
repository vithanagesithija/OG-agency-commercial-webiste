import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'About Us',  href: '#about' },
  { label: 'Vacancies', href: '#vacancies' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo — uploaded OG Agency logo */}
        <a href="#home" className="navbar-logo" id="navbar-logo-link">
          <img
            src="/og_logo_new.png"
            alt="OG Agency Logo"
            className="navbar-logo-img"
          />
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

        {/* Right: Language + Apply Now + Hamburger */}
        <div className="navbar-right">
          <LanguageSwitcher />
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
