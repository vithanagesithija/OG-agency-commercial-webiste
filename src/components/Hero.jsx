import { FaArrowRight, FaPlane, FaTshirt, FaMotorcycle, FaBus, FaBolt } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLang();

  const jobTags = [
    { flag: '🇯🇵', countryKey: 'hero_job_japan',   roleKey: 'hero_job_japan_role',   icon: <FaPlane /> },
    { flag: '🇷🇴', countryKey: 'hero_job_romania',  roleKey: 'hero_job_romania_role',  icon: <FaTshirt /> },
    { flag: '🛵',  countryKey: 'hero_job_rider',    roleKey: 'hero_job_rider_role',    icon: <FaMotorcycle /> },
    { flag: '🚌',  countryKey: 'hero_job_bus',      roleKey: 'hero_job_bus_role',      icon: <FaBus /> },
    { flag: '⚡',  countryKey: 'hero_job_elec',     roleKey: 'hero_job_elec_role',     icon: <FaBolt /> },
    { flag: '🇧🇦', countryKey: 'hero_job_bosnia',   roleKey: 'hero_job_bosnia_role',   icon: <FaTshirt /> },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            {t.hero_title1}
            <span className="hero-title-accent">{t.hero_title2}</span>
          </h1>
          <p className="hero-subtitle">{t.hero_subtitle}</p>

          {/* Job Category Tags */}
          <div className="hero-jobs">
            {jobTags.map(tag => (
              <div className="hero-job-tag" key={tag.countryKey}>
                <span className="flag">{tag.flag}</span>
                <div className="hero-job-tag-content">
                  <span className="hero-job-tag-country">{t[tag.countryKey]}</span>
                  <span className="hero-job-tag-role">{t[tag.roleKey]}</span>
                </div>
              </div>
            ))}
          </div>

          <a href="#vacancies" className="btn-primary" id="view-vacancies-btn">
            {t.hero_cta} <FaArrowRight size={13} />
          </a>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <div className="hero-bg-circle" />
          <img
            src="/hero_woman.jpg"
            alt="OG Agency — Your Global Career Partner"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
