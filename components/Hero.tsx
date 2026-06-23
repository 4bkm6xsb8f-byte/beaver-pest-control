const PHONE = "(555) 843-2837";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-deep flex items-center overflow-hidden">
      {/* Signature background element: ghost text creating typographic depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-end pr-8 overflow-hidden select-none"
      >
        <span
          className="font-display font-bold text-white leading-none"
          style={{
            fontSize: "clamp(8rem, 22vw, 22rem)",
            opacity: 0.04,
            letterSpacing: "-0.02em",
            userSelect: "none",
          }}
        >
          GONE.
        </span>
      </div>

      {/* Subtle radial green glow from bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-2/3 h-2/3"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, #1B5E2020 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-honeycomb/30 bg-honeycomb/10 px-4 py-1.5 text-sm font-medium text-honeycomb">
            <span className="h-1.5 w-1.5 rounded-full bg-honeycomb animate-pulse" />
            Licensed &amp; Insured · Locally Owned
          </p>

          {/* Headline */}
          <h1 className="font-display text-white leading-[1.1] text-balance">
            <span
              className="block font-bold"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              You Shouldn&apos;t Have&nbsp;to
            </span>
            <span
              className="block font-bold text-honeycomb"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Share Your Home.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl font-sans">
            Beaver Pest Control delivers fast, guaranteed elimination of pests
            from your home or business — with treatments that protect your
            family and stay tough on whatever came back.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-honeycomb hover:bg-yellow-400 text-deep font-semibold px-8 py-4 rounded-full text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-honeycomb focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
            >
              Get a Free Inspection
              <ArrowRight />
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-full text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
            >
              <PhoneIcon />
              {PHONE}
            </a>
          </div>

          {/* Social proof pill */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#4ade80", "#86efac", "#bbf7d0", "#6ee7b7", "#34d399"].map(
                (color, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-deep flex items-center justify-center text-xs font-bold text-deep"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  >
                    {["JM", "SR", "KL", "AP", "TW"][i]}
                  </div>
                )
              )}
            </div>
            <p className="text-sm text-white/60">
              <span className="text-white font-semibold">500+ homeowners</span>{" "}
              trust us to keep their homes pest-free
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        aria-label="Scroll to content"
      >
        <span className="text-xs tracking-widest uppercase font-sans">
          Scroll
        </span>
        <ChevronDown />
      </a>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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

function ChevronDown() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
