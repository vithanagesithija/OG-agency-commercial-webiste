const JOBS = [
  {
    id: 'construction',
    img: '/job_construction.jpg',
    flag: '🇯🇵',
    type: 'TITP / SSW',
    title: 'Construction Worker',
    salary: '¥150,000 – ¥180,000 / month',
    location: 'Tokyo, Japan',
    deadline: 'Apply Before: 2025-08-30',
  },
  {
    id: 'care',
    img: '/job_care_worker.jpg',
    flag: '🇯🇵',
    type: 'SSW',
    title: 'Care Worker',
    salary: '¥160,000 – ¥190,000 / month',
    location: 'Osaka, Japan',
    deadline: 'Apply Before: 2025-09-05',
  },
  {
    id: 'agriculture',
    img: '/job_agriculture.jpg',
    flag: '🇯🇵',
    type: 'TITP / SSW',
    title: 'Agriculture Worker',
    salary: '¥140,000 – ¥170,000 / month',
    location: 'Hokkaido, Japan',
    deadline: 'Apply Before: 2025-09-08',
  },
  {
    id: 'food',
    img: '/job_food_manufacturing.jpg',
    flag: '🇯🇵',
    type: 'TITP / SSW',
    title: 'Food Manufacturing',
    salary: '¥145,000 – ¥175,000 / month',
    location: 'Kanagawa, Japan',
    deadline: 'Apply Before: 2025-08-30',
  },
];

export default function JobOpportunities() {
  return (
    <section className="job-opps" id="vacancies">
      <div className="container">
        <div className="job-opps-header">
          <div>
            <div className="section-label">Latest Job Opportunities</div>
            <h2 className="section-title">Latest Japan Job Opportunities</h2>
          </div>
          <a href="#" className="view-all-link" id="view-all-jobs-link">
            View All Vacancies →
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
                <div className="job-card-deadline">{job.deadline}</div>
                <a
                  href="#contact"
                  className="btn-view-vacancy"
                  id={`view-vacancy-${job.id}`}
                >
                  View Vacancy →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
