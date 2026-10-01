import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const sswProcess = [
  { num: '01', title: 'Choose Industry / Field', desc: 'Identify the industry and field in Japan that matches your skills and experience.' },
  { num: '02', title: 'Prepare Japanese Language', desc: 'Study Japanese to meet the language requirements for SSW.' },
  { num: '03', title: 'Pass Language Test', desc: 'Pass the required Japanese language test (JFT-Basic or JLPT N4+).' },
  { num: '04', title: 'Pass Skills Test', desc: 'Pass the relevant specified skills examination for your industry field.' },
  { num: '05', title: 'Employment Opportunity', desc: 'Receive or find a job offer from a qualified accepting organization in Japan.' },
  { num: '06', title: 'Employment Contract', desc: 'Review and sign the employment contract with the Japanese employer.' },
  { num: '07', title: 'Residence Status / Visa', desc: 'Apply for the Specified Skilled Worker residence status with required documents.' },
  { num: '08', title: 'Prepare for Japan', desc: 'Complete pre-departure orientation and prepare for life in Japan.' },
  { num: '09', title: 'Start Work in Japan', desc: 'Arrive in Japan and begin your employment at the accepting organization.' },
];

const supportCards = [
  { icon: '✈️', title: 'Pre-departure Orientation', desc: 'Briefing and preparation to help you understand what to expect in Japan.' },
  { icon: '💼', title: 'Employment Support', desc: 'Guidance on your employment contract, rights, and workplace responsibilities.' },
  { icon: '🏠', title: 'Daily Life Guidance', desc: 'Information on living in Japan, housing, banking, and day-to-day life.' },
  { icon: '👔', title: 'Workplace Support', desc: 'Ongoing support during your employment period at the accepting organization.' },
  { icon: '🤝', title: 'Registered Support Organization', desc: 'A Registered Support Organization may provide additional support and assistance.' },
];

