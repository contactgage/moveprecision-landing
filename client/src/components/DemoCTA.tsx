/*
 * MoveForce Demo CTA Section
 * Design: Full-width dark section with gold gradient, form for demo request
 */
import { useRef, useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DemoCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "" });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0E1A 0%, #0D1525 50%, #0A0E1A 100%)",
      }}
    >
      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(232,160,32,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(17,24,39,0.9)",
            border: "1px solid rgba(232,160,32,0.2)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(232,160,32,0.08)",
          }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left: Copy */}
            <div
              className="flex-1 p-10 lg:p-14"
              style={{
                background: "linear-gradient(135deg, rgba(232,160,32,0.06) 0%, transparent 60%)",
                borderRight: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="reveal">
                <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#0066FF" }}>
                  Get Started Today
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
                >
                  See MoveForce in Action — Free
                </h2>
                <p className="text-base mb-8 leading-relaxed" style={{ color: "#64748B" }}>
                  Book a personalized 30-minute demo and see exactly how MoveForce will transform your moving company. No pressure, no commitment.
                </p>

                <ul className="space-y-3">
                  {[
                    "Live walkthrough of AI Inventory Scan",
                    "Custom setup for your business size",
                    "Migration plan from your current software",
                    "14-day free trial, no credit card needed",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} style={{ color: "#0066FF" }} />
                      <span className="text-sm" style={{ color: "#94A3B8" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex-1 p-10 lg:p-14">
              {submitted ? (
                <div className="reveal flex flex-col items-center justify-center h-full text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(74,222,128,0.15)" }}
                  >
                    <CheckCircle2 size={32} style={{ color: "#4ADE80" }} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
                  >
                    You're on the list!
                  </h3>
                  <p style={{ color: "#64748B" }}>
                    Our team will reach out within 24 hours to schedule your personalized demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="reveal space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#F0EDE8",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(232,160,32,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Smith Movers LLC"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#F0EDE8",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(232,160,32,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@smithmovers.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#F0EDE8",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(232,160,32,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#F0EDE8",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(232,160,32,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-bold mt-2"
                  >
                    Book My Free Demo
                    <ArrowRight size={18} />
                  </button>

                  <p className="text-xs text-center" style={{ color: "#475569" }}>
                    No spam. No credit card. We'll contact you within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
