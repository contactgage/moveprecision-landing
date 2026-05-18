/*
 * MovePrecision Features Section
 * Design: Alternating left/right content + screenshot blocks, scroll-triggered reveals
 */
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const CRM_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663670658588/UwocpbVoQKb25UQszcDYCS/crm-leads-aSPtMgphL4Bdz74bmfaitz.webp";
const DISPATCH_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663670658588/UwocpbVoQKb25UQszcDYCS/dispatch-view-89zoQK84UT4St5vsaucNuo.webp";

const features = [
  {
    tag: "CRM & Lead Management",
    title: "Close More Moves. Miss Zero Leads.",
    description: "Every lead, call, and conversation in one place. MovePrecision's CRM automatically tracks prospects, sends follow-up sequences, and surfaces your hottest opportunities — so your team focuses on closing, not chasing.",
    bullets: [
      "Visual pipeline from first call to final invoice",
      "Automated SMS & email follow-up sequences",
      "Lead source tracking and ROI reporting",
      "One-click quote generation from lead details",
    ],
    stat: { value: "40%", label: "more conversions on average" },
    image: CRM_URL,
    imageAlt: "MovePrecision CRM Lead Pipeline",
    reverse: false,
    accentColor: "#22D3EE",
  },
  {
    tag: "Smart Dispatch",
    title: "Dispatch in Minutes, Not Hours.",
    description: "AI-powered scheduling that optimizes crew assignments, truck allocation, and route planning automatically. See your entire operation at a glance — no more morning chaos, no more overbooking.",
    bullets: [
      "Drag-and-drop dispatch calendar",
      "Real-time crew and truck availability",
      "AI route optimization saves fuel costs",
      "Live GPS tracking for customers",
    ],
    stat: { value: "70%", label: "faster scheduling" },
    image: DISPATCH_URL,
    imageAlt: "MovePrecision Dispatch Command Center",
    reverse: true,
    accentColor: "#4ADE80",
  },
];

function FeatureBlock({ feature, index }: { feature: typeof features[0]; index: number }) {
  const blockRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );
    if (blockRef.current) observer.observe(blockRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={blockRef}
      className={`flex flex-col ${feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 py-20`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Text Content */}
      <div className="flex-1 reveal">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
          style={{
            background: `rgba(${feature.accentColor === "#22D3EE" ? "34,211,238" : "74,222,128"}, 0.1)`,
            border: `1px solid ${feature.accentColor}30`,
            color: feature.accentColor,
          }}
        >
          {feature.tag}
        </div>

        <h3
          className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
        >
          {feature.title}
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#64748B" }}>
          {feature.description}
        </p>

        <ul className="space-y-3 mb-8">
          {feature.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "#E8A020" }} />
              <span className="text-sm" style={{ color: "#94A3B8" }}>{bullet}</span>
            </li>
          ))}
        </ul>

        <div
          className="inline-flex items-baseline gap-2 px-5 py-3 rounded-xl"
          style={{ background: "rgba(232,160,32,0.08)", border: "1px solid rgba(232,160,32,0.15)" }}
        >
          <span
            className="text-3xl font-extrabold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#E8A020" }}
          >
            {feature.stat.value}
          </span>
          <span className="text-sm" style={{ color: "#94A3B8" }}>{feature.stat.label}</span>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 reveal" style={{ transitionDelay: "150ms" }}>
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${feature.accentColor}15`,
          }}
        >
          <img
            src={feature.image}
            alt={feature.imageAlt}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative" style={{ background: "#0A0E1A" }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center pt-24 pb-4">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Platform Features
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
          >
            Everything You Need to{" "}
            <span className="text-gold-gradient">Run & Grow</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
            One platform. Every tool your moving company needs — unified, modern, and built to scale.
          </p>
        </div>

        {features.map((feature, i) => (
          <FeatureBlock key={i} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
