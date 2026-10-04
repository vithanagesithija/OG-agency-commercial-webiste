export default function Hero() {
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
            <span className="hero-breadcrumb-label">Work in Japan</span>
          </div>

          <h1 className="hero-title">
            Build Your Career{" "}
            <span className="hero-title-accent">in Japan</span>
          </h1>

          <p className="hero-subtitle">
            Build valuable experience, grow your skills and build a brighter
            future in one of the world&apos;s most advanced economies.
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
              Explore Employment Opportunities
              <span className="btn-arrow">→</span>
            </a>

            {/* Secondary CTA */}
            <a href="#pathways" className="btn-hero-secondary" id="hero-start-journey-btn">
              Our Process →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
