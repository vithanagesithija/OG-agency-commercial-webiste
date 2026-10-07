import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';

export default function TITPPage() {
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stages = [
    { num: '01', title: t.titp_stage1_title, duration: t.titp_stage1_duration, desc: t.titp_stage1_desc },
    { num: '02', title: t.titp_stage2_title, duration: t.titp_stage2_duration, desc: t.titp_stage2_desc },
    { num: '03', title: t.titp_stage3_title, duration: t.titp_stage3_duration, desc: t.titp_stage3_desc },
    { num: '04', title: t.titp_stage4_title, duration: t.titp_stage4_duration, desc: t.titp_stage4_desc },
    { num: '05', title: t.titp_stage5_title, duration: t.titp_stage5_duration, desc: t.titp_stage5_desc },
  ];

  const trainingCards = [
    { icon: '🗾', title: t.titp_support_c1_title, desc: t.titp_support_c1_desc },
    { icon: '🗣️', title: t.titp_support_c2_title, desc: t.titp_support_c2_desc },
    { icon: '📋', title: t.titp_support_c3_title, desc: t.titp_support_c3_desc },
    { icon: '🔧', title: t.titp_support_c4_title, desc: t.titp_support_c4_desc },
    { icon: '👥', title: t.titp_support_c5_title, desc: t.titp_support_c5_desc },
    { icon: '🤝', title: t.titp_support_c6_title, desc: t.titp_support_c6_desc },
  ];

  const processSteps = [
    { num: '01', title: t.titp_proc_s1_title, desc: t.titp_proc_s1_desc },
    { num: '02', title: t.titp_proc_s2_title, desc: t.titp_proc_s2_desc },
    { num: '03', title: t.titp_proc_s3_title, desc: t.titp_proc_s3_desc },
    { num: '04', title: t.titp_proc_s4_title, desc: t.titp_proc_s4_desc },
    { num: '05', title: t.titp_proc_s5_title, desc: t.titp_proc_s5_desc },
    { num: '06', title: t.titp_proc_s6_title, desc: t.titp_proc_s6_desc },
    { num: '07', title: t.titp_proc_s7_title, desc: t.titp_proc_s7_desc },
    { num: '08', title: t.titp_proc_s8_title, desc: t.titp_proc_s8_desc },
  ];

  return (
    <div className="visa-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t.titp_breadcrumb_home}</Link>
            <span className="breadcrumb-sep">›</span>
            <span>{t.titp_breadcrumb_japan}</span>
            <span className="breadcrumb-sep">›</span>
            <Link to="/">{t.titp_breadcrumb_pathways}</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">{t.titp_breadcrumb_current}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="visa-hero titp-hero">
        <div className="container">
          <div className="visa-hero-inner">
            <div className="visa-hero-content">
              <div className="visa-hero-badge titp-badge">TITP</div>
              <h1 className="visa-hero-title">{t.titp_hero_title}</h1>
              <p className="visa-hero-jp">技能実習</p>
              <p className="visa-hero-desc">{t.titp_hero_desc}</p>
              <div className="visa-hero-cta">
                <a href="/#contact" className="btn-visa-primary" id="titp-apply-btn">
                  {t.titp_hero_apply_btn} →
                </a>
                <Link to="/" className="btn-visa-secondary" id="titp-back-pathways-btn">
                  ← {t.titp_hero_back_btn}
                </Link>
              </div>
            </div>
            <div className="visa-hero-stat-group">
              <div className="visa-stat-card">
                <div className="visa-stat-num">1–5</div>
                <div className="visa-stat-label">{t.titp_stat_duration}</div>
              </div>
              <div className="visa-stat-card">
                <div className="visa-stat-num">3</div>
                <div className="visa-stat-label">{t.titp_stat_stages}</div>
              </div>
              <div className="visa-stat-card">
                <div className="visa-stat-num">N5/N4</div>
                <div className="visa-stat-label">{t.titp_stat_jlpt}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Overview */}
      <section className="visa-section">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label titp-label">{t.titp_overview_label}</div>
            <h2 className="visa-section-title">{t.titp_overview_title}</h2>
          </div>
          <div className="overview-grid">
            {[
              { icon: '📋', label: t.titp_label_program,   value: t.titp_overview_program },
              { icon: '🈯', label: t.titp_label_jp_name,   value: t.titp_overview_jp_name },
              { icon: '⏱️', label: t.titp_label_duration,  value: t.titp_overview_duration_val },
              { icon: '🏢', label: t.titp_label_org,       value: t.titp_overview_org },
              { icon: '🏭', label: t.titp_label_employer,  value: t.titp_overview_employer },
              { icon: '🎯', label: t.titp_label_purpose,   value: t.titp_overview_purpose },
            ].map((item) => (
              <div className="overview-card" key={item.label}>
                <div className="overview-icon">{item.icon}</div>
                <div className="overview-card-content">
                  <div className="overview-card-label">{item.label}</div>
                  <div className="overview-card-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Stages */}
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label titp-label">{t.titp_stages_label}</div>
            <h2 className="visa-section-title">{t.titp_stages_title}</h2>
            <p className="visa-section-desc">{t.titp_stages_desc}</p>
          </div>
          <div className="stages-timeline">
            {stages.map((stage, i) => (
              <div className="stage-item" key={stage.num}>
                <div className="stage-connector">
                  <div className="stage-dot titp-dot"><span>{stage.num}</span></div>
                  {i < stages.length - 1 && <div className="stage-line titp-line" />}
                </div>
                <div className="stage-content">
                  <div className="stage-duration titp-duration">{stage.duration}</div>
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="stage-desc">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Language */}
      <section className="visa-section">
        <div className="container">
          <div className="lang-req-card titp-lang-card">
            <div className="lang-req-left">
              <div className="visa-section-label titp-label">{t.titp_lang_label}</div>
              <h2 className="lang-req-title">{t.titp_lang_title}</h2>
              <p className="lang-req-desc">{t.titp_lang_desc}</p>
              <p className="lang-req-note">ℹ️ {t.titp_lang_note}</p>
            </div>
            <div className="lang-req-right">
              <div className="jlpt-badge-group">
                <div className="jlpt-badge titp-jlpt">
                  <div className="jlpt-top">JLPT</div>
                  <div className="jlpt-level">N5</div>
                </div>
                <div className="jlpt-or">{t.titp_jlpt_or}</div>
                <div className="jlpt-badge titp-jlpt">
                  <div className="jlpt-top">JLPT</div>
                  <div className="jlpt-level">N4</div>
                </div>
              </div>
              <p className="lang-req-caption">{t.titp_lang_caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Training & Support */}
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label titp-label">{t.titp_support_label}</div>
            <h2 className="visa-section-title">{t.titp_support_title}</h2>
          </div>
          <div className="support-grid">
            {trainingCards.map((card) => (
              <div className="support-card" key={card.title}>
                <div className="support-icon titp-icon-bg">{card.icon}</div>
                <h3 className="support-card-title">{card.title}</h3>
                <p className="support-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Who is it for */}
      <section className="visa-section">
        <div className="container">
          <div className="who-for-layout">
            <div className="who-for-text">
              <div className="visa-section-label titp-label">{t.titp_who_label}</div>
              <h2 className="visa-section-title">{t.titp_who_title}</h2>
              <p className="visa-section-desc">{t.titp_who_desc}</p>
              <ul className="who-for-list">
                <li>{t.titp_who_li1}</li>
                <li>{t.titp_who_li2}</li>
                <li>{t.titp_who_li3}</li>
                <li>{t.titp_who_li4}</li>
                <li>{t.titp_who_li5}</li>
              </ul>
            </div>
            <div className="who-for-card titp-who-card">
              <div className="who-for-card-icon">🎓</div>
              <h3>{t.titp_who_card_title}</h3>
              <p>{t.titp_who_card_desc}</p>
              <a href="/#contact" className="btn-visa-primary" id="titp-who-contact-btn">
                {t.titp_who_card_btn} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Process */}
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label titp-label">{t.titp_process_label}</div>
            <h2 className="visa-section-title">{t.titp_process_title}</h2>
            <p className="visa-section-desc">{t.titp_process_desc}</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-step titp-process-step" key={step.num}>
                <div className="process-step-num titp-step-num">{step.num}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Important */}
      <section className="visa-section">
        <div className="container">
          <div className="important-box titp-important-box">
            <div className="important-box-icon">ℹ️</div>
            <div>
              <h3 className="important-box-title">{t.titp_important_title}</h3>
              <p className="important-box-desc">{t.titp_important_desc}</p>
              <ul className="important-box-list">
                <li>{t.titp_important_li1}</li>
                <li>{t.titp_important_li2}</li>
                <li>{t.titp_important_li3}</li>
                <li>{t.titp_important_li4}</li>
                <li>{t.titp_important_li5}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="visa-final-cta titp-final-cta">
        <div className="container">
          <div className="visa-final-cta-inner">
            <div className="visa-final-cta-flag">🇯🇵</div>
            <h2 className="visa-final-cta-title">{t.titp_final_title}</h2>
            <p className="visa-final-cta-desc">{t.titp_final_desc}</p>
            <div className="visa-final-cta-btns">
              <a href="/#contact" className="btn-visa-primary large" id="titp-final-contact-btn">
                {t.titp_final_btn1}
              </a>
              <a href="/#contact" className="btn-visa-outline large" id="titp-advisor-btn">
                {t.titp_final_btn2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
