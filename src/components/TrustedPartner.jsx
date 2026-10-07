import { useLang } from '../context/LanguageContext';

export default function TrustedPartner() {
  const { t } = useLang();

  const POINTS = [
    t.partner_point1,
    t.partner_point2,
    t.partner_point3,
  ];

  return (
    <section className="partner" id="partner">
      <div className="container">
        <div className="partner-inner">
          {/* Image with stats */}
          <div className="partner-img-wrap">
            <img
              src="/career_japan_banner.jpg"
              alt="OG Agency trusted partner"
              className="partner-img"
            />
            <div className="partner-stats">
              <div className="partner-stat">
                <div className="partner-stat-num">4+</div>
                <div className="partner-stat-label">{t.partner_stat_years}</div>
              </div>
              <div className="partner-stat">
                <div className="partner-stat-num">100+</div>
                <div className="partner-stat-label">{t.partner_stat_deployed}</div>
              </div>
              <div className="partner-stat">
                <div className="partner-stat-num">24/7</div>
                <div className="partner-stat-label">{t.partner_stat_support}</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="partner-content">
            <div className="section-label">{t.partner_label}</div>
            <h2 className="section-title">{t.partner_title}</h2>
            <p className="section-subtitle" style={{ marginTop: 10, marginBottom: 16 }}>
              {t.partner_desc}
            </p>
            <ul className="partner-points">
              {POINTS.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <a href="#contact" className="btn-hero-primary" id="learn-more-btn">
              {t.partner_learn_btn} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
