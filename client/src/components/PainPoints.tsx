/*
 * MoveForce Pain Points Section
 * Design: Dark section with 3-column cards showing problems, then solution pivot
 */
import { useEffect, useRef } from "react";
import { AlertCircle, Clock, TrendingDown, ArrowRight } from "lucide-react";

const pains = [
  {
    icon: <Clock size={24} />,
    title: "Hours Lost on Manual Estimates",
    description: "Your team spends 3–4 hours per estimate — measuring rooms, counting items, calculating cubic footage by hand. That's revenue left on the table.",
    stat: "3–4 hrs",
    statLabel: "per estimate",
  },
  {
    icon: <TrendingDown size={24} />,
    title: "Leads Slipping Through the Cracks",
    description: "No centralized CRM means missed follow-ups, lost leads, and zero visibility into your pipeline. Your competitors are booking those jobs.",
    stat: "47%",
    statLabel: "leads never followed up",
  },
  {
    icon: <AlertCircle size={24} />,
    title: "Dispatch Chaos Every Morning",
    description: "Spreadsheets, phone calls, and sticky notes to coordinate crews and trucks. Overbooking, double-booking, and last-minute scrambles cost you money and reputation.",
    stat: "2x",
    statLabel: "more overbooking incidents",
  },
];

export default function PainPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
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
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: "#0A0E1A" }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#0066FF" }}>
            The Problem
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
          >
            Still Running Your Business<br />
            <span className="text-blue-gradient">Like It's 2010?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
            Manual processes, stitched-together tools, and clunky software are holding your moving company back from its real potential.
          </p>
        </div>

        {/* Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl p-7 relative overflow-hidden group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Red glow accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(239,68,68,0.4) 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(239, 68, 68, 0.12)", color: "#F87171" }}
              >
                {pain.icon}
              </div>

              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
              >
                {pain.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748B" }}>
                {pain.description}
              </p>

              <div
                className="flex items-baseline gap-2 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="text-3xl font-extrabold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F87171" }}
                >
                  {pain.stat}
                </span>
                <span className="text-sm" style={{ color: "#64748B" }}>{pain.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pivot CTA */}
        <div className="reveal text-center">
          <p className="text-lg font-semibold mb-4" style={{ color: "#94A3B8" }}>
            There's a smarter way to run your moving company.
          </p>
          <a
            href="#features"
            className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold"
          >
            See How MoveForce Fixes This
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
