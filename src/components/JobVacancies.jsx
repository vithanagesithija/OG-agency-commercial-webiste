import { FaFacebook } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

function VacancyCard({ countryKey, jobKey, taglineKey, features, bannerClass, flag, reactions, shares, time }) {
  const { t } = useLang();
  return (
    <article className="vacancy-card">
      {/* Card Header */}
      <div className="vacancy-card-header">
        <div className="vacancy-card-meta">
          <div className="vacancy-card-avatar">OG</div>
          <div className="vacancy-card-info">
            <span className="vacancy-card-agency">{t.vac_agency}</span>
            <span className="vacancy-card-time">{time}</span>
          </div>
        </div>
        <FaFacebook className="vacancy-fb-icon" />
      </div>

      {/* Banner */}
      <div className={`vacancy-card-banner ${bannerClass}`}>
        <div className="vacancy-card-overlay">
          <div className="vacancy-card-country-label">{flag} {t[countryKey]}</div>
          <div className="vacancy-card-job-label">{t[jobKey]}</div>
        </div>
      </div>

      {/* Body */}
      <div className="vacancy-card-body">
        <p className="vacancy-card-tagline">{t[taglineKey]}</p>
        <ul className="vacancy-card-features">
          {features.map(fKey => (
            <li key={fKey}>{t[fKey]}</li>
          ))}
        </ul>
        <button className="btn-apply" id={`apply-btn-${countryKey}`}>
          {t.vac_apply}
        </button>
      </div>

      {/* Footer */}
      <div className="vacancy-card-footer">
        <div className="vacancy-reactions">
          <span className="vacancy-reaction-emojis">👍❤️</span>
          {reactions}
        </div>
        <div className="vacancy-shares">{shares} shares</div>
      </div>
    </article>
  );
}

const VACANCIES = [
  {
    id: 'japan',
    countryKey: 'vac_japan_country',
    jobKey: 'vac_japan_job',
    taglineKey: 'vac_japan_tagline',
    bannerClass: 'banner-japan',
    flag: '🇯🇵',
    features: ['vac_japan_f1', 'vac_japan_f2', 'vac_japan_f3'],
    reactions: 198, shares: 12, time: '3 days ago',
  },
  {
    id: 'romania',
    countryKey: 'vac_romania_country',
    jobKey: 'vac_romania_job',
    taglineKey: 'vac_romania_tagline',
    bannerClass: 'banner-romania',
    flag: '🇷🇴',
    features: ['vac_romania_f1', 'vac_romania_f2', 'vac_romania_f3'],
    reactions: 95, shares: 8, time: '5 days ago',
  },
  {
    id: 'srilanka',
    countryKey: 'vac_sl_country',
    jobKey: 'vac_sl_job',
    taglineKey: 'vac_sl_tagline',
    bannerClass: 'banner-srilanka',
    flag: '🛵',
    features: ['vac_sl_f1', 'vac_sl_f2', 'vac_sl_f3'],
    reactions: 74, shares: 5, time: '5 days ago',
  },
  {
    id: 'russia',
    countryKey: 'vac_russia_country',
    jobKey: 'vac_russia_job',
    taglineKey: 'vac_russia_tagline',
    bannerClass: 'banner-russia',
    flag: '🇷🇺',
    features: ['vac_russia_f1', 'vac_russia_f2', 'vac_russia_f3'],
    reactions: 112, shares: 10, time: '1 week ago',
  },
];

export default function JobVacancies() {
  const { t } = useLang();

  return (
    <section className="vacancies" id="vacancies">
      <div className="container">
        <div className="vacancies-header">
          <div>
            <h2 className="section-title">{t.vac_title}</h2>
            <p className="section-subtitle">{t.vac_subtitle}</p>
          </div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="btn-facebook"
            id="follow-facebook-btn"
          >
            <FaFacebook size={16} /> {t.vac_follow_fb}
          </a>
        </div>

        <div className="vacancy-grid">
          {VACANCIES.map(v => (
            <VacancyCard key={v.id} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
