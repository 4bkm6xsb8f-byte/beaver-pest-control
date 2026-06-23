const PHONE = "(555) 843-2837";
const YEAR = new Date().getFullYear();

const LINKS = [
  {
    heading: "Services",
    items: [
      "Ant Control",
      "Termite Treatment",
      "Rodent Removal",
      "Bed Bug Elimination",
      "Mosquito Control",
      "Wasp & Hornet Removal",
    ],
  },
  {
    heading: "Company",
    items: ["About Us", "How It Works", "Guarantees", "Service Area"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-deep text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-honeycomb font-display font-bold text-xl">
                Beaver
              </span>
              <span className="text-white font-display text-xl"> Pest Control</span>
            </div>
            <p className="text-sm leading-relaxed font-sans">
              Local pest control you can count on. Licensed, insured, and
              committed to keeping your home pest-free.
            </p>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="mt-5 inline-flex items-center gap-2 text-honeycomb hover:text-yellow-400 font-semibold font-sans text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-honeycomb rounded"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Link columns */}
          {LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase font-sans mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors font-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-honeycomb rounded"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Hours column */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase font-sans mb-4">
              Hours
            </h4>
            <ul className="space-y-1 text-sm font-sans">
              <li>Mon – Fri: 7am – 7pm</li>
              <li>Saturday: 8am – 5pm</li>
              <li>Sunday: Emergency only</li>
            </ul>
            <p className="mt-4 text-xs">
              Emergency service available 24/7 — call the main line.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
          <p>© {YEAR} Beaver Pest Control. All rights reserved.</p>
          <p>Licensed &amp; Insured · State Pest Control Certification #XXXXX</p>
        </div>
      </div>
    </footer>
  );
}
