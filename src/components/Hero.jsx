import { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

// Hero panel images
import japanLeft from '../assets/hero_japan_left.jpg';
import japanRight from '../assets/hero_japan_right.jpg';
import romaniaLeft from '../assets/hero_romania_left.jpg';
import romaniaRight from '../assets/hero_romania_right.jpg';
import bosniaLeft from '../assets/hero_bosnia_left.jpg';
import bosniaRight from '../assets/hero_bosnia_right.jpg';
import riderLeft from '../assets/hero_rider_left.jpg';
import busLeft from '../assets/hero_bus_left.jpg';
import busRight from '../assets/hero_bus_right.jpg';
import elecLeft from '../assets/hero_elec_left.jpg';
import elecRight from '../assets/hero_elec_right.jpg';

const slides = [
  {
    id: 'japan',
    flag: '🇯🇵',
    country: 'Japan',
    tagline: 'Study & Work Abroad',
    title: 'Build Your Future',
    titleAccent: 'in Japan',
    subtitle: 'Unlock world-class education and career opportunities in Japan. Student visas, job visas, and full placement support — we handle it all.',
    features: ['University & College Admissions', 'Student & Job Visa Assistance', 'Part-time Work Opportunities'],
    leftImage: japanLeft,
    rightImage: japanRight,
    leftLabel: 'Campus Life',
    rightLabel: 'Tokyo',
    accentColor: '#e94560',
    bgColor: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f2460 100%)',
  },
  {
    id: 'romania',
    flag: '🇷🇴',
    country: 'Romania',
    tagline: 'Garment Industry Jobs',
    title: 'Work in the Heart',
    titleAccent: 'of Europe',
    subtitle: "Join Romania's thriving garment industry. Competitive salaries, provided accommodation, and a safe working environment await you.",
    features: ['Sewing Machine Operators', 'Factory Helpers', 'Good Salary + Accommodation'],
    leftImage: romaniaLeft,
    rightImage: romaniaRight,
    leftLabel: 'Factory Work',
    rightLabel: 'Romania',
    accentColor: '#ffcc02',
    bgColor: 'linear-gradient(135deg, #0f0a1e 0%, #1a0a2e 50%, #0a1628 100%)',
  },
  {
    id: 'bosnia',
    flag: '🇧🇦',
    country: 'Bosnia',
    tagline: 'Garment Industry Jobs',
    title: 'Opportunities Await',
    titleAccent: 'in Bosnia',
    subtitle: "Start a stable career in Bosnia's growing garment sector. We provide complete visa support, job placement, and relocation assistance.",
    features: ['Garment Factory Workers', 'Stable Employment Contracts', 'Visa & Relocation Support'],
    leftImage: bosniaLeft,
    rightImage: bosniaRight,
    leftLabel: 'Factory Work',
    rightLabel: 'Bosnia',
    accentColor: '#fecb00',
    bgColor: 'linear-gradient(135deg, #061412 0%, #0a2018 50%, #06101e 100%)',
  },
  {
    id: 'rider',
    flag: '🛵',
    country: 'Sri Lanka',
    tagline: 'Delivery & Logistics',
    title: 'Ride Your Way',
    titleAccent: 'to Success',
    subtitle: 'Join the Pick Me platform as a delivery rider. Flexible hours, weekly earnings, and full on-boarding support provided by OG Agency.',
    features: ['Flexible Working Hours', 'Weekly Salary Payments', 'Full Onboarding Support'],
    leftImage: riderLeft,
    rightImage: riderLeft,
    leftLabel: 'Pick Me Rider',
    rightLabel: 'Deliveries',
    accentColor: '#ff6b00',
    bgColor: 'linear-gradient(135deg, #120800 0%, #1a0e00 50%, #0f1200 100%)',
  },
  {
    id: 'bus',
    flag: '🚌',
    country: 'Sri Lanka',
    tagline: 'Transport Sector',
    title: 'Drive Your Career',
    titleAccent: 'Forward',
    subtitle: "Experienced bus drivers needed across Sri Lanka's transport network. Competitive pay, pension benefits, and full placement support.",
    features: ['Licensed Driver Positions', 'Competitive Pay & Benefits', 'Immediate Placements Available'],
    leftImage: busLeft,
    rightImage: busRight,
    leftLabel: 'Bus Driving',
    rightLabel: 'Transport',
    accentColor: '#ffd700',
    bgColor: 'linear-gradient(135deg, #00091a 0%, #001a3d 50%, #001000 100%)',
  },
  {
    id: 'elec',
    flag: '⚡',
    country: 'Sri Lanka',
    tagline: 'Technical Jobs',
    title: 'Power Up',
    titleAccent: 'Your Career',
    subtitle: 'Skilled electricians in demand across residential, commercial, and industrial sectors. Apply now for immediate job placements.',
    features: ['Residential & Commercial Projects', 'Competitive Hourly Rates', 'Long-term Contracts Available'],
    leftImage: elecLeft,
    rightImage: elecRight,
    leftLabel: 'Electrician',
    rightLabel: 'Technical',
    accentColor: '#ffe500',
    bgColor: 'linear-gradient(135deg, #0d0a00 0%, #1a1200 50%, #0d1a00 100%)',
  },
];

