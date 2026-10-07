import { useLang } from '../context/LanguageContext';

export default function CtaBanner() {
  const { t } = useLang();

  return (
    <section className="cta-banner" id="cta">
      <div className="container">
        <div className="cta-banner-label">{t.cta_label}</div>
        <h2 className="cta-banner-title">{t.cta_title}</h2>
        <p className="cta-banner-subtitle">
          {t.cta_subtitle}
        </p>
        <div className="cta-banner-actions">
          <a href="#contact" className="btn-cta-white" id="cta-apply-now-btn">
            {t.cta_apply_btn} →
          </a>
          <a href="#contact" className="btn-cta-outline" id="cta-contact-btn">
            {t.cta_contact_btn}
          </a>
        </div>
      </div>
    </section>
  );
}
