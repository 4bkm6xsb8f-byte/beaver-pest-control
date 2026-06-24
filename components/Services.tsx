import Image from "next/image";

/* "OUR COMMERCIAL SERVICES" — dark charcoal section matching flyer */

const SERVICES_LEFT = [
  "General Pest Control",
  "Rodent Prevention & Monitoring",
  "Ant, Spider & Insect Control",
  "Integrated Pest Management (IPM)",
];

const SERVICES_RIGHT = [
  "Discreet & Unmarked Service Vehicles",
  "Documentation & Reporting",
  "Customized Service Plans",
  "Emergency Pest Response",
];

export default function Services() {
  return (
    <section id="services" className="relative bg-brand-charcoal py-16 md:py-20 overflow-hidden">

      {/* Faded logo watermark — right side, matching flyer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] select-none"
        style={{ opacity: 0.07 }}
      >
        <Image
          src="/logo.png"
          alt=""
          width={480}
          height={480}
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left heading — matches flyer layout */}
          <div className="md:col-span-2">
            <p
              className="font-display font-black uppercase text-white leading-none"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", letterSpacing: "-0.01em" }}
            >
              Our Commercial
            </p>
            <p
              className="font-display font-black uppercase text-brand-lime leading-none mt-0.5"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", letterSpacing: "-0.01em" }}
            >
              Services
            </p>
            {/* Lime underline matching flyer */}
            <div className="mt-3 h-[3px] w-28 bg-brand-lime" />
          </div>

          {/* Right: two-column service list */}
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-0 pt-1">
            <ul className="space-y-4">
              {SERVICES_LEFT.map((s) => <ServiceRow key={s} label={s} />)}
            </ul>
            <ul className="space-y-4 mt-4 sm:mt-0">
              {SERVICES_RIGHT.map((s) => <ServiceRow key={s} label={s} />)}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function ServiceRow({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-3">
      {/* Lime-filled circle checkmark — matches flyer exactly */}
      <span
        className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-brand-lime flex items-center justify-center"
        aria-hidden="true"
      >
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l2.5 2.5L9 1" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="font-sans text-white text-[0.95rem] leading-snug">{label}</span>
    </li>
  );
}
