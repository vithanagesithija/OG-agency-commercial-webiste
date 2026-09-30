export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Full-width background image spanning corner to corner */}
      <img
        src="/hero_banner_wide.png"
        alt="Sri Lankan professional ready for employment in Japan - OG Agency"
        className="hero-bg-img"
      />

      {/* Gradient scrim for text readability over skyline */}
      <div className="hero-scrim" />

      {/* Text overlay - left side */}
      <div className="hero-overlay-container">
        <div className="hero-overlay-content">
          <div className="hero-breadcrumb">
            <span className="hero-breadcrumb-label">Sri Lanka</span>
            <span className="hero-breadcrumb-arrow">→</span>
            <span className="hero-breadcrumb-label hero-breadcrumb-japan">Japan</span>
          </div>

          <h1 className="hero-title">
            Your Pathway to{' '}
            <span className="hero-title-accent">Employment in Japan</span>
          </h1>

          <p className="hero-subtitle">
            OG Agency supports Sri Lankan candidates through training, job preparation,
            documentation and employment opportunities in Japan under TITP and SSW pathways.
          </p>

          <div className="hero-actions">
            <a href="#vacancies" className="btn-hero-primary" id="hero-view-jobs-btn">
              View Job Opportunities →
            </a>
            <a href="#pathways" className="btn-hero-secondary" id="hero-start-journey-btn">
              Start Your Journey →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

