import type { ReactNode } from "react";
import type { ServiceId } from "../data/services";

/** Fiber-optic cable cross-section logo */
export function BrandLogo() {
  return (
    <svg className="m-logo" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="fiberCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0FFFF" />
          <stop offset="45%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </radialGradient>
        <linearGradient id="fiberRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7DF9FF" />
          <stop offset="100%" stopColor="#F5D76E" />
        </linearGradient>
        <filter id="fiberLogoGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* outer jacket */}
      <circle
        cx="60"
        cy="60"
        r="46"
        fill="#0B1728"
        stroke="url(#fiberRing)"
        strokeWidth="3"
        filter="url(#fiberLogoGlow)"
      />
      <circle cx="60" cy="60" r="38" fill="#132338" stroke="#1E3A5F" strokeWidth="2" />

      {/* cladding ring */}
      <circle cx="60" cy="60" r="26" fill="#0A1628" stroke="#38BDF8" strokeWidth="2.5" opacity="0.9" />

      {/* glowing core */}
      <circle cx="60" cy="60" r="12" fill="url(#fiberCore)" filter="url(#fiberLogoGlow)" />
      <circle cx="60" cy="60" r="5" fill="#F8FAFC" opacity="0.9" />

      {/* light rays suggesting optic signal */}
      <path
        d="M60 14v12M60 94v12M14 60h12M94 60h12"
        stroke="#00E5FF"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M28 28l8 8M84 84l8 8M84 28l-8 8M36 84l-8 8"
        stroke="#F5D76E"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
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
