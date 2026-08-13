import type { ReactNode } from "react";
import type { ServiceId } from "../data/services";

/**
 * Fiber optic cable logo inspired by multi-core cable:
 * black jacket, silver collar, colored buffer tubes, glowing tips.
 */
export function BrandLogo() {
  const tubes = [
    { x: 78, y: 34, color: "#FACC15" },
    { x: 90, y: 42, color: "#EF4444" },
    { x: 94, y: 56, color: "#22C55E" },
    { x: 88, y: 70, color: "#38BDF8" },
    { x: 76, y: 78, color: "#EC4899" },
    { x: 64, y: 74, color: "#F97316" },
  ] as const;

  return (
    <svg className="m-logo" viewBox="0 0 140 120" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="jacketGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="45%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#0b1220" />
        </linearGradient>
        <linearGradient id="jacketShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.45" />
          <stop offset="40%" stopColor="#94a3b8" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="collarGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <radialGradient id="coreBurst" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#E0F2FE" />
          <stop offset="70%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
        </radialGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="strongGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Black outer jacket (U-curve) */}
      <path
        d="M8 88 C10 58, 18 34, 42 28 C52 25, 58 32, 60 42"
        stroke="url(#jacketGrad)"
        strokeWidth="22"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 88 C10 58, 18 34, 42 28 C52 25, 58 32, 60 42"
        stroke="url(#jacketShine)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Silver ribbed coupling collar */}
      <g transform="translate(52 34) rotate(18)">
        <rect x="0" y="0" width="16" height="28" rx="4" fill="url(#collarGrad)" />
        <path d="M3 5h10M3 10h10M3 15h10M3 20h10" stroke="#475569" strokeWidth="1.2" opacity="0.7" />
        <rect x="1" y="1" width="14" height="6" rx="2" fill="#ffffff" opacity="0.35" />
      </g>

      {/* Colored buffer tubes fanning out */}
      {tubes.map((tube, i) => {
        const startX = 66;
        const startY = 48;
        return (
          <g key={tube.color}>
            <line
              x1={startX}
              y1={startY}
              x2={tube.x - 4}
              y2={tube.y}
              stroke={tube.color}
              strokeWidth="5.5"
              strokeLinecap="round"
              opacity="0.95"
            />
            <line
              x1={startX}
              y1={startY}
              x2={tube.x - 4}
              y2={tube.y}
              stroke="#fff"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.25"
            />
            {/* thin glass fiber beyond tube */}
            <line
              x1={tube.x - 2}
              y1={tube.y}
              x2={tube.x + 10 + (i % 2)}
              y2={tube.y + (i - 2.5) * 1.5}
              stroke="#7DD3FC"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.9"
              filter="url(#softGlow)"
            />
            <circle
              cx={tube.x + 10 + (i % 2)}
              cy={tube.y + (i - 2.5) * 1.5}
              r="2.1"
              fill="#E0F2FE"
              filter="url(#softGlow)"
            />
          </g>
        );
      })}

      {/* Central bright glowing fiber tip */}
      <circle cx="78" cy="50" r="16" fill="url(#coreBurst)" filter="url(#strongGlow)" />
      <circle cx="78" cy="50" r="5.5" fill="#ffffff" filter="url(#strongGlow)" />
      <circle cx="78" cy="50" r="2.2" fill="#F0F9FF" />
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
