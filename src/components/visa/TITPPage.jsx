import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const stages = [
  {
    num: '01',
    title: 'Pre-Training',
    duration: 'Before Departure',
    desc: 'Japanese language training, orientation, and skills preparation before arriving in Japan.',
  },
  {
    num: '02',
    title: 'TITP 1',
    duration: 'Up to 1 year',
    desc: 'Initial technical intern training period. Supervised hands-on training at the accepting organization.',
  },
  {
    num: '03',
    title: 'TITP 2',
    duration: 'Up to 2 years',
    desc: 'Continuation of technical training with increased responsibility and skill development.',
  },
  {
    num: '04',
    title: 'TITP 3',
    duration: 'Up to 2 additional years',
    desc: 'Advanced training stage for candidates who meet the applicable requirements and pass the prescribed evaluation.',
  },
  {
    num: '05',
    title: 'Completion / Next Pathway',
    duration: 'End of Program',
    desc: 'Program completion. Candidates may explore other applicable visa categories such as SSW depending on eligibility.',
  },
];

const trainingCards = [
  { icon: '🗾', title: 'Pre-departure Training', desc: 'Comprehensive preparation before leaving for Japan including language and cultural orientation.' },
  { icon: '🗣️', title: 'Japanese Language', desc: 'Structured Japanese language training to help you communicate effectively in the workplace.' },
  { icon: '📋', title: 'Orientation', desc: 'Introduction to Japanese workplace culture, rules, and expectations.' },
  { icon: '🔧', title: 'Technical Training', desc: 'Hands-on skills training relevant to your specific occupation and industry.' },
  { icon: '👥', title: 'Workplace Guidance', desc: 'Ongoing guidance and mentoring at the accepting organization throughout the program.' },
  { icon: '🤝', title: 'Support During Process', desc: 'Continuous support from OG Agency throughout your application and training journey.' },
];

const processSteps = [
  { num: '01', title: 'Application', desc: 'Submit your application with OG Agency and discuss your goals and qualifications.' },
  { num: '02', title: 'Screening', desc: 'Initial screening of your qualifications, background, and suitability for the program.' },
  { num: '03', title: 'Japanese & Skills Prep', desc: 'Begin Japanese language training and prepare for any required skills assessments.' },
  { num: '04', title: 'Interview', desc: 'Interview with the accepting organization or supervising organization representative.' },
  { num: '05', title: 'Documentation & Visa', desc: 'Preparation of necessary documents and visa application with guidance from OG Agency.' },
  { num: '06', title: 'Pre-departure Orientation', desc: 'Final briefing and orientation before your departure for Japan.' },
  { num: '07', title: 'Arrival in Japan', desc: 'Arrival and initial settlement support in Japan.' },
  { num: '08', title: 'Training / Employment', desc: 'Begin your technical intern training at the accepting organization in Japan.' },
];

