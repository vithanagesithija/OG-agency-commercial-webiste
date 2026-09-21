import { FaArrowRight, FaShieldAlt, FaUsers, FaGlobe } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLang();

  const badges = [
    { icon: <FaShieldAlt size={16} />, key: 'about_badge1' },
    { icon: <FaUsers size={16} />,     key: 'about_badge2' },
    { icon: <FaGlobe size={16} />,     key: 'about_badge3' },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          {/* Left: Image */}
          <div className="about-image-wrapper">
            <img src="/about_team.jpg" alt="OG Agency team of workers" loading="lazy" />
            <div className="about-image-badge">
              <p className="about-image-badge-text">{t.about_image_text}</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <h2 className="about-title">{t.about_title}</h2>
            <p className="about-desc">{t.about_desc}</p>

            <div className="about-badges">
              {badges.map(badge => (
                <div className="about-badge" key={badge.key}>
                  <div className="about-badge-icon">{badge.icon}</div>
                  <span>{t[badge.key]}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-secondary" id="learn-more-btn">
              {t.about_learn} <FaArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
