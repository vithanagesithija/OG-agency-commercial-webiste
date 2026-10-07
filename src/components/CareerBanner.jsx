import { useLang } from '../context/LanguageContext';

export default function CareerBanner() {
  const { t } = useLang();

  return (
    <section className="career-banner" id="about">
      <div className="career-banner-inner">
        <div className="career-banner-content">
          <div className="section-label">{t.career_label}</div>
          <h2 className="career-banner-title">
            {t.career_title}<br />{t.career_title2}
          </h2>
          <p className="career-banner-desc">
            {t.career_desc}
          </p>
          <a href="#vacancies" className="btn-hero-primary" id="career-banner-btn">
            {t.career_btn} →
          </a>
        </div>
        <img
          src="/career_japan_banner.jpg"
          alt="Sri Lankan workers building careers in Japan"
          className="career-banner-img"
        />
      </div>
    </section>
  );
}
