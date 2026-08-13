import type { ReactNode } from "react";
import type { ServiceId } from "../data/services";

/** Fiber optic cable logo — jacket, cladding, glowing core + cable curve */
export function BrandLogo() {
  return (
    <svg className="m-logo" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="jacket" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="cableBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#7DF9FF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </radialGradient>
        <linearGradient id="lightTrail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#F5D76E" stopOpacity="0.85" />
        </linearGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Curved fiber cable body */}
      <path
        d="M18 98 C22 72, 28 52, 48 42"
        stroke="url(#cableBody)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M18 98 C22 72, 28 52, 48 42"
        stroke="#94a3b8"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      {/* Light inside the cable */}
      <path
        d="M20 96 C24 72, 30 54, 48 44"
        stroke="url(#lightTrail)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
      />

      {/* Cable end / tip facing camera */}
      <circle cx="68" cy="40" r="28" fill="url(#jacket)" stroke="#F5D76E" strokeWidth="2.5" filter="url(#glow)" />
      <circle cx="68" cy="40" r="21" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <circle cx="68" cy="40" r="14" fill="#0b1728" stroke="#38BDF8" strokeWidth="2.2" />
      <circle cx="68" cy="40" r="7" fill="url(#coreGlow)" filter="url(#glow)" />
      <circle cx="68" cy="40" r="2.6" fill="#ffffff" />

      {/* Small sparkles of optic light */}
      <circle cx="92" cy="22" r="2" fill="#00E5FF" opacity="0.9" />
      <circle cx="98" cy="34" r="1.4" fill="#F5D76E" opacity="0.85" />
      <circle cx="88" cy="14" r="1.2" fill="#7DF9FF" opacity="0.7" />
    </svg>
  );
}

const paths: Record<ServiceId, ReactNode> = {
  fiber: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
      <path d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
    </>
  ),
  cameras: (
    <>
      <rect x="3" y="8" width="11" height="8" rx="2" />
      <path d="M14 10.5l5-2.5v8l-5-2.5" />
      <circle cx="8" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M6 18h6" />
    </>
  ),
  security: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
  fire: (
    <>
      <path d="M12 3c-1.5 3-5 4.8-5 8.2A5 5 0 0 0 12 21a5 5 0 0 0 5-9.8C17 7.8 13.5 6 12 3z" />
      <path d="M12 11c-.7 1.2-2 1.8-2 3.2A2 2 0 0 0 12 18a2 2 0 0 0 2-3.8c0-1.4-1.3-2-2-3.2z" />
    </>
  ),
  smart: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M7 10.5V20h10v-9.5" />
      <circle cx="12" cy="14.5" r="2.2" />
      <path d="M12 16.7V19" />
    </>
  ),
};

export function ServiceIcon({ id }: { id: ServiceId }) {
  return (
    <svg
      className="m-service-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[id]}
    </svg>
  );
}

export function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`m-chevron${open ? " is-open" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