export default function TITPPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="visa-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Japan</span>
            <span className="breadcrumb-sep">›</span>
            <Link to="/">Visa Pathways</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">TITP</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="visa-hero titp-hero">
        <div className="container">
          <div className="visa-hero-inner">
            <div className="visa-hero-content">
              <div className="visa-hero-flag">🇯🇵</div>
              <div className="visa-hero-badge titp-badge">TITP</div>
              <h1 className="visa-hero-title">Technical Intern Training Program</h1>
              <p className="visa-hero-jp">技能実習</p>
              <p className="visa-hero-desc">
                A structured training-cum-employment pathway for candidates seeking to gain technical
                experience while working in Japan under guided supervision.
              </p>
              <div className="visa-hero-cta">
                <a href="/#contact" className="btn-visa-primary" id="titp-apply-btn">
                  Apply / Contact Us →
                </a>
                <Link to="/" className="btn-visa-secondary" id="titp-back-pathways-btn">
                  ← Back to Visa Pathways
                </Link>
              </div>
            </div>
            <div className="visa-hero-stat-group">
              <div className="visa-stat-card">
                <div className="visa-stat-num">1–5</div>
                <div className="visa-stat-label">Years Duration</div>
              </div>
              <div className="visa-stat-card">
                <div className="visa-stat-num">3</div>
                <div className="visa-stat-label">Training Stages</div>
              </div>
              <div className="visa-stat-card">
                <div className="visa-stat-num">N5/N4</div>
                <div className="visa-stat-label">JLPT Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Overview */}
      <section className="visa-section">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label titp-label">Program Overview</div>
            <h2 className="visa-section-title">About the TITP</h2>
          </div>
          <div className="overview-grid">
            {[
              { icon: '📋', label: 'Program', value: 'Technical Intern Training Program' },
              { icon: '🈯', label: 'Japanese Name', value: '技能実習' },
              { icon: '⏱️', label: 'Duration', value: '1–5 years depending on stage and program' },
              { icon: '🏢', label: 'Related Organizations', value: 'Supervising Organizations (監理団体) and OTIT' },
              { icon: '🏭', label: 'Accepting Organization', value: 'Japanese employer / workplace' },
              { icon: '🎯', label: 'Purpose', value: 'Training and technical skill development through practical work in Japan' },
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
            <div className="visa-section-label titp-label">Program Structure</div>
            <h2 className="visa-section-title">TITP Pathway Stages</h2>
            <p className="visa-section-desc">The TITP is structured in progressive stages, each building on the previous.</p>
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
              <div className="visa-section-label titp-label">Language</div>
              <h2 className="lang-req-title">Japanese Language Requirements</h2>
              <p className="lang-req-desc">
                Japanese language ability is an important part of the TITP. The exact requirement may vary
                depending on the applicable program, occupation, and employer requirements.
              </p>
              <p className="lang-req-note">
                ℹ️ Requirements may vary depending on the program, occupation, and recruiting organization.
              </p>
            </div>
            <div className="lang-req-right">
              <div className="jlpt-badge-group">
                <div className="jlpt-badge titp-jlpt">
                  <div className="jlpt-top">JLPT</div>
                  <div className="jlpt-level">N5</div>
                </div>
                <div className="jlpt-or">or</div>
                <div className="jlpt-badge titp-jlpt">
                  <div className="jlpt-top">JLPT</div>
                  <div className="jlpt-level">N4</div>
                </div>
              </div>
              <p className="lang-req-caption">Minimum guideline — check specific program requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Training & Support */}
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label titp-label">What We Provide</div>
            <h2 className="visa-section-title">Training &amp; Support</h2>
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
              <div className="visa-section-label titp-label">Candidate Profile</div>
              <h2 className="visa-section-title">Who is TITP For?</h2>
              <p className="visa-section-desc">
                TITP is designed for candidates who wish to gain structured technical training and
                practical work experience in Japan.
              </p>
              <ul className="who-for-list">
                <li>Candidates seeking structured training and practical experience in Japan</li>
                <li>Candidates willing to commit to the program duration and requirements</li>
                <li>Candidates who meet the relevant language and recruitment requirements</li>
                <li>Candidates prepared for Japanese workplace culture and expectations</li>
                <li>Candidates who want to build technical skills under guided supervision</li>
              </ul>
            </div>
            <div className="who-for-card titp-who-card">
              <div className="who-for-card-icon">🎓</div>
              <h3>Ready to Begin?</h3>
              <p>Talk to our advisors to find out if TITP is the right pathway for you.</p>
              <a href="/#contact" className="btn-visa-primary" id="titp-who-contact-btn">Contact OG Agency →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Process */}
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label titp-label">Step by Step</div>
            <h2 className="visa-section-title">The TITP Process</h2>
            <p className="visa-section-desc">From initial application to working in Japan — here is how it works.</p>
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
              <h3 className="important-box-title">Important Information</h3>
              <p className="important-box-desc">
                Requirements and conditions for TITP can vary depending on a number of factors including
                the occupation, accepting organization, supervising organization, and current Japanese
                immigration rules and regulations. OG Agency provides guidance based on available information
                and current regulations, but cannot guarantee visa approval or specific outcomes.
              </p>
              <ul className="important-box-list">
                <li>Requirements may differ based on occupation and employer</li>
                <li>Japanese language requirements vary by program</li>
                <li>Eligibility for TITP 3 requires passing the prescribed evaluation</li>
                <li>Japanese immigration rules are subject to change</li>
                <li>Always verify requirements against current official guidelines</li>
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
            <h2 className="visa-final-cta-title">Ready to explore opportunities in Japan?</h2>
            <p className="visa-final-cta-desc">Our team is ready to guide you through every step of the TITP process.</p>
            <div className="visa-final-cta-btns">
              <a href="/#contact" className="btn-visa-primary large" id="titp-final-contact-btn">Contact OG Agency</a>
              <a href="/#contact" className="btn-visa-outline large" id="titp-advisor-btn">Talk to an Advisor</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
