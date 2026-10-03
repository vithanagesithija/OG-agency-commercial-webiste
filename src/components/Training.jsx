const QUALIFICATIONS = [
  {
    id: 'jlpt-n5-n4',
    title: 'JLPT N5 / N4',
    desc: 'Candidates who have already completed JLPT N5 or N4 may be eligible for relevant opportunities.',
    Icon: () => (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Certificate */}
        <rect x="6" y="5" width="28" height="24" rx="3" fill="#EFF6FF" stroke="#1a5dc8" strokeWidth="1.5"/>
        <rect x="10" y="11" width="20" height="2" rx="1" fill="#1a5dc8" opacity="0.5"/>
        <rect x="10" y="15" width="14" height="2" rx="1" fill="#1a5dc8" opacity="0.3"/>
        {/* Ribbon */}
        <circle cx="20" cy="30" r="6" fill="#1a5dc8"/>
        <circle cx="20" cy="30" r="3.5" fill="white"/>
        <circle cx="20" cy="30" r="1.5" fill="#f59e0b"/>
        {/* Stars */}
        <text x="11" y="28" fontSize="7" fill="#f59e0b">★</text>
        <text x="26" y="28" fontSize="7" fill="#f59e0b">★</text>
      </svg>
    ),
  },
  {
    id: 'jlpt-ssw',
    title: 'JLPT N4 / JFT-Basic + SSW Skill Exam',
    desc: 'Candidates with JLPT N4 or JFT-Basic together with the required SSW Skill Exam qualification may be eligible for relevant opportunities.',
    Icon: () => (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield */}
        <path d="M20 4L6 10v10c0 8.5 6 15.5 14 18 8-2.5 14-9.5 14-18V10L20 4z" fill="#EFF6FF" stroke="#1a5dc8" strokeWidth="1.5"/>
        {/* Check */}
        <path d="M13 21l5 5 9-10" stroke="#1a5dc8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Star at top */}
        <circle cx="20" cy="13" r="3.5" fill="#f59e0b" opacity="0.9"/>
        <text x="17.2" y="16" fontSize="7" fill="white">★</text>
      </svg>
    ),
  },
];

export default function Qualifications() {
  return (
    <section className="qualifications" id="qualifications">
      <div className="container">
        <div className="qualifications-inner">

          {/* LEFT COLUMN */}
          <div className="qualifications-left">
            <div className="section-label">Japan Employment</div>
            <h2 className="section-title qualifications-heading">
              Do You Have the Required Qualifications?
            </h2>
            <p className="qualifications-intro">
              If you already have the required Japanese language qualification or
              skills, you may be eligible for employment opportunities in Japan.
              Connect with us to discuss your opportunities.
            </p>

            <p className="qualifications-sub-label">Required Qualifications</p>

            <div className="qual-cards">
              {QUALIFICATIONS.map(({ id, title, desc, Icon }) => (
                <div className="qual-card" key={id} id={`qual-${id}`}>
                  <div className="qual-card-icon">
                    <Icon />
                  </div>
                  <div className="qual-card-body">
                    <div className="qual-card-title">{title}</div>
                    <div className="qual-card-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="qual-highlight">
              <span className="qual-highlight-icon">✓</span>
              <div>
                <div className="qual-highlight-heading">
                  Already have N4, N5 or the required skill qualification?
                </div>
                <div className="qual-highlight-text">
                  Connect with us to find out about current opportunities.
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn-hero-primary qual-cta"
              id="qualifications-connect-btn"
            >
              Connect With Us →
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="qualifications-img-wrap">
            <img
              src="/qualification_visual.jpg"
              alt="Qualified professional with Japan employment certificate"
              className="qualifications-img"
            />
            <div className="qualifications-badge">
              <span className="qualifications-badge-icon">🇯🇵</span>
              <div>
                <div className="qualifications-badge-title">Japan Employment</div>
                <div className="qualifications-badge-sub">Opportunities Available</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
