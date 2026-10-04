import { useEffect, useRef, useState } from "react";

/* ─── Icons ─────────────────────────────────────────────── */
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconVerify = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);

/* Interview & Matching — UserCheck: person with approval checkmark */
const IconHandshake = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="8" y1="8" x2="16" y2="8" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="16" x2="12" y2="16" />
  </svg>
);

/* Pre-Departure — paper-plane / send icon */
const IconPlane = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* Travel & Arrival — map-pin: arrived at destination (Japan) */
const IconArrival = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ─── Step data ─────────────────────────────────────────── */
const STEPS = [
  {
    num: "01",
    label: "START",
    Icon: IconUser,
    title: "Registration & Counselling",
    desc: "Register with OG Agency and receive guidance about suitable employment opportunities.",
  },
  {
    num: "02",
    label: null,
    Icon: IconVerify,
    title: "Qualification Verification",
    desc: "We verify your Japanese language qualification, skills, documents and eligibility for the selected opportunity.",
  },
  {
    num: "03",
    label: null,
    Icon: IconHandshake,
    title: "Interview & Matching",
    desc: "Meet suitable employers and get matched with available job opportunities.",
  },
  {
    num: "04",
    label: null,
    Icon: IconDoc,
    title: "Documentation & COE Application",
    desc: "We assist with the required documents and support the Certificate of Eligibility (COE) application process.",
  },
  {
    num: "05",
    label: null,
    Icon: IconPlane,
    title: "Pre-Departure Support",
    desc: "Receive guidance and final preparation before travelling to Japan.",
  },
  {
    num: "06",
    label: "JAPAN",
    Icon: IconArrival,
    title: "Travel & Arrival Support",
    desc: "Support with your journey, airport arrival and initial settlement in Japan.",
  },
];

/* ─── Animated SVG connector (desktop) ──────────────────── */
function ConnectorArrow() {
  return (
    <div className="pj-connector" aria-hidden="true">
      <svg viewBox="0 0 40 20" width="40" height="20" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10 Q20 2 36 10" stroke="var(--primary)" strokeWidth="1.6"
          strokeDasharray="3 2" fill="none" opacity="0.55" />
        <polygon points="34,6 40,10 34,14" fill="var(--primary)" opacity="0.7" />
      </svg>
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────── */
export default function Process() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="process pj-section" id="process" ref={sectionRef}>
      <div className="container">

        {/* ── Header ── */}
        <div className="pj-header">
          <div className="section-label">Our Process</div>
          <h2 className="section-title">From Sri Lanka to Japan</h2>
          <p className="section-subtitle pj-subtitle">
            We guide qualified candidates through every step of their employment
            journey, from registration and employer matching to departure and arrival.
          </p>
        </div>

        {/* ── Journey track (desktop dashed line) ── */}
        <div className="pj-track-wrap" aria-hidden="true">
          <div className="pj-track-line" />
        </div>

        {/* ── Steps row ── */}
        <div className={"pj-steps" + (visible ? " pj-steps--visible" : "")}>
          {STEPS.map((step, i) => (
            <div className="pj-step-wrapper" key={step.num}>
              {/* Card */}
              <div
                className={"pj-card" + (step.num === "01" ? " pj-card--start" : "") + (step.num === "06" ? " pj-card--end" : "")}
                style={{ "--delay": i * 0.08 + "s" }}
              >
                {/* Step label chip */}
                {step.label && (
                  <div className={"pj-chip pj-chip--" + (step.num === "01" ? "start" : "end")}>
                    {step.label}
                  </div>
                )}

                {/* Icon circle */}
                <div className="pj-icon-ring">
                  <div className="pj-icon-inner">
                    <step.Icon />
                  </div>
                </div>

                {/* Step number */}
                <div className="pj-step-num">STEP {step.num}</div>

                {/* Title — fixed-height area so descs all start at same Y */}
                <div className="pj-step-title-wrap">
                  <div className="pj-step-title">{step.title}</div>
                </div>

                {/* Description — fills remaining card space */}
                <div className="pj-step-desc-wrap">
                  <div className="pj-step-desc">{step.desc}</div>
                </div>
              </div>

              {/* Arrow connector between cards (not after last) */}
              {i < STEPS.length - 1 && <ConnectorArrow />}
            </div>
          ))}
        </div>

        {/* ── Digital Art Banner ── */}
        <div className="pj-art-wrap">
          <img
            src="/process_journey.jpg"
            alt="Sri Lankan professional employment journey to Japan — registration, qualification verification, employer matching, documentation and arrival"
            className="pj-art-img"
            loading="lazy"
          />
          <div className="pj-art-overlay">
            <div className="pj-art-pill">
              <span>🇱🇰</span>
              <span className="pj-art-pill-arrow">———✈———</span>
              <span>🇯🇵</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
