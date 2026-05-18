/*
 * MoveForce Comparison Table
 * Design: Dark table with gold highlighting on MoveForce column
 */
import { useEffect, useRef } from "react";
import { Check, X, Minus } from "lucide-react";

const features = [
  "AI Inventory Scan",
  "Smart Dispatch",
  "CRM & Lead Pipeline",
  "Automated Follow-ups",
  "Live GPS Tracking",
  "Digital Estimates",
  "Crew Management",
  "Integrated Payments",
  "Claims Management",
  "Revenue Analytics",
  "Review Automation",
  "Mobile App",
];

type Status = "yes" | "no" | "partial";

const competitors: { name: string; features: Status[] }[] = [
  {
    name: "SmartMoving",
    features: ["no", "yes", "yes", "yes", "no", "yes", "yes", "yes", "no", "yes", "partial", "yes"],
  },
  {
    name: "MoveItPro",
    features: ["no", "yes", "yes", "partial", "yes", "yes", "yes", "yes", "yes", "yes", "no", "yes"],
  },
  {
    name: "Supermove",
    features: ["no", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "partial", "yes", "no", "yes"],
  },
];

const movePrecisionFeatures: Status[] = features.map(() => "yes");

function StatusIcon({ status }: { status: Status }) {
  if (status === "yes") return <Check size={16} style={{ color: "#4ADE80" }} />;
  if (status === "no") return <X size={16} style={{ color: "#F87171" }} />;
  return <Minus size={16} style={{ color: "#94A3B8" }} />;
}

export default function CompareSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
      id="compare"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: "#0A0E1A" }}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#0066FF" }}>
            Why Switch
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
          >
            MoveForce vs. <span className="text-blue-gradient">The Competition</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748B" }}>
            See exactly why moving companies are switching from legacy software to MoveForce.
          </p>
        </div>

        <div className="reveal overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <table className="w-full min-w-[640px]">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <th
                  className="text-left py-4 px-5 text-sm font-semibold"
                  style={{ color: "#64748B", background: "#111827" }}
                >
                  Feature
                </th>
                {/* MoveForce column - highlighted */}
                <th
                  className="py-4 px-5 text-center text-sm font-bold"
                  style={{
                    background: "rgba(232,160,32,0.08)",
                    color: "#0066FF",
                    borderLeft: "1px solid rgba(232,160,32,0.2)",
                    borderRight: "1px solid rgba(232,160,32,0.2)",
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span>MoveForce</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: "rgba(232,160,32,0.2)", color: "#0066FF" }}
                    >
                      ✦ Best Choice
                    </span>
                  </div>
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className="py-4 px-5 text-center text-sm font-semibold"
                    style={{ color: "#64748B", background: "#111827" }}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, fi) => (
                <tr
                  key={fi}
                  style={{
                    borderBottom: fi < features.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    background: fi % 2 === 0 ? "rgba(17,24,39,0.5)" : "transparent",
                  }}
                >
                  <td className="py-3.5 px-5 text-sm" style={{ color: "#94A3B8" }}>
                    {feat}
                    {feat === "AI Inventory Scan" && (
                      <span
                        className="ml-2 text-xs px-1.5 py-0.5 rounded font-semibold"
                        style={{ background: "rgba(232,160,32,0.15)", color: "#0066FF" }}
                      >
                        AI
                      </span>
                    )}
                  </td>
                  {/* MoveForce */}
                  <td
                    className="py-3.5 px-5 text-center"
                    style={{
                      background: "rgba(232,160,32,0.05)",
                      borderLeft: "1px solid rgba(232,160,32,0.15)",
                      borderRight: "1px solid rgba(232,160,32,0.15)",
                    }}
                  >
                    <div className="flex justify-center">
                      <StatusIcon status={movePrecisionFeatures[fi]} />
                    </div>
                  </td>
                  {competitors.map((c) => (
                    <td key={c.name} className="py-3.5 px-5 text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={c.features[fi]} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="reveal text-center mt-10">
          <a
            href="#demo"
            className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold"
          >
            Switch to MoveForce Today
          </a>
          <p className="text-sm mt-3" style={{ color: "#64748B" }}>
            Free migration assistance included. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
