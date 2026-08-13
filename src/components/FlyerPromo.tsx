import { useState } from "react";
import {
  BRAND_EN,
  BRAND_HE,
  CTA_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  services,
  type ServiceId,
} from "../data/services";
import { BrandLogo, ChevronIcon, ServiceIcon } from "./FlatIcons";

export function FlyerPromo() {
  const [openId, setOpenId] = useState<ServiceId | null>(null);

  const toggle = (id: ServiceId) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <main className="m-shell">
      <article className="m-flyer" aria-label="סימון תקשורת">
        <svg
          className="m-bg-lines"
          viewBox="0 0 360 640"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="fiberGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
            </linearGradient>
            <filter id="fiberGlow" x="-20%" y="-200%" width="140%" height="500%">
              <feGaussianBlur stdDeviation="1.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M-40 130 L400 40"
            stroke="url(#fiberGrad)"
            strokeWidth="1.2"
            filter="url(#fiberGlow)"
          />
          <path
            d="M-40 300 L400 220"
            stroke="url(#fiberGrad)"
            strokeWidth="1"
            opacity="0.7"
            filter="url(#fiberGlow)"
          />
          <path
            d="M-40 470 L400 390"
            stroke="url(#fiberGrad)"
            strokeWidth="1.1"
            opacity="0.85"
            filter="url(#fiberGlow)"
          />
          <path
            d="M-20 560 L380 520"
            stroke="url(#fiberGrad)"
            strokeWidth="0.9"
            opacity="0.5"
            filter="url(#fiberGlow)"
          />
        </svg>

        <div className="m-vignette" aria-hidden="true" />

        <header className="m-header">
          <div className="m-logo-wrap">
            <BrandLogo />
          </div>
          <h1>{BRAND_HE}</h1>
          <p className="m-en">{BRAND_EN}</p>
        </header>

        <ul className="m-services">
          {services.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `service-panel-${item.id}`;
            const buttonId = `service-btn-${item.id}`;

            return (
              <li
                key={item.id}
                className={`m-service${isOpen ? " is-open" : ""}`}
                style={{ animationDelay: `${0.06 + index * 0.04}s` }}
              >
                <button
                  type="button"
                  id={buttonId}
                  className="m-service-btn"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                >
                  <span className="m-icon-well">
                    <ServiceIcon id={item.id} />
                  </span>
                  <span className="m-service-label">{item.label}</span>
                  <ChevronIcon open={isOpen} />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="m-service-panel"
                  hidden={!isOpen}
                >
                  <ul className="m-options">
                    {item.options.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <footer className="m-footer">
          <p className="m-cta-label">{CTA_LABEL}</p>
          <div className="m-rule" aria-hidden="true" />
          <a className="m-phone" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>

          <div className="m-actions">
            <a
              className="m-btn wa"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.97.58 3.8 1.58 5.35L2 22l4.96-1.63a9.86 9.86 0 0 0 5.08 1.39h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2zm5.75 14.08c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.96-4.39-.14-.2-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.36.26-.28.57-.35.76-.35h.55c.17 0 .4-.07.63.48.24.56.8 1.95.87 2.09.07.14.12.3.02.49-.1.2-.14.32-.28.49-.14.17-.3.38-.42.51-.14.14-.28.29-.12.56.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.59-.07.16-.17.68-.79.86-1.06.18-.28.36-.23.61-.14.24.1 1.54.73 1.8.86.27.13.44.2.51.31.07.11.07.64-.17 1.32z"
                />
              </svg>
              וואטסאפ
            </a>
            <a className="m-btn call" href={`tel:${PHONE_TEL}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                />
              </svg>
              חייג עכשיו
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
