/*
 * MoveForce Stats Ticker
 * Design: Horizontal scrolling metrics bar between hero and features
 */
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Moving Companies" },
  { value: "43%", label: "Avg Revenue Growth" },
  { value: "2.1M+", label: "Moves Managed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "60%", label: "Faster Estimates" },
  { value: "4.9★", label: "Capterra Rating" },
  { value: "24/7", label: "AI Support" },
  { value: "3 min", label: "Avg Onboarding" },
];

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-8 shrink-0">
      <div className="flex items-center gap-3">
        <span
          className="text-xl font-extrabold"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#0066FF" }}
        >
          {value}
        </span>
        <span className="text-sm font-medium" style={{ color: "#64748B" }}>
          {label}
        </span>
      </div>
      <div className="w-1 h-1 rounded-full" style={{ background: "rgba(232,160,32,0.4)" }} />
    </div>
  );
}

export default function StatsTicker() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        background: "rgba(17, 24, 39, 0.8)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #111827, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #111827, transparent)" }}
      />

      <div className="flex animate-ticker gap-0" style={{ width: "max-content" }}>
        {[...stats, ...stats].map((stat, i) => (
          <StatItem key={i} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
}
