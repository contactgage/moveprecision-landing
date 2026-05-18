/*
 * MovePrecision Feature Grid
 * Design: 3-column icon grid of all platform features
 */
import { useEffect, useRef } from "react";
import {
  Scan, BarChart3, CreditCard, MessageSquare, MapPin, Shield,
  Calendar, Users, FileText, Truck, Phone, Star
} from "lucide-react";

const allFeatures = [
  { icon: <Scan size={20} />, title: "AI Inventory Scan", description: "Point-and-scan room inventory with 98.7% accuracy. Industry first.", highlight: true },
  { icon: <BarChart3 size={20} />, title: "Revenue Analytics", description: "Real-time dashboards tracking revenue, margins, and growth trends." },
  { icon: <CreditCard size={20} />, title: "Integrated Payments", description: "Accept cards, ACH, and digital wallets. Automatic invoicing." },
  { icon: <MessageSquare size={20} />, title: "Automated Follow-ups", description: "SMS and email sequences that nurture leads while you focus on moves." },
  { icon: <MapPin size={20} />, title: "Live GPS Tracking", description: "Real-time truck tracking shared with customers for full transparency." },
  { icon: <Shield size={20} />, title: "Claims Management", description: "Digital BOL, claims tracking, and compliance documentation built in." },
  { icon: <Calendar size={20} />, title: "Smart Scheduling", description: "AI-powered dispatch calendar with conflict detection and optimization." },
  { icon: <Users size={20} />, title: "Crew Management", description: "Assign crews, track hours, manage payroll, and monitor performance." },
  { icon: <FileText size={20} />, title: "Digital Estimates", description: "Professional branded quotes sent in minutes, not hours." },
  { icon: <Truck size={20} />, title: "Fleet Management", description: "Truck availability, maintenance schedules, and capacity planning." },
  { icon: <Phone size={20} />, title: "Call Recording", description: "Every call logged, transcribed, and linked to the customer record." },
  { icon: <Star size={20} />, title: "Review Automation", description: "Automatically request reviews after every completed move." },
];

export default function FeatureGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 50);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg, #0A0E1A 0%, #0D1525 100%)" }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Full Platform
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
          >
            One Platform. <span className="text-gold-gradient">Every Tool.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748B" }}>
            No more stitching together 6 different apps. Everything your moving company needs is right here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allFeatures.map((feat, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-xl p-5 flex items-start gap-4 group transition-all duration-200 relative overflow-hidden"
              style={{ transitionDelay: `${i * 40}ms` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = feat.highlight
                  ? "rgba(232,160,32,0.4)"
                  : "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {feat.highlight && (
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "rgba(232,160,32,0.15)", color: "#E8A020", border: "1px solid rgba(232,160,32,0.3)" }}
                >
                  AI
                </div>
              )}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: feat.highlight ? "rgba(232,160,32,0.15)" : "rgba(255,255,255,0.06)",
                  color: feat.highlight ? "#E8A020" : "#94A3B8",
                }}
              >
                {feat.icon}
              </div>
              <div>
                <h4
                  className="font-bold mb-1 text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
                >
                  {feat.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
