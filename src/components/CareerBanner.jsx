export default function CareerBanner() {
  return (
    <section className="career-banner" id="about">
      <div className="career-banner-inner">
        <div className="career-banner-content">
          <div className="section-label">Work in Japan</div>
          <h2 className="career-banner-title">
            Build Your Career<br />in Japan
          </h2>
          <p className="career-banner-desc">
            Build valuable experience, grow your skills and build a brighter future
            in one of the world's most advanced economies.
          </p>
          <a href="#vacancies" className="btn-hero-primary" id="career-banner-btn">
            Explore Employment Opportunities →
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
