import { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const navLinks = [
    { key: 'nav_home',       href: '#home' },
    { key: 'nav_vacancies',  href: '#vacancies' },
    { key: 'nav_about',      href: '#about' },
    { key: 'nav_employment', href: '#employment' },
    { key: 'nav_contact',    href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="navbar-logo-icon">
            <FaGlobe color="white" size={22} />
          </div>
          <div className="navbar-logo-text">
            <span>OG AGENCY</span>
            <span>{t.footer_tagline}</span>
          </div>
        </a>

        {/* Nav Links */}
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {navLinks.map((link, i) => (
            <li key={link.key}>
              <a
                href={link.href}
                className={i === 0 ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {t[link.key]}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/94761234567"
              target="_blank"
              rel="noreferrer"
              className="navbar-cta"
            >
              <FaWhatsapp size={16} />
              {t.nav_whatsapp}
            </a>
          </li>
        </ul>

        {/* Right side controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LanguageSwitcher />
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
