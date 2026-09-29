export default function Pathways() {
  return (
    <section className="pathways" id="pathways">
      <div className="container">
        <div className="pathways-inner">
          {/* Intro text */}
          <div className="pathways-intro">
            <div className="section-label">Two Pathways, One Goal</div>
            <h2 className="section-title">Choose Your Pathway</h2>
            <p className="section-subtitle">
              We provide two structured pathways to help you achieve your dream of working in Japan.
              Both pathways include training, support and comprehensive guidance.
            </p>
          </div>

          {/* TITP Card */}
          <div className="pathway-card">
            <div className="pathway-card-header">
              <div className="pathway-icon titp">🏗️</div>
              <div>
                <span className="pathway-badge titp">TITP</span>
                <div className="pathway-card-title">Technical Intern Training</div>
                <div className="pathway-card-subtitle">3–5 year program</div>
              </div>
            </div>
            <div className="pathway-card-body">
              A structured training-cum-employment pathway for candidates seeking to gain
              technical expertise while working in Japan under guided supervision.
            </div>
            <div className="pathway-card-footer">
              <a href="#contact" className="btn-pathway titp" id="explore-titp-btn">
                Explore TITP →
              </a>
            </div>
          </div>

          {/* SSW Card */}
          <div className="pathway-card">
            <div className="pathway-card-header">
              <div className="pathway-icon ssw">⚙️</div>
              <div>
                <span className="pathway-badge ssw">SSW</span>
                <div className="pathway-card-title">Specified Skilled Worker</div>
                <div className="pathway-card-subtitle">Skills-based visa</div>
              </div>
            </div>
            <div className="pathway-card-body">
              A skilled worker visa category for candidates who meet the required skill and
              Japanese language requirements for immediate employment in Japan.
            </div>
            <div className="pathway-card-footer">
              <a href="#contact" className="btn-pathway ssw" id="explore-ssw-btn">
                Explore SSW →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