export default function SSWPage() {
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
            <span className="breadcrumb-current">SSW</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="visa-hero ssw-hero">
        <div className="container">
          <div className="visa-hero-inner">
            <div className="visa-hero-content">
              <div className="visa-hero-flag">🇯🇵</div>
              <div className="visa-hero-badge ssw-badge">SSW</div>
              <h1 className="visa-hero-title">Specified Skilled Worker</h1>
              <p className="visa-hero-jp">特定技能</p>
              <p className="visa-hero-desc">
                A skills-based work pathway for candidates who meet the required skill and Japanese
                language requirements for employment in Japan.
              </p>
              <div className="visa-hero-cta">
                <a href="/#contact" className="btn-visa-primary ssw-primary" id="ssw-apply-btn">
                  Apply / Contact Us →
                </a>
                <Link to="/" className="btn-visa-secondary" id="ssw-back-pathways-btn">
                  ← Back to Visa Pathways
                </Link>
              </div>
            </div>
            <div className="visa-hero-stat-group">
              <div className="visa-stat-card ssw-stat-card">
                <div className="visa-stat-num ssw-stat-num">SSW i</div>
                <div className="visa-stat-label">Standard Category</div>
              </div>
              <div className="visa-stat-card ssw-stat-card">
                <div className="visa-stat-num ssw-stat-num">SSW ii</div>
                <div className="visa-stat-label">Advanced Category</div>
              </div>
              <div className="visa-stat-card ssw-stat-card">
                <div className="visa-stat-num ssw-stat-num">N4+</div>
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
            <div className="visa-section-label ssw-label">Program Overview</div>
            <h2 className="visa-section-title">About the SSW</h2>
          </div>
          <div className="overview-grid">
            {[
              { icon: '📋', label: 'Program', value: 'Specified Skilled Worker' },
              { icon: '🈯', label: 'Japanese Name', value: '特定技能' },
              { icon: '🗂️', label: 'SSW (i)', value: 'Standard category for skilled workers meeting the applicable requirements' },
              { icon: '⭐', label: 'SSW (ii)', value: 'Advanced category for skilled workers with higher proficiency — available in select industries' },
              { icon: '🏢', label: 'Accepting Organization', value: 'Japanese employer / organization approved to hire SSW workers' },
              { icon: '🎯', label: 'Purpose', value: 'Skills-based employment in Japan for workers with relevant experience and Japanese language ability' },
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
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">Entry Requirements</div>
            <h2 className="visa-section-title">SSW Requirements</h2>
            <p className="visa-section-desc">
              Candidates generally need to meet both a Japanese language requirement and a skills requirement. Requirements may vary by industry and field.
            </p>
          </div>
          <div className="req-two-col">
            <div className="req-big-card ssw-req-card">
              <div className="req-big-icon">🗣️</div>
              <h3 className="req-big-title">Japanese Language</h3>
              <div className="jlpt-badge-group centered">
                <div className="jlpt-badge ssw-jlpt">
                  <div className="jlpt-top">JFT-Basic</div>
                  <div className="jlpt-level small">Pass</div>
                </div>
                <div className="jlpt-or">or</div>
                <div className="jlpt-badge ssw-jlpt">
                  <div className="jlpt-top">JLPT</div>
                  <div className="jlpt-level">N4+</div>
                </div>
              </div>
              <p className="req-big-note">
                Requirements may vary depending on the applicable pathway and field. Verify current requirements before applying.
              </p>
            </div>
            <div className="req-big-card ssw-req-card">
              <div className="req-big-icon">🔨</div>
              <h3 className="req-big-title">Skills Test</h3>
              <div className="skills-badge">
                <div className="skills-badge-label">Specified Skills Examination</div>
              </div>
              <p className="req-big-note">
                Candidates generally need to pass the relevant skills examination for their industry field.
                An applicable exemption may apply in certain circumstances — check current guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Organization & Support */}
      <section className="visa-section">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">Your Support Structure</div>
            <h2 className="visa-section-title">Accepting Organization &amp; Support</h2>
          </div>
          <div className="org-support-layout">
            <div className="org-card ssw-org-card">
              <div className="org-card-icon">🏢</div>
              <h3 className="org-card-title">Accepting Organization</h3>
              <p className="org-card-desc">
                The Japanese employer who hires you under the SSW program. They are responsible for
                your employment conditions, workplace, and compliance with applicable rules.
              </p>
            </div>
            <div className="org-connector">→</div>
            <div className="org-card ssw-org-card">
              <div className="org-card-icon">🤝</div>
              <h3 className="org-card-title">Registered Support Organization</h3>
              <p className="org-card-desc">
                An organization that can provide support services including pre-arrival preparation,
                daily life guidance, workplace support, and other assistance to SSW workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Process */}
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">Step by Step</div>
            <h2 className="visa-section-title">The SSW Process</h2>
            <p className="visa-section-desc">From preparing your qualifications to starting your career in Japan.</p>
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
              <div className="visa-section-label ssw-label">Language Requirement</div>
              <h2 className="lang-req-title">Japanese Language for SSW</h2>
              <p className="lang-req-desc">
                All SSW candidates are required to demonstrate Japanese language ability. The standard
                acceptable tests are the JFT-Basic or JLPT N4 and above.
              </p>
              <p className="lang-req-note">
                ℹ️ Exact requirements should be checked against the applicable current rules and job field.
              </p>
            </div>
            <div className="lang-req-right">
              <div className="jlpt-badge-group">
                <div className="jlpt-badge ssw-jlpt">
                  <div className="jlpt-top">JFT-Basic</div>
                  <div className="jlpt-level small">Pass</div>
                </div>
                <div className="jlpt-or">OR</div>
                <div className="jlpt-badge ssw-jlpt">
                  <div className="jlpt-top">JLPT</div>
                  <div className="jlpt-level">N4+</div>
                </div>
              </div>
              <p className="lang-req-caption">Check field-specific requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Skills Requirement */}
      <section className="visa-section visa-section-alt">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">Skills</div>
            <h2 className="visa-section-title">Skills Requirement</h2>
          </div>
          <div className="support-grid">
            {[
              { icon: '📝', title: 'Skills Examination', desc: 'Candidates generally need to pass the specified skills examination relevant to the industry field they are applying for.' },
              { icon: '🏭', title: 'Industry-specific Requirements', desc: 'Each industry field has its own specific skills examination. The applicable test depends on the job category.' },
              { icon: '💼', title: 'Job-specific Requirements', desc: 'Beyond the formal examination, individual employers may have additional requirements for the specific role.' },
            ].map((card) => (
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
      <section className="visa-section">
        <div className="container">
          <div className="visa-section-header">
            <div className="visa-section-label ssw-label">Full-journey Support</div>
            <h2 className="visa-section-title">Support Before &amp; After Arrival</h2>
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
              <div className="visa-section-label ssw-label">Candidate Profile</div>
              <h2 className="visa-section-title">Who is SSW For?</h2>
              <p className="visa-section-desc">
                SSW is intended for candidates who have the required skills and Japanese language
                ability for the applicable field in Japan.
              </p>
              <ul className="who-for-list ssw-who-list">
                <li>Candidates with practical skills in a qualifying industry field</li>
                <li>Candidates who meet the Japanese language requirement (JFT-Basic or JLPT N4+)</li>
                <li>Candidates who have passed the relevant specified skills examination</li>
                <li>Candidates seeking direct employment in Japan</li>
                <li>Candidates who can adapt to Japanese workplace culture</li>
              </ul>
            </div>
            <div className="who-for-card ssw-who-card">
              <div className="who-for-card-icon">⭐</div>
              <h3>Ready to Begin?</h3>
              <p>Talk to our advisors to find out if SSW is the right pathway for you.</p>
              <a href="/#contact" className="btn-visa-primary ssw-primary" id="ssw-who-contact-btn">Contact OG Agency →</a>
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
              <h3 className="important-box-title">Important Information</h3>
              <p className="important-box-desc">
                SSW requirements and conditions can vary and are subject to change. OG Agency provides
                guidance based on available information and current regulations, but cannot guarantee
                visa approval or employment outcomes.
              </p>
              <ul className="important-box-list">
                <li>Japanese immigration rules and SSW categories are subject to change</li>
                <li>Industry / field requirements differ from one another</li>
                <li>Employer requirements may vary beyond the standard criteria</li>
                <li>Examination requirements and schedules should be verified with official sources</li>
                <li>Current government policies may affect eligibility and processing</li>
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
            <h2 className="visa-final-cta-title">Ready to start your Japan career?</h2>
            <p className="visa-final-cta-desc">Our team will guide you through the SSW pathway from preparation to employment.</p>
            <div className="visa-final-cta-btns">
              <a href="/#contact" className="btn-visa-primary ssw-final-btn large" id="ssw-final-contact-btn">Contact OG Agency</a>
              <a href="/#contact" className="btn-visa-outline ssw-outline large" id="ssw-advisor-btn">Talk to an Advisor</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
