import { useLang } from '../context/LanguageContext';

export default function Compliance() {
  const { t } = useLang();

  const SL_REQUIREMENTS = [
    t.compliance_sl_1,
    t.compliance_sl_2,
    t.compliance_sl_3,
  ];

  const JAPAN_REQUIREMENTS = [
    t.compliance_jp_1,
    t.compliance_jp_2,
    t.compliance_jp_3,
  ];

  return (
    <section className="compliance" id="compliance">
      <div className="container">
        <div className="section-label">{t.compliance_label}</div>
        <h2 className="section-title">{t.compliance_title}</h2>

        <div className="compliance-inner">
          <div>
            <div className="compliance-group">
              <h4><span className="compliance-flag">🇱🇰</span> {t.compliance_sl_heading}</h4>
              <ul className="compliance-list">
                {SL_REQUIREMENTS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="compliance-group">
              <h4><span className="compliance-flag">🇯🇵</span> {t.compliance_jp_heading}</h4>
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
