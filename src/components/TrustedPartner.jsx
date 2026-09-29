const POINTS = [
  'OG Agency connects Sri Lankan candidates through the journey',
  'Comprehensive documentation, guidance and support',
  'In-house training, counseling and recruitment support',
];

export default function TrustedPartner() {
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
                <div className="partner-stat-label">Years Experience</div>
              </div>
              <div className="partner-stat">
                <div className="partner-stat-num">100+</div>
                <div className="partner-stat-label">Employees Deployed</div>
              </div>
              <div className="partner-stat">
                <div className="partner-stat-num">24/7</div>
                <div className="partner-stat-label">Candidate Support</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="partner-content">
            <div className="section-label">About OG Agency</div>
            <h2 className="section-title">Your Trusted Partner</h2>
            <p className="section-subtitle" style={{ marginTop: 10, marginBottom: 16 }}>
              OG Agency connects Sri Lankan candidates through the journey to Japan with full
              preparation, documentation and employment opportunities.
            </p>
            <ul className="partner-points">
              {POINTS.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <a href="#contact" className="btn-hero-primary" id="learn-more-btn">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
