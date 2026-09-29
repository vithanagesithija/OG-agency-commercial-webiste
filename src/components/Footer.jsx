import { FaFacebook, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const QUICK_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'About Us',  href: '#about' },
  { label: 'TITP',      href: '#pathways' },
  { label: 'SSW',       href: '#pathways' },
  { label: 'Care Work', href: '#vacancies' },
];

const JOB_LINKS = [
  { label: 'Construction',      href: '#vacancies' },
  { label: 'Care Worker',       href: '#vacancies' },
  { label: 'Agriculture',       href: '#vacancies' },
  { label: 'Food Manufacturing',href: '#vacancies' },
  { label: 'Care Jobs',         href: '#vacancies' },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">OG AGENCY</div>
            <div className="footer-brand-desc">
              Connecting Sri Lankan candidates through the journey to Japan with full
              preparation, documentation and employment opportunities.
            </div>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="footer-social-icon" aria-label="Facebook" id="footer-facebook">
                <FaFacebook />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                className="footer-social-icon" aria-label="YouTube" id="footer-youtube">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="footer-social-icon" aria-label="Instagram" id="footer-instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {QUICK_LINKS.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Job Areas */}
          <div>
            <div className="footer-col-title">Job Areas</div>
            <ul className="footer-links">
              {JOB_LINKS.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaPhone /></div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Phone</span>
                +94 76 123 4567
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaEnvelope /></div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Email</span>
                info@ogagency.lk
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Address</span>
                Colombo, Sri Lanka
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-bottom-logo">
              <div className="footer-bottom-icon">OG</div>
              <div>
                <div className="footer-bottom-text">OG AGENCY</div>
                <div className="footer-bottom-tag">Your Future. Our Mission.</div>
              </div>
            </div>
            <div className="footer-copyright">
              © 2025 OG Agency. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
