/*
 * MoveForce Hero Section
 * Design: Full-viewport, mesh background, floating dashboard, staggered entrance animations
 * Dark navy + electric blue, centered headline, dual CTAs, social proof bar below
 */
import { useEffect, useRef } from "react";
import { ArrowRight, Play, Star, TrendingUp, Users, Zap } from "lucide-react";

const HERO_DASHBOARD_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663670658588/UwocpbVoQKb25UQszcDYCS/hero-dashboard-moveforce-9CFSVVnnikoBPbAvFUU6XY.webp";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll(".hero-animate");
    elements?.forEach((el, i) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      setTimeout(() => {
        (el as HTMLElement).style.transition = "opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)";
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 100 + i * 80);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-bg"
      style={{ paddingTop: "80px" }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue radial glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(0,102,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="hero-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "rgba(0, 102, 255, 0.12)",
              border: "1px solid rgba(0, 102, 255, 0.3)",
              color: "#E8A020",
            }}
          >
            <Zap size={12} className="fill-current" />
            Introducing AI Inventory Scan — Industry First
          </div>

          {/* Headline */}
          <h1
            className="hero-animate text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", maxWidth: "900px", color: "#F0EDE8" }}
          >
            The Moving CRM That{" "}
            <span className="text-gold-gradient">Thinks Ahead</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="hero-animate text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed"
            style={{ color: "#94A3B8" }}
          >
            MoveForce is the AI-powered platform built exclusively for moving companies. Win more jobs, dispatch smarter, and grow revenue — all from one command center.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a
              href="#demo"
              className="btn-gold flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </a>
            <a
              href="#demo"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                color: "#F0EDE8",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "rgba(232, 160, 32, 0.2)" }}
              >
                <Play size={12} className="ml-0.5" style={{ color: "#E8A020" }} />
              </div>
              Watch 2-min Demo
            </a>
          </div>

          {/* Social Proof Row */}
          <div
            className="hero-animate flex flex-wrap justify-center items-center gap-6 mb-14"
            style={{ color: "#64748B" }}
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-current" style={{ color: "#E8A020" }} />
                ))}
              </div>
              <span className="text-sm font-medium" style={{ color: "#94A3B8" }}>4.9/5 on Capterra</span>
            </div>
            <div className="w-px h-4" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="flex items-center gap-1.5">
              <Users size={14} style={{ color: "#E8A020" }} />
              <span className="text-sm font-medium" style={{ color: "#94A3B8" }}>500+ Moving Companies</span>
            </div>
            <div className="w-px h-4" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="flex items-center gap-1.5">
              <TrendingUp size={14} style={{ color: "#E8A020" }} />
              <span className="text-sm font-medium" style={{ color: "#94A3B8" }}>Avg. 43% Revenue Growth</span>
            </div>
          </div>

          {/* Dashboard Screenshot */}
          <div
            className="hero-animate w-full max-w-5xl relative animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Glow effect behind dashboard */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0,102,255,0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
                transform: "translateY(20px) scale(0.95)",
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(0, 102, 255, 0.2)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 60px rgba(0,102,255,0.1)",
              }}
            >
              <img
                src={HERO_DASHBOARD_URL}
                alt="MoveForce Dashboard"
                className="w-full h-auto"
                loading="eager"
              />
              {/* Gradient fade at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, #0A0E1A 0%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0A0E1A 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
