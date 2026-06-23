"use client";

const PHONE = "(555) 843-2837";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-forest py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, #0C251240 0%, transparent 50%), radial-gradient(circle at 20% 80%, #E0900015 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: headline + options */}
          <div>
            <h2
              className="font-display font-bold text-white text-balance leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Ready to Reclaim Your Home?
            </h2>
            <p className="mt-4 text-white/70 text-lg font-sans leading-relaxed">
              Reach us by phone for same-day availability, or fill out the form
              and we&apos;ll follow up within 2 hours during business hours.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="group flex items-center gap-4 text-white hover:text-honeycomb transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-honeycomb rounded"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-honeycomb/20 transition-colors">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-sans uppercase tracking-wider">
                    Call Anytime
                  </p>
                  <p className="font-display font-semibold text-lg">{PHONE}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-sans uppercase tracking-wider">
                    Hours
                  </p>
                  <p className="font-sans text-sm">
                    Mon–Sat 7am–7pm · Emergency service available
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-sans uppercase tracking-wider">
                    Service Area
                  </p>
                  <p className="font-sans text-sm">
                    Serving the greater metro area and surrounding communities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="font-display font-semibold text-deep text-xl mb-6">
              Request a Free Inspection
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 font-sans"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-xs font-semibold text-stone uppercase tracking-wider mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="w-full rounded-lg border border-stone/20 px-4 py-3 text-stone text-sm focus:outline-none focus:ring-2 focus:ring-canopy focus:border-transparent transition"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-xs font-semibold text-stone uppercase tracking-wider mb-1.5"
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="w-full rounded-lg border border-stone/20 px-4 py-3 text-stone text-sm focus:outline-none focus:ring-2 focus:ring-canopy focus:border-transparent transition"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-stone uppercase tracking-wider mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="w-full rounded-lg border border-stone/20 px-4 py-3 text-stone text-sm focus:outline-none focus:ring-2 focus:ring-canopy focus:border-transparent transition"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="pest"
                  className="block text-xs font-semibold text-stone uppercase tracking-wider mb-1.5"
                >
                  What are you dealing with?
                </label>
                <select
                  id="pest"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-stone/20 px-4 py-3 text-stone text-sm focus:outline-none focus:ring-2 focus:ring-canopy focus:border-transparent transition bg-white"
                >
                  <option value="" disabled>
                    Select a pest...
                  </option>
                  <option>Ants</option>
                  <option>Termites</option>
                  <option>Rodents</option>
                  <option>Bed Bugs</option>
                  <option>Mosquitoes</option>
                  <option>Wasps / Hornets</option>
                  <option>Not sure / Multiple</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-stone uppercase tracking-wider mb-1.5"
                >
                  Additional Details{" "}
                  <span className="normal-case font-normal text-mist">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full rounded-lg border border-stone/20 px-4 py-3 text-stone text-sm focus:outline-none focus:ring-2 focus:ring-canopy focus:border-transparent transition resize-none"
                  placeholder="Where are you seeing them? Any other context..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-honeycomb hover:bg-yellow-400 text-deep font-semibold py-4 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-honeycomb focus-visible:ring-offset-2"
              >
                Request Free Inspection →
              </button>

              <p className="text-xs text-mist text-center">
                We&apos;ll call you within 2 business hours to confirm.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
