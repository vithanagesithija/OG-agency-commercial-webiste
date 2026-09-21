import { FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

const PLACEMENTS = [
  { id: 'japan',   flag: '🇯🇵', country: 'Japan',   roleKey: 'emp_japan_role' },
  { id: 'romania', flag: '🇷🇴', country: 'Romania', roleKey: 'emp_romania_role' },
  { id: 'russia',  flag: '🇷🇺', country: 'Russia',  roleKey: 'emp_russia_role' },
  { id: 'bosnia',  flag: '🇧🇦', country: 'Bosnia',  roleKey: 'emp_bosnia_role' },
];

export default function CurrentEmployment() {
  const { t } = useLang();

  const stats = [
    { icon: <FaUsers size={28} />,    number: '500+',  labelKey: 'stat_workers' },
    { icon: <FaGlobe size={28} />,    number: '5+',    labelKey: 'stat_countries' },
    { icon: <FaHandshake size={28} />, number: '100%', labelKey: 'stat_trusted' },
    { icon: '⭐',                      number: '4.9',   labelKey: 'stat_rating' },
  ];

  return (
    <section className="employment" id="employment">
      <div className="container">
        <h2 className="section-title">{t.emp_title}</h2>
        <p className="section-subtitle">{t.emp_subtitle}</p>

        <div className="employment-inner">
          {/* Country Cards */}
          <div>
            <div className="employment-grid">
              {PLACEMENTS.map(p => (
                <div className="employment-card" key={p.id}>
                  <div className="employment-card-flag">{p.flag}</div>
                  <div className="employment-card-country">{p.country}</div>
                  <div className="employment-card-role">{t[p.roleKey]}</div>
                  <span className="employment-badge">{t.emp_ongoing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="employment-stats">
            {stats.map(s => (
              <div className="stat-item" key={s.labelKey}>
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{t[s.labelKey]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
