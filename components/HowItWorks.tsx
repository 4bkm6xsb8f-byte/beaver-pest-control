const STEPS = [
  {
    step: "01",
    title: "Call or Book Online",
    desc: "Reach us by phone or request a free inspection — we'll schedule at a time that works for you, often same day.",
  },
  {
    step: "02",
    title: "Thorough Inspection",
    desc: "Your technician identifies exactly what you're dealing with, how pests are entering, and what conditions are attracting them.",
  },
  {
    step: "03",
    title: "Targeted Treatment",
    desc: "We treat the source, not just the surface — with methods that protect your family and pets while eliminating the infestation.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-deep py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background texture lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-honeycomb text-sm font-semibold tracking-widest uppercase font-sans mb-3">
            The Process
          </p>
          <h2
            className="font-display font-bold text-white text-balance leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Simple. Fast. Guaranteed.
          </h2>
        </div>

        {/* Steps */}
        <ol className="relative">
          {/* Connecting line on desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-[4.5rem] right-[4.5rem] h-px bg-white/10"
            style={{ top: "2.25rem" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {STEPS.map((step, i) => (
              <li key={step.step} className="flex flex-col">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-honeycomb bg-deep shrink-0"
                    aria-hidden="true"
                  >
                    <span className="font-display font-bold text-honeycomb text-sm">
                      {step.step}
                    </span>
                  </div>
                  {/* Mobile connector */}
                  {i < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="md:hidden flex-1 h-px bg-white/10"
                    />
                  )}
                </div>

                <h3 className="font-display font-semibold text-white text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-sans">
                  {step.desc}
                </p>
              </li>
            ))}
          </div>
        </ol>

        {/* Guarantee badge */}
        <div className="mt-16 inline-flex items-center gap-3 rounded-full border border-honeycomb/30 bg-honeycomb/10 px-6 py-3">
          <ShieldIcon />
          <p className="text-white text-sm font-sans">
            <span className="font-semibold text-honeycomb">
              Our guarantee:
            </span>{" "}
            if pests return within 30 days of treatment, we come back at no charge.
          </p>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E09000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
