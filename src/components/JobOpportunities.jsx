import { useLang } from '../context/LanguageContext';

export default function JobOpportunities() {
  const { t } = useLang();

  // Job titles that should be looked up from translations when possible
  const JOBS = [
    {
      id: 'construction',
      img: '/job_construction.jpg',
      flag: '🇯🇵',
      type: 'TITP / SSW',
      title: t.sector_construction,
      salary: '¥150,000 – ¥180,000 / month',
      location: 'Tokyo, Japan',
    },
    {
      id: 'care',
      img: '/job_care_worker.jpg',
      flag: '🇯🇵',
      type: 'SSW',
      title: t.ssw_worker_care,
      salary: '¥160,000 – ¥190,000 / month',
      location: 'Osaka, Japan',
    },
    {
      id: 'agriculture',
      img: '/job_agriculture.jpg',
      flag: '🇯🇵',
      type: 'TITP / SSW',
      title: t.sector_agriculture,
      salary: '¥140,000 – ¥170,000 / month',
      location: 'Hokkaido, Japan',
    },
    {
      id: 'food',
      img: '/job_food_manufacturing.jpg',
      flag: '🇯🇵',
      type: 'TITP / SSW',
      title: t.sector_food,
      salary: '¥145,000 – ¥175,000 / month',
      location: 'Kanagawa, Japan',
    },
  ];

  return (
    <section className="job-opps" id="vacancies">
      <div className="container">
        <div className="job-opps-header">
          <div>
            <div className="section-label">{t.vac_title}</div>
            <h2 className="section-title">{t.vac_title}</h2>
          </div>
          <a href="#" className="view-all-link" id="view-all-jobs-link">
            {t.vac_follow_fb} →
          </a>
        </div>

        <div className="job-card-grid">
          {JOBS.map(job => (
            <article className="job-card" key={job.id}>
              <img
                src={job.img}
                alt={job.title}
                className="job-card-img"
              />
              <div className="job-card-body">
                <div className="job-card-type-row">
                  <span className="job-card-flag">{job.flag}</span>
                  <span className="job-card-type">{job.type}</span>
                </div>
                <h3 className="job-card-title">{job.title}</h3>
                <div className="job-card-meta">
                  <div className="job-card-meta-row">
                    <span>Location</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="job-card-salary">{job.salary}</div>
                <a
                  href="#contact"
                  className="btn-view-vacancy"
                  id={`view-vacancy-${job.id}`}
                >
                  {t.vac_apply} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
