import { useNavigate } from 'react-router-dom';

export default function Pathways() {
  const navigate = useNavigate();

  return (
    <section className="pathways" id="pathways">
      <div className="container">

        {/* Section Header */}
        <div className="pathways-header">
          <div className="section-label">Two Pathways, One Goal</div>
          <h2 className="section-title">Choose Your Pathway</h2>
          <p className="section-subtitle pathways-subtitle">
            We provide two structured pathways to help you achieve your dream of working in Japan.
            Both pathways include training, support and comprehensive guidance.
          </p>
        </div>

        {/* Cards */}
        <div className="pathways-cards">

          {/* ── TITP Card ── */}
          <div
            className="pathway-card pathway-card-clickable pathway-card-v2"
            onClick={() => navigate('/japan/titp')}
            tabIndex={0}
            role="button"
            aria-label="Explore TITP pathway"
            onKeyDown={(e) => e.key === 'Enter' && navigate('/japan/titp')}
            id="pathway-titp-card"
          >
            {/* Image */}
            <div className="pathway-img-wrap">
              <img
                src="/titp_card.jpg"
                alt="TITP — Technical Intern Training Program in Japan"
                className="pathway-card-img"
              />
              {/* Big TITP label over image */}
              <div className="pathway-img-label titp-img-label">
                <span className="pathway-big-word">TITP</span>
                <span className="pathway-big-sub">技能実習</span>
              </div>
            </div>

            {/* Body */}
            <div className="pathway-card-body-v2">
              <div className="pathway-card-meta-row-v2">
                <span className="pathway-badge titp">TITP</span>
                <span className="pathway-card-subtitle">3–5 year program</span>
              </div>
              <h3 className="pathway-card-title-v2">Technical Intern Training</h3>
              <p className="pathway-card-desc-v2">
                A structured training-cum-employment pathway for candidates seeking to gain
                technical expertise while working in Japan under guided supervision.
              </p>
              <button
                className="btn-pathway titp btn-pathway-v2"
                id="explore-titp-btn"
                onClick={(e) => { e.stopPropagation(); navigate('/japan/titp'); }}
              >
                Explore TITP →
              </button>
            </div>
          </div>

          {/* ── SSW Card ── */}
          <div
            className="pathway-card pathway-card-clickable pathway-card-v2"
            onClick={() => navigate('/japan/ssw')}
            tabIndex={0}
            role="button"
            aria-label="Explore SSW pathway"
            onKeyDown={(e) => e.key === 'Enter' && navigate('/japan/ssw')}
            id="pathway-ssw-card"
          >
            {/* Image */}
            <div className="pathway-img-wrap">
              <img
                src="/ssw_card.jpg"
                alt="SSW — Specified Skilled Worker in Japan"
                className="pathway-card-img"
              />
              {/* Big SSW label over image */}
              <div className="pathway-img-label ssw-img-label">
                <span className="pathway-big-word">SSW</span>
                <span className="pathway-big-sub">特定技能</span>
              </div>
            </div>

            {/* Body */}
            <div className="pathway-card-body-v2">
              <div className="pathway-card-meta-row-v2">
                <span className="pathway-badge ssw">SSW</span>
                <span className="pathway-card-subtitle">Skills-based visa</span>
              </div>
              <h3 className="pathway-card-title-v2">Specified Skilled Worker</h3>
              <p className="pathway-card-desc-v2">
                A skilled worker visa category for candidates who meet the required skill and
                Japanese language requirements for employment in Japan.
              </p>
              <button
                className="btn-pathway ssw btn-pathway-v2"
                id="explore-ssw-btn"
                onClick={(e) => { e.stopPropagation(); navigate('/japan/ssw'); }}
              >
                Explore SSW →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
