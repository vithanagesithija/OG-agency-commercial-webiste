import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { useLang } from '../context/LanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const NAV_LINKS = [
    { labelKey: 'nav_home',    href: '#home' },
    { labelKey: 'nav_about',   href: '#about' },
    { labelKey: 'nav_vacancies', href: '#vacancies' },
    { labelKey: 'nav_contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
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
            <li key={link.labelKey}>
              <a
                href={link.href}
                className={i === 0 ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {t[link.labelKey]}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Language + Apply Now + Hamburger */}
        <div className="navbar-right">
          <LanguageSwitcher />
          <a href="#contact" className="navbar-apply-btn" id="navbar-apply-btn">
            {t.nav_apply} →
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