export default function Hero() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const timerRef = useRef(null);

  const goTo = (index, dir = 'next') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 500);
  };

  const next = () => goTo((current + 1) % slides.length, 'next');
  const prev = () => goTo((current - 1 + slides.length) % slides.length, 'prev');

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="hero-slideshow" id="home" style={{ background: slide.bgColor }}>

      {/* ── Left Image Panel ── */}
      <div className={`hs-panel hs-panel--left ${animating ? `hs-panel--exit-${direction}` : 'hs-panel--enter'}`}>
        <div className="hs-panel-inner hs-panel-inner--img">
          <img src={slide.leftImage} alt={slide.leftLabel} className="hs-panel-img" />
          <div className="hs-panel-img-overlay" style={{ background: `linear-gradient(to top, ${slide.accentColor}55 0%, transparent 60%)` }} />
          <div className="hs-panel-label">{slide.leftLabel}</div>
          <div className="hs-panel-shimmer" />
        </div>
        <div className="hs-panel-shadow hs-panel-shadow--right" />
      </div>

      {/* ── Center Content ── */}
      <div className="hs-center">
        <div className={`hs-content ${animating ? 'hs-content--hidden' : 'hs-content--visible'}`}>
          <div className="hs-badge">
            <span className="hs-badge-flag">{slide.flag}</span>
            <span className="hs-badge-text">{slide.tagline}</span>
          </div>

          <h1 className="hs-title">
            {slide.title}
            <span className="hs-title-accent" style={{ color: slide.accentColor }}>
              {slide.titleAccent}
            </span>
          </h1>

          <p className="hs-subtitle">{slide.subtitle}</p>

          <ul className="hs-features">
            {slide.features.map((f, i) => (
              <li key={i} className="hs-feature-item">
                <span className="hs-feature-dot" style={{ background: slide.accentColor }} />
                {f}
              </li>
            ))}
          </ul>

          <div className="hs-actions">
            <a href="#vacancies" className="hs-btn-primary" style={{ background: slide.accentColor }} id={`hero-cta-${slide.id}`}>
              {t.hero_cta} <FaArrowRight size={13} />
            </a>
          </div>

          {/* Dots */}
          <div className="hs-dots">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`hs-dot ${i === current ? 'hs-dot--active' : ''}`}
                style={i === current ? { background: slide.accentColor } : {}}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                aria-label={`Go to slide ${i + 1}`}
                id={`hero-dot-${s.id}`}
              />
            ))}
          </div>
        </div>

        {/* Arrow controls */}
        <button className="hs-arrow hs-arrow--left" onClick={prev} id="hero-prev-btn" aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <button className="hs-arrow hs-arrow--right" onClick={next} id="hero-next-btn" aria-label="Next slide">
          <FaChevronRight />
        </button>
      </div>

      {/* ── Right Image Panel ── */}
      <div className={`hs-panel hs-panel--right ${animating ? `hs-panel--exit-${direction}` : 'hs-panel--enter'}`}>
        <div className="hs-panel-inner hs-panel-inner--img">
          <img src={slide.rightImage} alt={slide.rightLabel} className="hs-panel-img" />
          <div className="hs-panel-img-overlay" style={{ background: `linear-gradient(to top, ${slide.accentColor}55 0%, transparent 60%)` }} />
          <div className="hs-panel-label">{slide.rightLabel}</div>
          <div className="hs-panel-shimmer" />
        </div>
        <div className="hs-panel-shadow hs-panel-shadow--left" />
      </div>

      {/* Slide counter */}
      <div className="hs-counter">
        <span className="hs-counter-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="hs-counter-sep" />
        <span className="hs-counter-total">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
