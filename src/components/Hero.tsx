"use client";

import { ArrowRight, Activity, Shield, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const threatRows = [
  { label: "Network Intrusion Detection", value: "99.7%", percent: 99.7, color: "var(--accent)" },
  { label: "Anomaly Classification", value: "98.3%", percent: 98.3, color: "var(--gradient-mid)" },
  { label: "Latency (p99)", value: "<12ms", percent: 88, color: "var(--success)" },
  { label: "Events Processed / sec", value: "2.4M", percent: 76, color: "var(--gradient-end)" },
];

const metaRows = [
  { label: "Model Version", value: "v4.2.1-stable" },
  { label: "Deployment Region", value: "EU-WEST-1 / SOVEREIGN" },
];

/* Mini sparkline data (fake points for visual) */
const sparkPoints = [4, 6, 5, 8, 7, 9, 8, 11, 10, 12, 11, 14, 12, 13, 15, 14, 16, 15, 18, 17, 19, 20, 18, 21, 20, 22, 21, 24, 23, 25];
const sparkPath = sparkPoints
  .map((y, i) => `${i === 0 ? "M" : "L"}${i * (220 / (sparkPoints.length - 1))},${30 - y}`)
  .join(" ");

export default function Hero() {
  return (
    <section className="relative w-full min-h-[780px] bg-[var(--bg-primary)] overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-[var(--gradient-mid)] opacity-[0.03] blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-[100px] left-[40%] w-[400px] h-[400px] rounded-full bg-[var(--gradient-end)] opacity-[0.03] blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 pointer-events-none animate-grid-fade">
        {[120, 360, 600, 840, 1080, 1320].map((x) => (
          <div
            key={`v-${x}`}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: x,
              background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.08) 50%, transparent)",
            }}
          />
        ))}
        {[195, 390, 585].map((y) => (
          <div
            key={`h-${y}`}
            className="absolute left-0 right-0 h-px"
            style={{
              top: y,
              background: "linear-gradient(to right, transparent, rgba(59,130,246,0.08) 50%, transparent)",
            }}
          />
        ))}
      </div>

      {/* Radial fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 30% 50%, transparent 0%, var(--bg-primary) 100%)",
        }}
      />

      {/* Left Content */}
      <div className="absolute left-[120px] top-[150px] flex flex-col gap-9 max-w-[720px]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-[12px] text-[var(--accent)] tracking-[4px] flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[var(--accent)]" />
          SOVEREIGN AI INFRASTRUCTURE
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[68px] font-semibold text-[var(--text-primary)] leading-[1.04] tracking-[-2.5px] max-w-[700px]"
        >
          Intelligence infrastructure
          <br />
          for critical{" "}
          <span className="gradient-text">operations.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-[18px] text-[var(--text-secondary)] leading-[1.75] max-w-[540px]"
        >
          Enterprise-grade AI deployment platform built for regulated industries. Real-time decisioning across defense, finance, and sovereign systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center gap-5 pt-1"
        >
          <a
            href="#"
            className="cta-shimmer flex items-center gap-2.5 px-8 py-[15px] bg-[var(--cta-bg)] text-[var(--cta-text)] text-[15px] font-semibold tracking-[0.3px] rounded-[8px] hover:shadow-[0_0_30px_rgba(244,247,251,0.12)] transition-all duration-300"
          >
            Request Demo <ArrowRight size={15} strokeWidth={2} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-[15px] border border-[var(--border)] text-[var(--text-secondary)] text-[15px] tracking-[0.3px] rounded-[8px] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all duration-300"
          >
            View Documentation
          </a>
        </motion.div>
      </div>

      {/* ── Right Data Panel — Premium Dashboard Card ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[80px] top-[100px] w-[500px] animate-float"
        style={{ animationDuration: "8s" }}
      >
        {/* Outer glow wrapper */}
        <div className="relative">
          {/* Animated gradient border */}
          <div
            className="absolute -inset-[1px] rounded-[14px] opacity-40"
            style={{
              background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end), var(--gradient-start))",
              backgroundSize: "300% 300%",
              animation: "gradient-rotate 6s ease infinite",
            }}
          />

          {/* Card body */}
          <div
            className="relative flex flex-col rounded-[13px] overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(12,18,33,0.92), rgba(6,9,15,0.97))",
              backdropFilter: "blur(24px)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* ── Top Chrome Bar ── */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#FF5F57]" />
                  <div className="w-[9px] h-[9px] rounded-full bg-[#FEBC2E]" />
                  <div className="w-[9px] h-[9px] rounded-full bg-[#28C840]" />
                </div>
                <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[2px] ml-1">
                  LIVE THREAT ANALYSIS
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-[6px] h-[6px] rounded-full bg-[var(--success)] animate-blink" style={{ boxShadow: "0 0 10px rgba(34,197,94,0.5)" }} />
                <span className="font-mono text-[9px] text-[var(--success)] tracking-[2px]">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* ── Sparkline + Summary Row ── */}
            <div className="flex items-center gap-5 px-5 py-4 border-b border-white/[0.04]">
              <div className="flex-1">
                <svg width="220" height="32" viewBox="0 0 220 32" fill="none" className="w-full">
                  <defs>
                    <linearGradient id="spark-grad" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--gradient-start)" />
                      <stop offset="0.5" stopColor="var(--gradient-mid)" />
                      <stop offset="1" stopColor="var(--gradient-end)" />
                    </linearGradient>
                    <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--accent)" stopOpacity="0.15" />
                      <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${sparkPath} L220,32 L0,32 Z`} fill="url(#spark-fill)" />
                  <path d={sparkPath} stroke="url(#spark-grad)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* Pulse dot at the end */}
                  <circle cx="220" cy={30 - sparkPoints[sparkPoints.length - 1]} r="3" fill="var(--accent)">
                    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-[22px] font-bold text-[var(--text-primary)] tracking-[-0.5px] leading-none">
                  2.4M
                </span>
                <span className="font-mono text-[9px] text-[var(--success)] tracking-[1px]">
                  +12.4% ↑
                </span>
                <span className="font-mono text-[8px] text-[var(--text-muted)] tracking-[1px]">
                  EVENTS/SEC
                </span>
              </div>
            </div>

            {/* ── Data Rows with Progress Bars ── */}
            <div className="flex flex-col px-5 py-3">
              {threatRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-3 py-[10px] border-b border-white/[0.03] last:border-0"
                >
                  <span className="text-[11px] text-[var(--text-secondary)] flex-1 min-w-0">{row.label}</span>
                  {/* Mini progress bar */}
                  <div className="w-[80px] h-[3px] rounded-full bg-white/[0.06] overflow-hidden flex-shrink-0">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: row.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${row.percent}%` }}
                      transition={{ duration: 1.2, delay: 1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span className="font-mono text-[12px] font-semibold text-[var(--text-primary)] w-[52px] text-right flex-shrink-0">
                    {row.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ── Meta Footer ── */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.05]" style={{ background: "rgba(255,255,255,0.015)" }}>
              <div className="flex items-center gap-4">
                {metaRows.map((row) => (
                  <div key={row.label} className="flex items-center gap-1.5">
                    <span className="font-mono text-[8px] text-[var(--text-muted)] tracking-[1px]">{row.label}:</span>
                    <span className="font-mono text-[9px] text-[var(--text-secondary)]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Bottom Status Bar ── */}
            <div className="flex items-center gap-4 px-5 py-2.5 border-t border-white/[0.04]" style={{ background: "rgba(255,255,255,0.01)" }}>
              <div className="flex items-center gap-1.5">
                <Shield size={10} className="text-[var(--success)]" strokeWidth={2} />
                <span className="font-mono text-[8px] text-[var(--success)] tracking-[1px]">ENCRYPTED</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity size={10} className="text-[var(--accent)]" strokeWidth={2} />
                <span className="font-mono text-[8px] text-[var(--accent)] tracking-[1px]">MONITORING</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wifi size={10} className="text-[var(--gradient-end)]" strokeWidth={2} />
                <span className="font-mono text-[8px] text-[var(--gradient-end)] tracking-[1px]">SOVEREIGN</span>
              </div>
              {/* Threat severity mini bar */}
              <div className="flex-1 flex justify-end">
                <div className="flex h-[6px] gap-[2px] rounded-[2px] overflow-hidden">
                  <div className="w-[16px] bg-[var(--danger)] rounded-[1px]" />
                  <div className="w-[28px] bg-[var(--orange)] rounded-[1px]" />
                  <div className="w-[44px] bg-[var(--warning)] rounded-[1px]" />
                  <div className="w-[20px] bg-[var(--border)] rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* ── Scan line animation ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[13px]">
              <div
                className="absolute left-0 right-0 h-[1px] opacity-[0.07]"
                style={{
                  background: "linear-gradient(to right, transparent, var(--accent), transparent)",
                  animation: "scan-line 4s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />

      {/* Scan line + gradient rotate keyframes */}
      <style jsx>{`
        @keyframes scan-line {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
