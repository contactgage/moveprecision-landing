/*
 * MovePrecision Testimonials Section
 * Design: Dark background, large quote cards, gold star ratings, auto-scroll carousel
 */
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "We switched from SmartMoving 6 months ago and our revenue is up 52%. The AI inventory scan alone saves my team 3 hours every single day. I can't imagine going back.",
    name: "Marcus Johnson",
    title: "Owner",
    company: "Elite Movers ATL",
    location: "Atlanta, GA",
    stat: "+52% revenue",
    initials: "MJ",
    color: "#E8A020",
  },
  {
    quote: "The dispatch system is a game-changer. We went from morning chaos to a perfectly organized day. Our crews know exactly where to be and our customers love the live tracking.",
    name: "Sarah Chen",
    title: "Operations Director",
    company: "Pacific Coast Moving",
    location: "Los Angeles, CA",
    stat: "70% faster dispatch",
    initials: "SC",
    color: "#22D3EE",
  },
  {
    quote: "I was skeptical about the AI scan but it's genuinely incredible. My estimators scan a house in 4 minutes and the quotes are more accurate than what we were doing manually.",
    name: "Derek Williams",
    title: "CEO",
    company: "Williams Moving & Storage",
    location: "Chicago, IL",
    stat: "4 min estimates",
    initials: "DW",
    color: "#4ADE80",
  },
  {
    quote: "The CRM follow-up automation is worth the price alone. We're booking 40% more jobs just from leads that used to fall through the cracks. MovePrecision pays for itself every week.",
    name: "Amanda Torres",
    title: "Sales Manager",
    company: "Lone Star Relocation",
    location: "Dallas, TX",
    stat: "40% more bookings",
    initials: "AT",
    color: "#A78BFA",
  },
  {
    quote: "We tried MoveItPro and Supermove before this. MovePrecision is in a completely different league. The onboarding was fast, the support is incredible, and the AI features are real.",
    name: "Robert Kim",
    title: "Owner",
    company: "Summit Moving Group",
    location: "Seattle, WA",
    stat: "Best in class",
    initials: "RK",
    color: "#F472B6",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D1525 0%, #0A0E1A 100%)" }}
    >
      {/* Gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(232,160,32,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Customer Stories
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
          >
            Moving Companies <span className="text-gold-gradient">Love Us</span>
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div className="reveal">
          <div
            className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden"
            style={{ minHeight: "280px" }}
          >
            {/* Accent glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
              style={{
                background: `radial-gradient(circle, ${t.color} 0%, transparent 70%)`,
                transform: "translate(30%, -30%)",
              }}
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-current" style={{ color: "#E8A020" }} />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="text-xl sm:text-2xl font-medium leading-relaxed mb-8"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#F0EDE8",
                fontStyle: "italic",
              }}
            >
              "{t.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: `${t.color}20`, color: t.color, border: `2px solid ${t.color}40` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold" style={{ color: "#F0EDE8" }}>{t.name}</div>
                  <div className="text-sm" style={{ color: "#64748B" }}>
                    {t.title}, {t.company} · {t.location}
                  </div>
                </div>
              </div>
              <div
                className="px-4 py-2 rounded-xl text-sm font-bold"
                style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}
              >
                {t.stat}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "28px" : "8px",
                    background: i === active ? "#E8A020" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#94A3B8" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,32,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "#E8A020";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#94A3B8" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,32,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "#E8A020";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
