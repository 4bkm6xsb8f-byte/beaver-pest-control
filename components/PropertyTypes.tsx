/* "SERVING A WIDE RANGE OF COMMERCIAL PROPERTIES" — olive green bg matching flyer */

const PROPERTIES = [
  { label: "Office\nBuildings",                icon: OfficeIcon },
  { label: "Retail\nSpaces",                   icon: RetailIcon },
  { label: "Warehouses &\nDistribution Centers", icon: WarehouseIcon },
  { label: "Medical &\nDental Facilities",      icon: MedicalIcon },
  { label: "Restaurants &\nFood Service",       icon: RestaurantIcon },
  { label: "Property Management\n& Multi-Tenant Sites", icon: MultiTenantIcon },
];

export default function PropertyTypes() {
  return (
    <section id="properties" className="bg-brand-olive py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-10 items-center">

          {/* Left: heading */}
          <div className="md:col-span-1">
            <p
              className="font-display font-bold uppercase text-brand-lime leading-tight"
              style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", letterSpacing: "0.05em" }}
            >
              Serving a Wide Range<br />of Commercial
            </p>
            <h2
              className="font-display font-black uppercase text-white leading-tight mt-0.5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.01em" }}
            >
              Properties
            </h2>
          </div>

          {/* Right: 6 icons in a row */}
          <div className="md:col-span-3">
            <ul className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {PROPERTIES.map((p) => (
                <li key={p.label} className="flex flex-col items-center text-center gap-2">
                  <div className="h-14 w-14 flex items-center justify-center border border-white/20">
                    <p.icon />
                  </div>
                  <span
                    className="text-white font-display font-bold uppercase leading-tight whitespace-pre-line"
                    style={{ fontSize: "0.6rem", letterSpacing: "0.04em" }}
                  >
                    {p.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Property icons — white stroke on olive bg ── */

function OfficeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="2" width="18" height="20" rx="1"/>
      <path d="M3 7h18M3 12h18M3 17h18M9 2v20M15 2v20"/>
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 7l1 13h18l1-13H2z"/>
      <path d="M17 7V5a2 2 0 0 0-4 0v2M9 7V5a2 2 0 0 0-4 0v2"/>
      <rect x="9" y="14" width="6" height="8"/>
    </svg>
  );
}

function WarehouseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12L12 4l10 8v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8z"/>
      <rect x="8" y="14" width="8" height="8"/>
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M12 8v8M8 12h8"/>
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2v20M18 8c0-3-3-6-3-6s-3 3-3 6 3 4 3 4v8"/>
      <path d="M6 2v6a3 3 0 0 0 3 3v11"/>
    </svg>
  );
}

function MultiTenantIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="8" width="8" height="14"/>
      <rect x="14" y="4" width="8" height="18"/>
      <path d="M10 8V6a2 2 0 0 1 2-2h2"/>
    </svg>
  );
}
