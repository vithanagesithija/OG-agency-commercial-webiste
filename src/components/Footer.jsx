import { FaFacebook, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  const QUICK_LINKS = [
    { labelKey: 'footer_link_home',  href: '#home' },
    { labelKey: 'footer_link_about', href: '#about' },
    { labelKey: 'footer_link_titp',  href: '#pathways' },
    { labelKey: 'footer_link_ssw',   href: '#pathways' },
    { labelKey: 'footer_link_care',  href: '#vacancies' },
  ];

  const JOB_LINKS = [
    { labelKey: 'footer_job_construction', href: '#vacancies' },
    { labelKey: 'footer_job_care',         href: '#vacancies' },
    { labelKey: 'footer_job_agriculture',  href: '#vacancies' },
    { labelKey: 'footer_job_food',         href: '#vacancies' },
    { labelKey: 'footer_job_carejobs',     href: '#vacancies' },
  ];

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">OG AGENCY</div>
            <div className="footer-brand-desc">
              {t.footer_brand_desc}
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
            <div className="footer-col-title">{t.footer_quick_title}</div>
            <ul className="footer-links">
              {QUICK_LINKS.map(l => (
                <li key={l.labelKey}><a href={l.href}>{t[l.labelKey]}</a></li>
              ))}
            </ul>
          </div>

          {/* Job Areas */}
          <div>
            <div className="footer-col-title">{t.footer_job_title}</div>
            <ul className="footer-links">
              {JOB_LINKS.map(l => (
                <li key={l.labelKey}><a href={l.href}>{t[l.labelKey]}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">{t.footer_contact_title}</div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaPhone /></div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">{t.footer_phone_label}</span>
                +94 76 123 4567
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaEnvelope /></div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">{t.footer_email_label}</span>
                info@ogagency.lk
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">{t.footer_address_label}</span>
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
                <div className="footer-bottom-tag">{t.footer_tagline}</div>
              </div>
            </div>
            <div className="footer-copyright">
              {t.footer_copy}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
