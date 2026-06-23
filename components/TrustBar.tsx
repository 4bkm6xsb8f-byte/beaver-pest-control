const STATS = [
  { value: "500+", label: "Homes Protected" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "Same Day", label: "Service Available" },
  { value: "5★", label: "Customer Rating" },
];

export default function TrustBar() {
  return (
    <section id="trust" className="bg-white border-b border-stone/10">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone/10">
          {STATS.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col items-center text-center md:px-8"
            >
              <span className="font-display font-bold text-deep text-2xl md:text-3xl leading-none">
                {stat.value}
              </span>
              <span className="mt-1 text-mist text-sm font-sans">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
