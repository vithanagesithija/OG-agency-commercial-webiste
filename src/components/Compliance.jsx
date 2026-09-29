const SL_REQUIREMENTS = [
  'Proper recruitment procedures',
  'Candidate documentation',
  'Transparent process',
];

const JAPAN_REQUIREMENTS = [
  'Relevant work experience required',
  'Japanese language proficiency (N4+)',
  'Required job skills certification',
];

export default function Compliance() {
  return (
    <section className="compliance" id="compliance">
      <div className="container">
        <div className="section-label">Compliance & Transparency</div>
        <h2 className="section-title">Safe. Legal. Transparent.</h2>

        <div className="compliance-inner">
          <div>
            <div className="compliance-group">
              <h4><span className="compliance-flag">🇱🇰</span> Sri Lankan Law Compliance</h4>
              <ul className="compliance-list">
                {SL_REQUIREMENTS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="compliance-group">
              <h4><span className="compliance-flag">🇯🇵</span> Japan Requirements</h4>
              <ul className="compliance-list">
                {JAPAN_REQUIREMENTS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
