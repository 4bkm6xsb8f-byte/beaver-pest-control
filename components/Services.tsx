const SERVICES = [
  {
    name: "Ants",
    icon: "🐜",
    desc: "Carpenter ants, fire ants, sugar ants. We eliminate the colony, not just what you see.",
  },
  {
    name: "Termites",
    icon: "🪵",
    desc: "Structural inspections and targeted treatment before they eat through your investment.",
  },
  {
    name: "Rodents",
    icon: "🐭",
    desc: "Mice, rats, and squirrels. Entry-point sealing plus bait management so they don't return.",
  },
  {
    name: "Bed Bugs",
    icon: "🛏",
    desc: "Heat treatment and chemical options for complete elimination — including eggs.",
  },
  {
    name: "Mosquitoes",
    icon: "🦟",
    desc: "Yard treatments and breeding-site reduction to take back your outdoor space all season.",
  },
  {
    name: "Wasps & Hornets",
    icon: "🐝",
    desc: "Nest removal and preventive treatment to keep your eaves and yard safe.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-linen py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="text-honeycomb text-sm font-semibold tracking-widest uppercase font-sans mb-3">
            What We Treat
          </p>
          <h2 className="font-display font-bold text-deep text-balance leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Every Pest. One Number to Call.
          </h2>
          <p className="mt-4 text-mist text-lg font-sans">
            Whether it&apos;s a single nest or a full infestation, our licensed
            technicians handle it — with treatments that keep working after we leave.
          </p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <li key={service.name}>
              <div className="group h-full bg-white rounded-2xl p-8 border border-stone/8 hover:border-honeycomb/40 hover:shadow-lg transition-all duration-300">
                <span
                  className="text-4xl mb-5 block"
                  role="img"
                  aria-label={service.name}
                >
                  {service.icon}
                </span>
                <h3 className="font-display font-semibold text-deep text-xl mb-2">
                  {service.name}
                </h3>
                <p className="text-mist text-sm leading-relaxed font-sans">
                  {service.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA nudge */}
        <p className="mt-10 text-center text-mist font-sans text-sm">
          Don&apos;t see your pest?{" "}
          <a
            href="#contact"
            className="text-canopy font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-canopy rounded"
          >
            Ask us — we handle it all.
          </a>
        </p>
      </div>
    </section>
  );
}
