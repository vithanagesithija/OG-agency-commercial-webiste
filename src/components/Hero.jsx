import { useLang } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="home">
      {/* Full-width background image — Sri Lankan employees in Tokyo */}
      <img
        src="/hero_banner_main.png"
        alt="Sri Lankan professional standing in front of Mount Fuji and Tokyo skyline - OG Agency"
        className="hero-bg-img"
      />

      {/* White-to-transparent scrim — clean white on left, image shows on right */}
      <div className="hero-scrim" />

      {/* Content wrapper */}
      <div className="hero-overlay-container">

        {/* Main content */}
        <div className="hero-overlay-content">
          <div className="hero-breadcrumb">
            <span className="hero-breadcrumb-label">{t.hero_breadcrumb}</span>
          </div>

          <h1 className="hero-title">
            {t.hero_title}{" "}
            <span className="hero-title-accent">{t.hero_title_accent}</span>
          </h1>

          <p className="hero-subtitle">
            {t.hero_subtitle}
          </p>

          <div className="hero-actions">
            {/* Primary CTA — scrolls to Target Job Sectors section */}
            <a
              href="#sectors"
              className="btn-hero-primary btn-hero-explore"
              id="hero-explore-btn"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("sectors");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {t.hero_cta_primary}
              <span className="btn-arrow">→</span>
            </a>

            {/* Secondary CTA */}
            <a href="#pathways" className="btn-hero-secondary" id="hero-start-journey-btn">
              {t.hero_cta_secondary} →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
