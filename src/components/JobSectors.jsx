import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function JobSectors() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const SECTORS = [
    { id: "housing",      num: "01", nameKey: "sector_housing",      col: 0, row: 0, highlight: false },
    { id: "construction", num: "02", nameKey: "sector_construction",  col: 1, row: 0, highlight: false },
    { id: "agriculture",  num: "03", nameKey: "sector_agriculture",   col: 2, row: 0, highlight: false },
    { id: "auto",         num: "04", nameKey: "sector_auto",          col: 3, row: 0, highlight: true  },
    { id: "food",         num: "05", nameKey: "sector_food",          col: 0, row: 1, highlight: false },
    { id: "cleaning",     num: "06", nameKey: "sector_cleaning",      col: 1, row: 1, highlight: false },
    { id: "transport",    num: "07", nameKey: "sector_transport",     col: 2, row: 1, highlight: false },
    { id: "other",        num: "08", nameKey: "sector_other",         col: 3, row: 1, highlight: false },
  ];

  const row1 = SECTORS.slice(0, 4);
  const row2 = SECTORS.slice(4, 8);

  function renderRow(sectors, rowIndex) {
    return (
      <div className="js-row">
        {sectors.map((sector, i) => {
          const xPct = (sector.col / 3) * 100;
          const yPct = (sector.row / 1) * 100;
          return (
            <div className="js-cell" key={sector.id}>
              <a
                href="#vacancies"
                id={"sector-" + sector.id}
                className={"js-card" + (sector.highlight ? " js-card--featured" : "")}
                style={{ "--delay": (rowIndex * 4 + i) * 0.07 + "s" }}
                aria-label={"Explore " + t[sector.nameKey] + " jobs in Japan"}
              >
                <div className="js-illus-wrap">
                  <div
                    className="js-illus"
                    style={{
                      backgroundImage: "url(/job_sectors.jpg)",
                      backgroundSize: "400% 200%",
                      backgroundPosition: xPct + "% " + yPct + "%",
                    }}
                    role="img"
                    aria-label={t[sector.nameKey]}
                  />
                </div>
                <div className="js-body">
                  <div className="js-name">{t[sector.nameKey]}</div>
                  {sector.highlight && (
                    <div className="js-badge">{t.sector_key_badge}</div>
                  )}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section
      className={"js-section" + (visible ? " js-section--visible" : "")}
      id="sectors"
      ref={sectionRef}
    >
      {/* Subtle Japan atmospheric background */}
      <div className="js-bg-deco" aria-hidden="true">
        <svg viewBox="0 0 1200 300" fill="none" className="js-bg-svg" preserveAspectRatio="xMidYMid slice">
          <polygon points="600,60 480,240 720,240" fill="var(--primary)" opacity="0.032" />
          <polygon points="600,40 435,250 765,250" fill="var(--primary)" opacity="0.018" />
          <rect x="155" y="118" width="82" height="6" rx="3" fill="var(--primary)" opacity="0.038" />
          <rect x="163" y="124" width="66" height="4" rx="2" fill="var(--primary)" opacity="0.028" />
          <rect x="168" y="128" width="8" height="82" rx="2" fill="var(--primary)" opacity="0.038" />
          <rect x="222" y="128" width="8" height="82" rx="2" fill="var(--primary)" opacity="0.038" />
          <polygon points="1018,78 1008,222 1028,222" fill="var(--primary)" opacity="0.038" />
          <rect x="1013" y="130" width="20" height="3" rx="1" fill="var(--primary)" opacity="0.028" />
          <rect x="1013" y="162" width="20" height="3" rx="1" fill="var(--primary)" opacity="0.028" />
          {[78,132,308,370,848,902,1098,1142].map((cx, idx) => (
            <circle key={idx} cx={cx} cy={idx % 2 === 0 ? 48 : 68} r="5"
              fill="var(--primary)" opacity="0.038" />
          ))}
        </svg>
      </div>

      <div className="container">
        <div className="js-header">
          <div className="section-label">{t.sectors_label}</div>
          <h2 className="section-title">{t.sectors_title}</h2>
          <p className="section-subtitle js-subtitle">
            {t.sectors_subtitle}
          </p>
        </div>

        <div className="js-grid">
          {renderRow(row1, 0)}
          {renderRow(row2, 1)}
        </div>
      </div>
    </section>
  );
}
