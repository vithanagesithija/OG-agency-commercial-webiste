import { useLang } from '../context/LanguageContext';

const QualIconN5N4 = () => (
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
);

const QualIconSSW = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield */}
    <path d="M20 4L6 10v10c0 8.5 6 15.5 14 18 8-2.5 14-9.5 14-18V10L20 4z" fill="#EFF6FF" stroke="#1a5dc8" strokeWidth="1.5"/>
    {/* Check */}
    <path d="M13 21l5 5 9-10" stroke="#1a5dc8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Star at top */}
    <circle cx="20" cy="13" r="3.5" fill="#f59e0b" opacity="0.9"/>
    <text x="17.2" y="16" fontSize="7" fill="white">★</text>
  </svg>
);

export default function Training() {
  const { t } = useLang();

  const QUALIFICATIONS = [
    {
      id: 'jlpt-n5-n4',
      title: t.qual_jlpt_n5_n4_title,
      desc: t.qual_jlpt_n5_n4_desc,
      Icon: QualIconN5N4,
    },
    {
      id: 'jlpt-ssw',
      title: t.qual_ssw_title,
      desc: t.qual_ssw_desc,
      Icon: QualIconSSW,
    },
  ];

  return (
    <section className="qualifications" id="qualifications">
      <div className="container">
        <div className="qualifications-inner">

          {/* LEFT COLUMN */}
          <div className="qualifications-left">
            <div className="section-label">{t.qual_section_label}</div>
            <h2 className="section-title qualifications-heading">
              {t.qual_section_title}
            </h2>
            <p className="qualifications-intro">
              {t.qual_intro}
            </p>

            <p className="qualifications-sub-label">{t.qual_sub_label}</p>

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
                  {t.qual_highlight_heading}
                </div>
                <div className="qual-highlight-text">
                  {t.qual_highlight_text}
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn-hero-primary qual-cta"
              id="qualifications-connect-btn"
            >
              {t.qual_connect_btn} →
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
                <div className="qualifications-badge-title">{t.qual_badge_title}</div>
                <div className="qualifications-badge-sub">{t.qual_badge_sub}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
