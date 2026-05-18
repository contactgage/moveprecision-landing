/*
 * MoveForce Pricing Section
 * Design: 3-tier pricing cards, gold "Most Popular" highlight, annual/monthly toggle
 */
import { useEffect, useRef, useState } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "Perfect for small moving companies getting started with CRM.",
    features: [
      "Up to 50 jobs/month",
      "CRM & Lead Pipeline",
      "Digital Estimates",
      "Basic Dispatch Calendar",
      "Integrated Payments",
      "Email Support",
    ],
    cta: "Start Free Trial",
    popular: false,
    accentColor: "#64748B",
  },
  {
    name: "Professional",
    monthlyPrice: 299,
    annualPrice: 239,
    description: "The complete platform for growing moving companies.",
    features: [
      "Unlimited jobs",
      "AI Inventory Scan",
      "Smart Dispatch + GPS",
      "CRM + Automated Follow-ups",
      "Crew & Fleet Management",
      "Revenue Analytics",
      "Claims Management",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    popular: true,
    accentColor: "#E8A020",
  },
  {
    name: "Enterprise",
    monthlyPrice: 599,
    annualPrice: 479,
    description: "For multi-location operations that need full control.",
    features: [
      "Everything in Professional",
      "Multi-location management",
      "Custom integrations",
      "Dedicated success manager",
      "White-label customer portal",
      "Advanced reporting & API",
      "SLA guarantee",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    popular: false,
    accentColor: "#22D3EE",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);
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

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: "#0A0E1A" }}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Pricing
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
          >
            Simple, <span className="text-blue-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "#64748B" }}>
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>

          {/* Toggle */}
          <div
            className="inline-flex items-center gap-3 p-1 rounded-xl"
            style={{ background: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <button
              onClick={() => setAnnual(false)}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                background: !annual ? "rgba(232,160,32,0.15)" : "transparent",
                color: !annual ? "#E8A020" : "#64748B",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2"
              style={{
                background: annual ? "rgba(232,160,32,0.15)" : "transparent",
                color: annual ? "#E8A020" : "#64748B",
              }}
            >
              Annual
              <span
                className="text-xs px-1.5 py-0.5 rounded-full font-bold"
                style={{ background: "rgba(74,222,128,0.15)", color: "#4ADE80" }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="reveal relative rounded-2xl p-7 flex flex-col"
              style={{
                transitionDelay: `${i * 100}ms`,
                background: plan.popular ? "rgba(232,160,32,0.05)" : "rgba(17,24,39,0.8)",
                border: plan.popular
                  ? "1px solid rgba(232,160,32,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: plan.popular ? "0 0 40px rgba(232,160,32,0.1)" : "none",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"
                  style={{ background: "linear-gradient(135deg, #F5C04A, #E8A020)", color: "#0A0E1A" }}
                >
                  <Zap size={11} className="fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm mb-5" style={{ color: "#64748B" }}>{plan.description}</p>

                <div className="flex items-baseline gap-1">
                  <span
                    className="text-4xl font-extrabold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: plan.popular ? "#E8A020" : "#F0EDE8" }}
                  >
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm" style={{ color: "#64748B" }}>/mo</span>
                </div>
                {annual && (
                  <p className="text-xs mt-1" style={{ color: "#64748B" }}>
                    Billed annually · ${(annual ? plan.annualPrice : plan.monthlyPrice) * 12}/yr
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <Check size={15} className="mt-0.5 shrink-0" style={{ color: plan.popular ? "#E8A020" : "#4ADE80" }} />
                    <span className="text-sm" style={{ color: "#94A3B8" }}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === "Enterprise" ? "#demo" : "#demo"}
                className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all duration-200 ${plan.popular ? "btn-gold" : "btn-outline-gold"}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8 reveal" style={{ color: "#64748B" }}>
          All plans include a 14-day free trial. No credit card required. Free migration from your current software.
        </p>
      </div>
    </section>
  );
}
