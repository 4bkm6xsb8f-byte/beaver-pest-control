const REASONS = [
  {
    title: "Locally Owned & Operated",
    desc: "We live and work in this community. When you call, you're talking to a neighbor — not a national call center.",
    icon: MapPinIcon,
  },
  {
    title: "Licensed & Fully Insured",
    desc: "Every technician is state-certified. Your home, your belongings, and your family are always covered.",
    icon: BadgeCheckIcon,
  },
  {
    title: "Eco-Conscious Treatments",
    desc: "We use targeted treatments that eliminate pests while minimizing risk to children, pets, and beneficial insects.",
    icon: LeafIcon,
  },
  {
    title: "Transparent Pricing",
    desc: "You'll know exactly what a treatment costs before we start. No surprise charges, no pressure upsells.",
    icon: ReceiptIcon,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-honeycomb text-sm font-semibold tracking-widest uppercase font-sans mb-3">
              Why Choose Us
            </p>
            <h2
              className="font-display font-bold text-deep text-balance leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Pests Don&apos;t Get a Second Chance.
            </h2>
            <p className="mt-4 text-mist text-lg font-sans leading-relaxed">
              Other companies treat the symptom. We eliminate the source — and
              seal the entry points so the problem doesn&apos;t come back next season.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-canopy font-semibold font-sans hover:text-deep transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-canopy rounded group"
            >
              Schedule an inspection
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </a>
          </div>

          {/* Right: reasons grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((reason) => (
              <li
                key={reason.title}
                className="flex flex-col gap-3 rounded-2xl bg-linen p-6 border border-stone/8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-deep/5">
                  <reason.icon />
                </div>
                <h3 className="font-display font-semibold text-deep text-base leading-snug">
                  {reason.title}
                </h3>
                <p className="text-mist text-sm leading-relaxed font-sans">
                  {reason.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C2512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C2512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12l2 2 4-4" />
      <path d="M3.34 7A10 10 0 0 1 21 12c0 5.52-4.48 10-10 10a9.99 9.99 0 0 1-9-5.6" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C2512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 22s4-2 8-8c3-4 4-9 4-13 0 0-4 2-8 8-3 4-4 9-4 13z" />
      <path d="M22 2c-4 0-8 1-11 4" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C2512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}
