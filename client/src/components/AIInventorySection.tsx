/*
 * MovePrecision AI Inventory Scan Section
 * Design: Full-width spotlight section, animated scan effect, feature highlights
 * This is the key differentiator — deserves premium visual treatment
 */
import { useEffect, useRef } from "react";
import { Scan, Zap, Clock, FileText, Smartphone, Brain } from "lucide-react";

const AI_SCAN_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663670658588/UwocpbVoQKb25UQszcDYCS/ai-inventory-scan-PhQdt34G6KSPK8CWeQocFQ.webp";

const aiFeatures = [
  {
    icon: <Smartphone size={18} />,
    title: "Scan with Any Phone",
    description: "No special hardware needed. Point your phone camera at any room and our AI does the rest.",
  },
  {
    icon: <Brain size={18} />,
    title: "Recognizes 2,000+ Items",
    description: "Trained on millions of household items — furniture, appliances, boxes, and specialty items.",
  },
  {
    icon: <Clock size={18} />,
    title: "Estimates in Under 3 Minutes",
    description: "What used to take 45 minutes now takes 3. Scan, review, and send the quote instantly.",
  },
  {
    icon: <FileText size={18} />,
    title: "Auto-Generates Inventory List",
    description: "Every item catalogued with cubic footage, weight estimates, and special handling flags.",
  },
];

export default function AIInventorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai-inventory"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0E1A 0%, #0D1525 50%, #0A0E1A 100%)",
      }}
    >
      {/* Teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Gold glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "400px",
          height: "600px",
          background: "radial-gradient(ellipse at left, rgba(232,160,32,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: "rgba(34, 211, 238, 0.1)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              color: "#22D3EE",
            }}
          >
            <Zap size={12} className="fill-current" />
            Industry-First Technology
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
          >
            AI Inventory Scan —{" "}
            <span className="text-gold-gradient">No Competitor Has This</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
            Point. Scan. Quote. Our AI camera technology identifies every item in a room, calculates cubic footage, and generates a complete inventory list in under 3 minutes.
          </p>
        </div>

        {/* Main Content: Image + Features */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* AI Scan Image */}
          <div className="flex-1 reveal">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(34, 211, 238, 0.2)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(34,211,238,0.1)",
              }}
            >
              <img
                src={AI_SCAN_URL}
                alt="AI Inventory Scan in action"
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Scan line overlay animation */}
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ borderRadius: "inherit" }}
              >
                <div
                  ref={scanLineRef}
                  className="absolute left-0 right-0 h-0.5 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.8) 50%, transparent 100%)",
                    boxShadow: "0 0 20px rgba(34,211,238,0.6)",
                    animation: "scanLine 3s linear infinite",
                    top: 0,
                  }}
                />
              </div>
            </div>

            {/* Stat callout below image */}
            <div
              className="mt-4 flex items-center justify-center gap-8 p-4 rounded-xl"
              style={{ background: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="text-center">
                <div className="text-2xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#E8A020" }}>3 min</div>
                <div className="text-xs" style={{ color: "#64748B" }}>vs 45 min manual</div>
              </div>
              <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="text-center">
                <div className="text-2xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#22D3EE" }}>98.7%</div>
                <div className="text-xs" style={{ color: "#64748B" }}>detection accuracy</div>
              </div>
              <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="text-center">
                <div className="text-2xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4ADE80" }}>2,000+</div>
                <div className="text-xs" style={{ color: "#64748B" }}>items recognized</div>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex-1 space-y-5">
            {aiFeatures.map((feat, i) => (
              <div
                key={i}
                className="reveal glass-card rounded-xl p-5 flex items-start gap-4 group transition-all duration-200"
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(34,211,238,0.12)", color: "#22D3EE" }}
                >
                  {feat.icon}
                </div>
                <div>
                  <h4
                    className="font-bold mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
                  >
                    {feat.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="reveal pt-2" style={{ transitionDelay: "400ms" }}>
              <a
                href="#demo"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
              >
                <Scan size={16} />
                See AI Scan in Action
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
