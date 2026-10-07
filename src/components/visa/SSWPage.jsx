import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';

// Worker images in public/workers/ folder
const WORKERS = {
  nurse:        '/workers/worker_nurse.jpg',
  construction: '/workers/worker_construction.jpg',
  chef:         '/workers/worker_chef.jpg',
};

// Individual floating popup component — observes itself
function FloatingWorker({ img, label, side }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ssw-float-worker ssw-float-${side}${visible ? ' ssw-float-visible' : ''}`}
      aria-hidden="true"
    >
      <div className="ssw-float-img-wrap">
        <img src={img} alt={label} className="ssw-float-img" loading="lazy" />
        <div className="ssw-float-label">{label}</div>
      </div>
    </div>
  );
}

export default function SSWPage() {
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sswProcess = [
    { num: '01', title: t.ssw_proc_s1_title, desc: t.ssw_proc_s1_desc },
    { num: '02', title: t.ssw_proc_s2_title, desc: t.ssw_proc_s2_desc },
    { num: '03', title: t.ssw_proc_s3_title, desc: t.ssw_proc_s3_desc },
    { num: '04', title: t.ssw_proc_s4_title, desc: t.ssw_proc_s4_desc },
    { num: '05', title: t.ssw_proc_s5_title, desc: t.ssw_proc_s5_desc },
    { num: '06', title: t.ssw_proc_s6_title, desc: t.ssw_proc_s6_desc },
    { num: '07', title: t.ssw_proc_s7_title, desc: t.ssw_proc_s7_desc },
    { num: '08', title: t.ssw_proc_s8_title, desc: t.ssw_proc_s8_desc },
    { num: '09', title: t.ssw_proc_s9_title, desc: t.ssw_proc_s9_desc },
  ];

  const supportCards = [
    { icon: '✈️', title: t.ssw_sup_c1_title, desc: t.ssw_sup_c1_desc },
    { icon: '💼', title: t.ssw_sup_c2_title, desc: t.ssw_sup_c2_desc },
    { icon: '🏠', title: t.ssw_sup_c3_title, desc: t.ssw_sup_c3_desc },
    { icon: '👔', title: t.ssw_sup_c4_title, desc: t.ssw_sup_c4_desc },
    { icon: '🤝', title: t.ssw_sup_c5_title, desc: t.ssw_sup_c5_desc },
  ];

  const skillsCards = [
    { icon: '📝', title: t.ssw_skills_c1_title, desc: t.ssw_skills_c1_desc },
    { icon: '🏭', title: t.ssw_skills_c2_title, desc: t.ssw_skills_c2_desc },
    { icon: '💼', title: t.ssw_skills_c3_title, desc: t.ssw_skills_c3_desc },
  ];

  return (
    <div className="visa-detail-page ssw-with-floats">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t.ssw_breadcrumb_home}</Link>
            <span className="breadcrumb-sep">›</span>
            <span>{t.ssw_breadcrumb_japan}</span>
            <span className="breadcrumb-sep">›</span>
            <Link to="/">{t.ssw_breadcrumb_pathways}</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">{t.ssw_breadcrumb_current}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="visa-hero ssw-hero">
        <div className="container">
          <div className="visa-hero-inner">
            <div className="visa-hero-content">
              <div className="visa-hero-badge ssw-badge">SSW</div>
              <h1 className="visa-hero-title">{t.ssw_hero_title}</h1>
              <p className="visa-hero-jp">特定技能</p>
              <p className="visa-hero-desc">{t.ssw_hero_desc}</p>
              <div className="visa-hero-cta">
                <a href="/#contact" className="btn-visa-primary ssw-primary" id="ssw-apply-btn">
                  {t.ssw_hero_apply_btn} →
                </a>
                <Link to="/" className="btn-visa-secondary" id="ssw-back-pathways-btn">
                  ← {t.ssw_hero_back_btn}
                </Link>
              </div>
            </div>
            <div className="visa-hero-stat-group">
              <div className="visa-stat-card ssw-stat-card">
                <div className="visa-stat-num ssw-stat-num">SSW i</div>
                <div className="visa-stat-label">{t.ssw_stat_standard}</div>
              </div>
              <div className="visa-stat-card ssw-stat-card">
                <div className="visa-stat-num ssw-stat-num">SSW ii</div>
                <div className="visa-stat-label">{t.ssw_stat_advanced}</div>
              </div>
              <div className="visa-stat-card ssw-stat-card">
                <div className="visa-stat-num ssw-stat-num">N4+</div>
                <div className="visa-stat-label">{t.ssw_stat_jlpt}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Overview */}
      <section className="visa-section ssw-float-section" id="ssw-section-overview">
        <FloatingWorker img={WORKERS.nurse} label={t.ssw_worker_healthcare} side="left" />
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">{t.ssw_overview_label}</div>
            <h2 className="visa-section-title">{t.ssw_overview_title}</h2>
          </div>
          <div className="overview-grid">
            {[
              { icon: '📋', label: t.ssw_label_program,  value: t.ssw_overview_program },
              { icon: '🈯', label: t.ssw_label_jp_name,  value: t.ssw_overview_jp_name },
              { icon: '🗂️', label: t.ssw_label_ssw1,     value: t.ssw_overview_ssw1 },
              { icon: '⭐', label: t.ssw_label_ssw2,     value: t.ssw_overview_ssw2 },
              { icon: '🏢', label: t.ssw_label_employer, value: t.ssw_overview_employer },
              { icon: '🎯', label: t.ssw_label_purpose,  value: t.ssw_overview_purpose },
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

      {/* Section 2 — Requirements */}
      <section className="visa-section visa-section-alt ssw-float-section" id="ssw-section-requirements">
        <FloatingWorker img={WORKERS.construction} label={t.ssw_worker_construction} side="right" />
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">{t.ssw_req_label}</div>
            <h2 className="visa-section-title">{t.ssw_req_title}</h2>
            <p className="visa-section-desc">{t.ssw_req_desc}</p>
          </div>
          <div className="req-two-col">
            <div className="req-big-card ssw-req-card">
              <div className="req-big-icon">🗣️</div>
              <h3 className="req-big-title">{t.ssw_req_lang_title}</h3>
              <div className="jlpt-badge-group centered">
                <div className="jlpt-badge ssw-jlpt">
                  <div className="jlpt-top">JFT-Basic</div>
                  <div className="jlpt-level small">Pass</div>
                </div>
                <div className="jlpt-or">{t.ssw_jlpt_or}</div>
                <div className="jlpt-badge ssw-jlpt">
                  <div className="jlpt-top">JLPT</div>
                  <div className="jlpt-level">N4+</div>
                </div>
              </div>
              <p className="req-big-note">{t.ssw_req_note1}</p>
            </div>
            <div className="req-big-card ssw-req-card">
              <div className="req-big-icon">🔨</div>
              <h3 className="req-big-title">{t.ssw_req_skills_title}</h3>
              <div className="skills-badge">
                <div className="skills-badge-label">{t.ssw_req_skills_badge}</div>
              </div>
              <p className="req-big-note">{t.ssw_req_note2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Organization & Support */}
      <section className="visa-section">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">{t.ssw_org_label}</div>
            <h2 className="visa-section-title">{t.ssw_org_title}</h2>
          </div>
          <div className="org-support-layout">
            <div className="org-card ssw-org-card">
              <div className="org-card-icon">🏢</div>
              <h3 className="org-card-title">{t.ssw_org1_title}</h3>
              <p className="org-card-desc">{t.ssw_org1_desc}</p>
            </div>
            <div className="org-connector">→</div>
            <div className="org-card ssw-org-card">
              <div className="org-card-icon">🤝</div>
              <h3 className="org-card-title">{t.ssw_org2_title}</h3>
              <p className="org-card-desc">{t.ssw_org2_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Process */}
      <section className="visa-section visa-section-alt ssw-float-section" id="ssw-section-process">
        <FloatingWorker img={WORKERS.chef} label={t.ssw_worker_food} side="left" />
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">{t.ssw_process_label}</div>
            <h2 className="visa-section-title">{t.ssw_process_title}</h2>
            <p className="visa-section-desc">{t.ssw_process_desc}</p>
          </div>
          <div className="process-grid">
            {sswProcess.map((step) => (
              <div className="process-step ssw-process-step" key={step.num}>
                <div className="process-step-num ssw-step-num">{step.num}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Language requirement highlight */}
      <section className="visa-section">
        <div className="container">
          <div className="lang-req-card ssw-lang-card">
            <div className="lang-req-left">
              <div className="visa-section-label ssw-label">{t.ssw_lang_label}</div>
              <h2 className="lang-req-title">{t.ssw_lang_title}</h2>
              <p className="lang-req-desc">{t.ssw_lang_desc}</p>
              <p className="lang-req-note">ℹ️ {t.ssw_lang_note}</p>
            </div>
            <div className="lang-req-right">
              <div className="jlpt-badge-group">
                <div className="jlpt-badge ssw-jlpt">
                  <div className="jlpt-top">JFT-Basic</div>
                  <div className="jlpt-level small">Pass</div>
                </div>
                <div className="jlpt-or">{t.ssw_jlpt_or}</div>
                <div className="jlpt-badge ssw-jlpt">
                  <div className="jlpt-top">JLPT</div>
                  <div className="jlpt-level">N4+</div>
                </div>
              </div>
              <p className="lang-req-caption">{t.ssw_lang_caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Skills Requirement */}
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">{t.ssw_skills_label}</div>
            <h2 className="visa-section-title">{t.ssw_skills_title}</h2>
          </div>
          <div className="support-grid">
            {skillsCards.map((card) => (
              <div className="support-card ssw-support-card" key={card.title}>
                <div className="support-icon ssw-icon-bg">{card.icon}</div>
                <h3 className="support-card-title">{card.title}</h3>
                <p className="support-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Support Before & After */}
      <section className="visa-section ssw-float-section" id="ssw-section-support">
        <FloatingWorker img={WORKERS.nurse} label={t.ssw_worker_care} side="right" />
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">{t.ssw_full_label}</div>
            <h2 className="visa-section-title">{t.ssw_full_title}</h2>
          </div>
          <div className="support-grid">
            {supportCards.map((card) => (
              <div className="support-card ssw-support-card" key={card.title}>
                <div className="support-icon ssw-icon-bg">{card.icon}</div>
                <h3 className="support-card-title">{card.title}</h3>
                <p className="support-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Who is it for */}
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="who-for-layout">
            <div className="who-for-text">
              <div className="visa-section-label ssw-label">{t.ssw_who_label}</div>
              <h2 className="visa-section-title">{t.ssw_who_title}</h2>
              <p className="visa-section-desc">{t.ssw_who_desc}</p>
              <ul className="who-for-list ssw-who-list">
                <li>{t.ssw_who_li1}</li>
                <li>{t.ssw_who_li2}</li>
                <li>{t.ssw_who_li3}</li>
                <li>{t.ssw_who_li4}</li>
                <li>{t.ssw_who_li5}</li>
              </ul>
            </div>
            <div className="who-for-card ssw-who-card">
              <div className="who-for-card-icon">⭐</div>
              <h3>{t.ssw_who_card_title}</h3>
              <p>{t.ssw_who_card_desc}</p>
              <a href="/#contact" className="btn-visa-primary ssw-primary" id="ssw-who-contact-btn">
                {t.ssw_who_card_btn} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Important Info */}
      <section className="visa-section">
        <div className="container">
          <div className="important-box ssw-important-box">
            <div className="important-box-icon">ℹ️</div>
            <div>
              <h3 className="important-box-title">{t.ssw_important_title}</h3>
              <p className="important-box-desc">{t.ssw_important_desc}</p>
              <ul className="important-box-list">
                <li>{t.ssw_important_li1}</li>
                <li>{t.ssw_important_li2}</li>
                <li>{t.ssw_important_li3}</li>
                <li>{t.ssw_important_li4}</li>
                <li>{t.ssw_important_li5}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="visa-final-cta ssw-final-cta">
        <div className="container">
          <div className="visa-final-cta-inner">
            <div className="visa-final-cta-flag">🇯🇵</div>
            <h2 className="visa-final-cta-title">{t.ssw_final_title}</h2>
            <p className="visa-final-cta-desc">{t.ssw_final_desc}</p>
            <div className="visa-final-cta-btns">
              <a href="/#contact" className="btn-visa-primary ssw-final-btn large" id="ssw-final-contact-btn">
                {t.ssw_final_btn1}
              </a>
              <a href="/#contact" className="btn-visa-outline ssw-outline large" id="ssw-advisor-btn">
                {t.ssw_final_btn2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
