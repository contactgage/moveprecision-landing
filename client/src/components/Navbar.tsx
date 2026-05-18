/*
 * MoveForce Navbar
 * Design: Transparent-to-dark on scroll, electric blue accent, sticky positioning
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "AI Inventory", href: "#ai-inventory" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Compare", href: "#compare" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 14, 26, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663670658588/UwocpbVoQKb25UQszcDYCS/moveforce-icon-7ghoYncavcbDx8u95dVNJh.webp" alt="MoveForce" className="w-8 h-8" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#94A3B8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://move-precision-flow.base44.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Sign In
            </a>
            <a
              href="#demo"
              className="btn-gold px-5 py-2 rounded-lg text-sm"
            >
              Get Free Demo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#F0EDE8" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "rgba(10, 14, 26, 0.98)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="container mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium py-2"
                style={{ color: "#CBD5E1" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <a
                href="https://move-precision-flow.base44.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-4 py-2.5 rounded-lg text-sm font-semibold text-center"
              >
                Sign In
              </a>
              <a
                href="#demo"
                className="btn-gold px-5 py-2.5 rounded-lg text-sm text-center"
                onClick={() => setMenuOpen(false)}
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
