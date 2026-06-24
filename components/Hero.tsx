import Image from "next/image";

const PHONE = "(555) 843-2837";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-black flex items-center overflow-hidden">

      {/* ── Right panel: building photo ── */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[52%]">
        <Image
          src="/building.jpg"
          alt="Modern commercial office building"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient from left: dark → transparent to blend with text panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent md:via-brand-black/50" />
        {/* Subtle dark vignette at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-transparent to-brand-black/40" />

        {/* "COMMERCIAL PEST CONTROL YOU CAN COUNT ON" badge — top right corner */}
        <div className="absolute top-24 right-4 md:right-6 max-w-[140px] bg-brand-black/80 border border-brand-border p-3 text-right">
          <div className="flex justify-end mb-1.5">
            <BuildingIcon />
          </div>
          <p className="font-display font-black text-white text-xs leading-tight uppercase tracking-wide">
            Commercial<br />Pest Control
          </p>
          <p className="font-display font-bold text-brand-lime text-[10px] leading-tight uppercase tracking-wider mt-0.5">
            You Can Count On
          </p>
        </div>
      </div>

      {/* ── Left panel: text content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-36 md:pb-24 w-full">
        <div className="max-w-[600px]">

          {/* Small shield-check eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <ShieldCheckIcon />
          </div>

          {/* Main headline — matches flyer exactly */}
          <h1 className="leading-[0.92] tracking-tight">
            <span
              className="block font-display font-black uppercase text-white"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)", letterSpacing: "-0.01em" }}
            >
              Protecting Your Building.
            </span>
            <span
              className="block font-display font-black uppercase text-brand-lime mt-1"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)", letterSpacing: "-0.01em" }}
            >
              Protecting Your Business.
            </span>
          </h1>

          {/* Body text — matches flyer paragraph */}
          <p className="mt-6 text-white font-sans text-base leading-relaxed max-w-[520px]">
            Beaver Pest Defense provides reliable, discreet, and effective pest management
            solutions for commercial and corporate properties.
          </p>
          <p className="mt-2 text-brand-lime font-sans text-base leading-relaxed max-w-[520px] font-medium">
            We help you maintain a clean, safe, and professional environment—year-round.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-lime-light text-brand-black font-display font-black uppercase tracking-widest px-7 py-3.5 text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
            >
              Get a Free Inspection
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-lime text-brand-silver hover:text-white font-sans font-medium px-7 py-3.5 text-sm transition-colors"
            >
              <PhoneIconSm /> {PHONE}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 120" fill="none" aria-hidden="true">
      <path d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z" fill="#6DC02F"/>
      <path d="M33 55l13 13 23-25" stroke="#0A0A0A" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6DC02F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="2" width="18" height="20" rx="1"/>
      <path d="M3 8h18M3 14h18M9 2v20M15 2v20"/>
    </svg>
  );
}

function PhoneIconSm() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );
}
