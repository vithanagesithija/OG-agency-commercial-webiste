const SECTORS = [
  { id: 'housing',     icon: '🏠', name: 'Housing / Construction' },
  { id: 'construction',icon: '🏗️', name: 'Construction' },
  { id: 'agriculture', icon: '🌾', name: 'Agriculture' },
  { id: 'auto',        icon: '🚗', name: 'Automobile Maintenance' },
  { id: 'food',        icon: '🍱', name: 'Food Manufacturing' },
  { id: 'cleaning',    icon: '🧹', name: 'Cleaning' },
  { id: 'transport',   icon: '🚚', name: 'Road Transport' },
  { id: 'other',       icon: '⚙️', name: 'Other Skilled Areas' },
];

export default function JobSectors() {
  return (
    <section className="sectors" id="sectors">
      <div className="container">
        <div className="section-label">Job Sectors</div>
        <h2 className="section-title">Target Job Sectors in Japan</h2>

        <div className="sectors-grid">
          {SECTORS.map(s => (
            <a
              href="#vacancies"
              className="sector-card"
              key={s.id}
              id={`sector-${s.id}`}
            >
              <div className="sector-icon">{s.icon}</div>
              <div className="sector-name">{s.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
