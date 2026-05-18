/*
 * MovePrecision Trust Bar
 * Design: "Trusted by" company name logos in muted style below hero
 */
export default function TrustBar() {
  const companies = [
    "Elite Movers ATL",
    "Pacific Coast Moving",
    "Summit Moving Group",
    "Lone Star Relocation",
    "Williams Moving & Storage",
    "Blue Ridge Movers",
    "Metro Relocation Co.",
    "Apex Moving Solutions",
  ];

  return (
    <div
      className="py-8 relative overflow-hidden"
      style={{
        background: "rgba(17, 24, 39, 0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: "#334155" }}
        >
          Trusted by 500+ moving companies across North America
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {companies.map((name, i) => (
            <span
              key={i}
              className="text-sm font-semibold"
              style={{ color: "#334155", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
