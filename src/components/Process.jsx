const STEPS = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Registration & Counselling',
    desc: 'Register with OG Agency and receive guidance about suitable employment opportunities.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
    title: 'Qualification Verification',
    desc: 'We verify your Japanese language qualification, skills, documents and eligibility for the selected opportunity.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Interview & Matching',
    desc: 'Meet suitable employers and get matched with available job opportunities.',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Documentation & COE Application',
    desc: 'We assist with the required documents and support the Certificate of Eligibility (COE) application process.',
  },
  {
    num: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Pre-Departure Support',
    desc: 'Receive guidance and final preparation before travelling to Japan.',
  },
  {
    num: '06',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M21.82 7.42 12.16 2.07a.5.5 0 0 0-.49 0L2 7.42v9.17a.5.5 0 0 0 .25.43l9.64 5.36a.5.5 0 0 0 .49 0l9.64-5.36a.5.5 0 0 0 .25-.43V7.42z" />
        <path d="m2 7 10 5.5L22 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
    title: 'Travel & Arrival Support',
    desc: 'Support with your journey, airport arrival and initial settlement in Japan.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-label">Our Process</div>
        <h2 className="section-title">From Sri Lanka to Japan</h2>
        <p className="section-subtitle" style={{ marginTop: 6 }}>
          We guide qualified candidates through every step of their employment journey, from registration and employer matching to departure and arrival.
        </p>

        <div className="process-steps">
          {STEPS.map((step, i) => (
            <div className="process-step" key={i}>
              <div className="process-step-num" title={step.title}>
                {step.icon}
              </div>
              <div className="process-step-badge">STEP {step.num}</div>
              <div className="process-step-title">{step.title}</div>
              <div className="process-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
