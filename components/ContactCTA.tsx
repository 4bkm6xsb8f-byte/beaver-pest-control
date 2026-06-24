"use client";

const PHONE = "(555) 843-2837";

export default function ContactCTA() {
  return (
    <section id="contact">
      {/* ── True split panel: dark left + lime green right — matches flyer ── */}
      <div className="grid md:grid-cols-2">

        {/* LEFT PANEL — dark background */}
        <div className="bg-brand-charcoal px-8 md:px-12 py-14 md:py-16 flex flex-col justify-center">
          {/* Large shield checkmark */}
          <div className="mb-6">
            <ShieldLarge />
          </div>

          <h2
            className="font-display font-black uppercase text-white leading-tight"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", letterSpacing: "-0.01em" }}
          >
            Pest Control That Works{" "}
            <span className="text-brand-lime">
              So You Can Focus on What Matters.
            </span>
          </h2>

          <p className="mt-5 text-brand-silver font-sans text-[0.9rem] leading-relaxed max-w-md">
            We partner with your business to deliver long-term protection,
            compliance support, and peace of mind.
          </p>
        </div>

        {/* RIGHT PANEL — lime green background — matches flyer */}
        <div className="bg-brand-lime px-8 md:px-12 py-14 md:py-16 flex flex-col justify-center">
          <h2
            className="font-display font-black uppercase text-brand-black leading-tight"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}
          >
            Let&apos;s Protect Your Business Together.
          </h2>
          <p
            className="font-display font-bold uppercase text-brand-black mt-1 leading-tight"
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", letterSpacing: "0.02em" }}
          >
            Contact Your Local Pest Control Expert Today.
          </p>

          {/* Contact field — matches flyer's "YOUR LOCAL CONTACT:" style */}
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 font-sans">
            <label
              htmlFor="local-contact"
              className="block font-display font-black uppercase text-brand-black text-sm tracking-widest mb-2"
            >
              Your Local Contact:
            </label>

            <div className="space-y-3">
              <input
                id="local-contact"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                className="w-full bg-transparent border-b-2 border-brand-black text-brand-black placeholder:text-brand-black/40 font-sans text-base py-2 focus:outline-none focus:border-brand-charcoal"
              />
              <input
                type="tel"
                placeholder="Phone number"
                autoComplete="tel"
                className="w-full bg-transparent border-b-2 border-brand-black text-brand-black placeholder:text-brand-black/40 font-sans text-base py-2 focus:outline-none focus:border-brand-charcoal"
              />
              <input
                type="text"
                placeholder="Company / property"
                autoComplete="organization"
                className="w-full bg-transparent border-b-2 border-brand-black text-brand-black placeholder:text-brand-black/40 font-sans text-base py-2 focus:outline-none focus:border-brand-charcoal"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-brand-black hover:bg-brand-charcoal text-white font-display font-black uppercase tracking-widest py-3.5 text-sm transition-colors"
            >
              Contact an Expert →
            </button>

            {/* Phone option */}
            <p className="mt-3 text-center text-brand-black/70 text-sm font-sans">
              Or call us directly:{" "}
              <a href={`tel:${PHONE.replace(/\D/g, "")}`}
                 className="font-semibold text-brand-black hover:underline">
                {PHONE}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ShieldLarge() {
  return (
    <svg width="56" height="56" viewBox="0 0 100 120" fill="none" aria-hidden="true">
      <path d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z" fill="#6DC02F"/>
      <path d="M33 55l13 13 23-25" stroke="#0A0A0A" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
