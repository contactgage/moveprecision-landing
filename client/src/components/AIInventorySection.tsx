/*
 * MoveForce AI Inventory Scan Section
 * Design: Premium, professional spotlight section with refined scanning animation
 * Elegant scan line effect, professional visual hierarchy, sophisticated animations
 */
import { useEffect, useRef } from "react";
import { Smartphone, Brain, Clock, FileText, ArrowRight } from "lucide-react";

const AI_SCAN_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663670658588/UwocpbVoQKb25UQszcDYCS/ai-inventory-scan-PhQdt34G6KSPK8CWeQocFQ.webp";

const aiFeatures = [
  {
    icon: <Smartphone size={20} />,
    title: "Scan with Any Phone",
    description: "Point your camera at any room. No special hardware required.",
  },
  {
    icon: <Brain size={20} />,
    title: "AI-Trained Recognition",
    description: "Identifies 2,000+ household items with 98.7% accuracy.",
  },
  {
    icon: <Clock size={20} />,
    title: "3-Minute Estimates",
    description: "From scan to quote in under 3 minutes. 15x faster than manual.",
  },
  {
    icon: <FileText size={20} />,
    title: "Auto-Generated Reports",
    description: "Complete inventory with cubic footage and handling flags.",
  },
];

export default function AIInventorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0E1A 0%, #0D1525 50%, #0A0E1A 100%)",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(232,160,32,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "rgba(232, 160, 32, 0.08)",
              border: "1px solid rgba(232, 160, 32, 0.2)",
              color: "#E8A020",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#E8A020" }} />
            Industry-First Technology
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
          >
            AI-Powered Inventory
            <br />
            <span className="text-gold-gradient">No Manual Work Required</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "#94A3B8" }}>
            Point your phone camera at any room. Our AI instantly identifies every item, calculates cubic footage, and generates a complete inventory report — all in under 3 minutes.
          </p>
        </div>

        {/* Main Content: Image + Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* AI Scan Image with professional scanning animation */}
          <div className="reveal">
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden group"
              style={{
                border: "1px solid rgba(232, 160, 32, 0.15)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.5), 0 0 40px rgba(232,160,32,0.08)",
              }}
            >
              <img
                src={AI_SCAN_URL}
                alt="AI Inventory Scan in action"
                className="w-full h-auto block"
                loading="lazy"
              />

              {/* Professional horizontal scan line */}
              <div
                className="absolute inset-x-0 h-0.5 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(232,160,32,0.6) 50%, transparent 100%)",
                  animation: "scanLine 3s ease-in-out infinite",
                  top: "30%",
                  boxShadow: "0 0 12px rgba(232,160,32,0.4), 0 0 24px rgba(232,160,32,0.2)",
                }}
              />

              {/* Secondary scan line with slight offset */}
              <div
                className="absolute inset-x-0 h-0.5 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(232,160,32,0.3) 50%, transparent 100%)",
                  animation: "scanLine 3s ease-in-out infinite 0.5s",
                  top: "60%",
                  boxShadow: "0 0 8px rgba(232,160,32,0.2)",
                }}
              />

              {/* Subtle glow overlay during scan */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, rgba(232,160,32,0.08) 0%, transparent 50%, rgba(232,160,32,0.04) 100%)",
                  animation: "scanGlow 3s ease-in-out infinite",
                }}
              />

              {/* Refined corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(232,160,32,0.1) 0%, transparent 70%)",
                  borderRadius: "0 16px 0 100%",
                }}
              />
            </div>

            {/* Key metrics below image */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div
                className="rounded-lg p-4 text-center reveal"
                style={{
                  background: "rgba(232, 160, 32, 0.06)",
                  border: "1px solid rgba(232, 160, 32, 0.12)",
                }}
              >
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "#E8A020" }}>
                  3 min
                </div>
                <div className="text-xs" style={{ color: "#64748B" }}>
                  vs 45 min manual
                </div>
              </div>
              <div
                className="rounded-lg p-4 text-center reveal"
                style={{
                  background: "rgba(232, 160, 32, 0.06)",
                  border: "1px solid rgba(232, 160, 32, 0.12)",
                }}
              >
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "#E8A020" }}>
                  98.7%
                </div>
                <div className="text-xs" style={{ color: "#64748B" }}>
                  accuracy rate
                </div>
              </div>
              <div
                className="rounded-lg p-4 text-center reveal"
                style={{
                  background: "rgba(232, 160, 32, 0.06)",
                  border: "1px solid rgba(232, 160, 32, 0.12)",
                }}
              >
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "#E8A020" }}>
                  2K+
                </div>
                <div className="text-xs" style={{ color: "#64748B" }}>
                  items recognized
                </div>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-6">
            {aiFeatures.map((feat, i) => (
              <div
                key={i}
                className="reveal group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="rounded-xl p-5 transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(232, 160, 32, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.02)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.1)";
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: "rgba(232, 160, 32, 0.12)",
                        color: "#E8A020",
                      }}
                    >
                      {feat.icon}
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-semibold mb-1.5 text-sm"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
                      >
                        {feat.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="reveal pt-4" style={{ transitionDelay: "500ms" }}>
              <a
                href="#demo"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold"
              >
                See AI Scan in Action
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanLine {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes scanGlow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
