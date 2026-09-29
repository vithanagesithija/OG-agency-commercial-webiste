const TRAINING_FEATURES = [
  {
    id: 'japanese',
    icon: '🇯🇵',
    name: 'Japanese Language',
    desc: 'Practical Japanese and workplace communication skills',
  },
  {
    id: 'technical',
    icon: '🔧',
    name: 'Technical Training',
    desc: 'Hands-on practical training for specific job roles',
  },
  {
    id: 'culture',
    icon: '🤝',
    name: 'Culture & Workplace Skills',
    desc: 'Japanese work culture, norms and expectations',
  },
  {
    id: 'simulation',
    icon: '🎯',
    name: 'Practical Simulation',
    desc: 'Hands-on training to simulate actual working environment',
  },
];

export default function Training() {
  return (
    <section className="training" id="training">
      <div className="container">
        <div className="section-label">In-House Training</div>
        <h2 className="section-title">Prepare Before You Go</h2>
        <p className="section-subtitle" style={{ maxWidth: 500, marginTop: 6 }}>
          We prepare candidates thoroughly to ensure they are fully prepared for life and work in Japan.
        </p>

        <div className="training-inner">
          {/* Features */}
          <div>
            <div className="training-features">
              {TRAINING_FEATURES.map(f => (
                <div className="training-feature" key={f.id}>
                  <div className="training-feature-icon">{f.icon}</div>
                  <div>
                    <div className="training-feature-name">{f.name}</div>
                    <div className="training-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-hero-primary" id="explore-training-btn">
              Explore Our Training →
            </a>
          </div>

          {/* Image */}
          <div className="training-img-wrap">
            <img
              src="/training_classroom.jpg"
              alt="Students learning Japanese language in classroom"
              className="training-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
