/*
 * MovePrecision Footer
 * Design: Dark navy, gold logo, organized link columns, social links
 */
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  Product: ["Features", "AI Inventory Scan", "Pricing", "Changelog", "Roadmap"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Help Center", "Webinars", "Case Studies"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: "#080B12",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #F5C04A 0%, #E8A020 100%)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0A0E1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span
                className="text-lg font-bold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
              >
                Move<span style={{ color: "#E8A020" }}>Precision</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#475569", maxWidth: "220px" }}>
              The AI-powered moving CRM that helps your company win more jobs and grow faster.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Twitter size={16} />, href: "#" },
                { icon: <Linkedin size={16} />, href: "#" },
                { icon: <Facebook size={16} />, href: "#" },
                { icon: <Instagram size={16} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "#64748B",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#E8A020";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,32,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#64748B";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#94A3B8" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#475569" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#94A3B8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#334155" }}>
            © 2026 MovePrecision. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: "#4ADE80" }} />
            <span className="text-xs" style={{ color: "#334155" }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
