const PHONE = "(555) 843-2837";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-black flex items-center overflow-hidden">
      {/* Background: dark gradient suggesting depth, no photo needed on dark bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 65% 50%, #111111 0%, #0A0A0A 100%)",
        }}
      />

      {/* Diagonal lime accent line — right side */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-1 opacity-60"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #6DC02F 40%, #6DC02F 60%, transparent 100%)",
        }}
      />

      {/* Ghost shield watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 select-none"
        style={{ opacity: 0.04 }}
      >
        <ShieldWatermark size={600} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <ShieldBadgeSmall />
            <span className="font-display font-bold text-brand-lime tracking-widest uppercase text-sm">
              Commercial Pest Control You Can Count On
            </span>
          </div>

          {/* Headline — matches flyer "PROTECTING YOUR BUILDING. / PROTECTING YOUR BUSINESS." */}
          <h1 className="leading-[0.95]">
            <span
              className="block font-display font-black uppercase text-white tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Protecting Your Building.
            </span>
            <span
              className="block font-display font-black uppercase text-lime-gradient tracking-tight mt-1"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Protecting Your Business.
            </span>
          </h1>

          {/* Separator */}
          <hr className="brand-rule my-7 w-32" />

          {/* Subtext */}
          <p className="text-brand-silver text-lg leading-relaxed font-sans max-w-2xl">
            Beaver Pest Defense provides reliable, discreet, and effective pest
            management solutions for commercial and corporate properties. We help
            you maintain a clean, safe, and professional environment—year-round.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-lime-light text-brand-black font-display font-black uppercase tracking-wider px-8 py-4 text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              Get a Free Inspection
              <ArrowRight />
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-lime text-brand-silver hover:text-white font-sans font-medium px-8 py-4 text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              <PhoneIcon />
              {PHONE}
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            {[
              { icon: <ShieldCheck />, label: "Licensed & Insured" },
              { icon: <LeafIcon />, label: "Eco-Conscious Products" },
              { icon: <StarIcon />, label: "Local. Reliable. Professional." },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="text-brand-lime">{badge.icon}</span>
                <span className="text-brand-silver text-sm font-sans uppercase tracking-wide">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Icon helpers ── */

function ShieldWatermark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 120" fill="none">
      <path
        d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z"
        fill="#6DC02F"
      />
    </svg>
  );
}

function ShieldBadgeSmall() {
  return (
    <svg width="20" height="20" viewBox="0 0 100 120" fill="none" aria-hidden="true">
      <path
        d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z"
        fill="#6DC02F"
      />
      <path
        d="M36 55l10 10 20-22"
        stroke="#0A0A0A"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function ShieldCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 100 120" fill="none" aria-hidden="true">
      <path d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z" fill="currentColor" />
      <path d="M34 55l12 12 22-24" stroke="#0A0A0A" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 22s4-2 8-8c3-4 4-9 4-13 0 0-4 2-8 8-3 4-4 9-4 13z" />
      <path d="M22 2c-4 0-8 1-11 4" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
