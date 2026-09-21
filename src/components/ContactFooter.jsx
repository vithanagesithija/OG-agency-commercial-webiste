import { useState } from 'react';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaWhatsapp, FaYoutube, FaTiktok,
  FaGlobe, FaTelegramPlane,
} from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

const INTEREST_KEYS = {
  en: ['Japan Student Visa','Romania Garment Jobs','Russia Garment Jobs','Bosnia Garment Jobs','Pick Me Rider','Bus Driver','Electrician','Other'],
  si: ['ජපාන් ශිෂ්‍ය වීසා','රුමේනියා ඇඳුම් රැකියා','රුසියා ඇඳුම් රැකියා','බොස්නියා ඇඳුම් රැකියා','Pick Me රයිඩර්','බස් රියදුරු','විදුලි ශිල්පී','වෙනත්'],
  ja: ['日本学生ビザ','ルーマニア縫製','ロシア縫製','ボスニア縫製','PickMeライダー','バス運転手','電気技術者','その他'],
};

export default function ContactFooter() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', interest: '', message: '' });
  };

  const quickLinks = [
    { key: 'nav_home',       href: '#home' },
    { key: 'nav_vacancies',  href: '#vacancies' },
    { key: 'nav_about',      href: '#about' },
    { key: 'nav_employment', href: '#employment' },
    { key: 'nav_contact',    href: '#contact' },
  ];

  const interests = INTEREST_KEYS[lang] || INTEREST_KEYS.en;

  return (
    <footer className="contact-footer" id="contact">
      <div className="container">
        <div className="contact-footer-inner">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>{t.contact_title}</h3>
            <p>{t.contact_desc}</p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaPhone size={12} /></div>
                <span>{t.contact_phone}</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaEnvelope size={12} /></div>
                <span>{t.contact_email}</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaMapMarkerAlt size={12} /></div>
                <span>{t.contact_address}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrap">
            <h3>{t.form_title}</h3>
            {submitted ? (
              <div style={{
                background: 'rgba(22,163,74,0.15)',
                border: '1px solid rgba(22,163,74,0.4)',
                borderRadius: 'var(--radius)',
                padding: '16px',
                color: '#4ade80',
                fontSize: '0.88rem',
                textAlign: 'center',
              }}>
                {t.form_success}
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder={t.form_name}
                  value={form.name}
                  onChange={handleChange}
                  required
                  id="input-name"
                />
                <input
                  className="form-input"
                  type="tel"
                  name="phone"
                  placeholder={t.form_phone}
                  value={form.phone}
                  onChange={handleChange}
                  required
                  id="input-phone"
                />
                <select
                  className="form-select"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  id="input-interest"
                >
                  <option value="">{t.form_interest}</option>
                  {interests.map(i => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder={t.form_message}
                  value={form.message}
                  onChange={handleChange}
                  id="input-message"
                />
                <button type="submit" className="btn-submit" id="send-message-btn">
                  <FaTelegramPlane size={14} /> {t.form_submit}
                </button>
              </form>
            )}
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3>{t.quick_title}</h3>
            <ul className="quick-links-list">
              {quickLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href}>{t[link.key]}</a>
                </li>
              ))}
            </ul>

            <p className="follow-title">{t.follow_title}</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon fb" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://wa.me/94761234567" target="_blank" rel="noreferrer" className="social-icon wa" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon yt" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon tt" aria-label="TikTok">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-bottom-logo">
              <FaGlobe color="#94a3b8" size={16} />
              <strong style={{ color: 'white' }}>OG AGENCY</strong>
              <div className="footer-bottom-sep" />
              <span className="footer-tagline">{t.footer_tagline}</span>
            </div>
            <p className="footer-copyright">{t.footer_copy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
