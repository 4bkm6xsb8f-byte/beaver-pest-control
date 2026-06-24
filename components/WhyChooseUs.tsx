/* "WHY BUSINESSES CHOOSE US" — light warm-gray background matching the flyer */

const REASONS = [
  {
    icon: ShieldRepIcon,
    title: "Protect Your Reputation",
    desc: "Keep your facility pest-free and your business image strong.",
  },
  {
    icon: CustomIcon,
    title: "Customized Solutions",
    desc: "Tailored programs for your building, industry, and pest pressure.",
  },
  {
    icon: CalIcon,
    title: "Scheduled & Dependable",
    desc: "Consistent service that fits your schedule and operations.",
  },
  {
    icon: LicIcon,
    title: "Licensed Professionals",
    desc: "Trained, insured, and committed to the highest standards.",
  },
  {
    icon: RiskIcon,
    title: "Minimize Risk & Downtime",
    desc: "Prevent pest issues before they start and avoid costly disruptions.",
  },
];

export default function WhyChooseUs() {
  return (
    /* Only section with a light background — matches flyer exactly */
    <section id="why-us" className="bg-brand-light py-14">
      {/* Decorative divider lines flanking the title — matches flyer */}
      <div className="flex items-center justify-center gap-4 mb-10 px-6">
        <div className="flex-1 h-px bg-brand-lime-dim max-w-xs hidden sm:block" />
        <h2
          className="font-display font-black text-brand-black text-center whitespace-nowrap tracking-wider uppercase"
          style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)" }}
        >
          Why Businesses{" "}
          <span className="text-brand-black">Choose Us</span>
        </h2>
        <div className="flex-1 h-px bg-brand-lime-dim max-w-xs hidden sm:block" />
      </div>

      {/* 5-column grid */}
      <div className="mx-auto max-w-7xl px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {REASONS.map((r, i) => (
            <li key={r.title} className="flex flex-col items-center text-center gap-3">
              {/* Icon — dark on light background, matching flyer */}
              <div className="h-14 w-14 flex items-center justify-center">
                <r.icon />
              </div>
              <h3
                className="font-display font-bold uppercase text-brand-black leading-tight tracking-wide"
                style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
              >
                {r.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-sans">{r.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Icons in dark color for light background ── */

function ShieldRepIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 120" fill="none" aria-hidden="true">
      <path d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z"
        stroke="#243318" strokeWidth="7" fill="none"/>
      <path d="M33 55l13 13 23-25" stroke="#6DC02F" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CustomIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#243318" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M9 3v18M3 9h6M3 15h6M15 9h6M15 15h6"/>
    </svg>
  );
}

function CalIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#243318" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <rect x="7" y="14" width="3" height="3" rx="0.5" fill="#6DC02F" stroke="none"/>
      <rect x="11" y="14" width="3" height="3" rx="0.5" fill="#6DC02F" stroke="none"/>
    </svg>
  );
}

function LicIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#243318" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="5"/>
      <path d="M3 21v-1a9 9 0 0 1 18 0v1"/>
      <circle cx="12" cy="8" r="2" fill="#6DC02F" stroke="none"/>
    </svg>
  );
}

function RiskIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#243318" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  );
}
