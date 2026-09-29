export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        {/* Content */}
        <div className="hero-content">
          <div className="hero-breadcrumb">
            <span className="flag-icon">🇱🇰</span>
            <span>Sri Lanka</span>
            <span className="arrow">→</span>
            <span className="flag-icon">🇯🇵</span>
            <span>Japan</span>
          </div>

          <h1 className="hero-title">
            Your Pathway to{' '}
            <span className="hero-title-accent">Employment in Japan</span>
          </h1>

          <p className="hero-subtitle">
            OG Agency supports Sri Lankan candidates through job preparation, documentation and
            employment opportunities in Japan under TITP and SSW pathways.
          </p>

          <div className="hero-actions">
            <a href="#vacancies" className="btn-hero-primary" id="hero-view-jobs-btn">
              View Job Opportunities →
            </a>
            <a href="#pathways" className="btn-hero-secondary" id="hero-start-journey-btn">
              Start Your Journey
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image-col">
          <img
            src="/hero_japan_main.jpg"
            alt="Sri Lankan professional ready for Japan employment"
            className="hero-img"
          />
          <div className="hero-badge-text">From Sri Lanka<br />to Japan</div>
        </div>
      </div>
    </section>
  );
}
