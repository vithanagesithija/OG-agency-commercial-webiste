const STEPS = [
  { num: '①', icon: '📋', title: 'Registration & Counseling', desc: 'Free registration and career counseling' },
  { num: '②', icon: '📚', title: 'Training & Exams', desc: 'Language and skills training and assessments' },
  { num: '③', icon: '🤝', title: 'Interview & Matching', desc: 'Meet employers and get matched with opportunities' },
  { num: '④', icon: '📄', title: 'Documentation & COE Application', desc: 'Full documentation support, apply for COE' },
  { num: '⑤', icon: '✈️', title: 'Pre-Departure Support', desc: 'Departure orientation and final preparations' },
  { num: '⑥', icon: '🏢', title: 'Travel & Arrival Support', desc: 'Airport pickup and initial settlement in Japan' },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-label">Our Process</div>
        <h2 className="section-title">From Sri Lanka to Japan</h2>
        <p className="section-subtitle" style={{ marginTop: 6 }}>
          We provide comprehensive step-by-step guidance throughout your entire employment journey.
        </p>

        <div className="process-steps">
          {STEPS.map((step, i) => (
            <div className="process-step" key={i}>
              <div className="process-step-num" title={step.title}>
                {step.icon}
              </div>
              <div className="process-step-title">{step.title}</div>
              <div className="process-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
