import React, { useEffect, useRef, useState } from "react";
import { Video } from "lucide-react";
import "./styling/Navbar.css";

/* ---------- Content (yahin se sab badlo, ya props se pass karo) ---------- */
const DEFAULTS = {
  logoSrc: "https://upsunday.co/brand/logo-dark.svg",
  logoAlt: "upsunday",
  homeHref: "/",
  items: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  activeHref: null, // null = current URL se apne aap
  chatLabel: "Chat with us",
  chatHref: "/contact",
  menuLabel: "Menu",
  closeLabel: "Close",
  cardLabel: "Start a project",
  email: "project@upsunday.co",
  whatsappLabel: "WhatsApp +1 (619) 394-1861",
  whatsappHref: "https://wa.me/16193941861",
  callLabel: "Book a call",
  callHref: "/contact",
  note: "Working worldwide. Happy to meet in person, anywhere.",
  socials: [
    { name: "Instagram", href: "https://instagram.com/upsundayco", icon: "instagram" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jakeuiux", icon: "linkedin" },
    { name: "X", href: "https://x.com/jakeuiux", icon: "x" },
  ],
};

/* ---------- Icons ---------- */
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-4.5 3.5V17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  const rays = [
    { a: -80, c: "#9fa8ef" },
    { a: -52, c: "#ffd2b0" },
    { a: -26, c: "#ff8f62" },
    { a: 0, c: "#ff8f62" },
    { a: 26, c: "#ff8f62" },
    { a: 52, c: "#ffd2b0" },
    { a: 80, c: "#9fa8ef" },
  ];
  return (
    <svg viewBox="0 0 80 44" aria-hidden="true">
      <defs>
        <linearGradient id="nb-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffc9a3" />
          <stop offset="1" stopColor="#f58b5a" />
        </linearGradient>
      </defs>
      {rays.map((r) => (
        <line
          key={r.a}
          x1="40"
          y1="8"
          x2="40"
          y2="16"
          stroke={r.c}
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${r.a} 40 40)`}
        />
      ))}
      <path d="M20 40a20 20 0 0 1 40 0Z" fill="url(#nb-sun)" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M8 10.5V16M8 7.8v.1M11.5 16v-5.5m0 2.2c0-1.4 1-2.2 2.2-2.2 1.3 0 2.3.8 2.3 2.4V16" strokeLinecap="round" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.41L6.45 22H3.34l7.24-8.28L3 2h6.4l4.43 5.85L18.9 2Zm-1.1 17.75h1.73L8.46 4.14H6.6L17.8 19.75Z" />
    </svg>
  ),
};

/* Text roll (hover par text upar slide hota hai) */
function Roll({ children }) {
  return (
    <span className="nb-roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

/* ---------- Navbar ---------- */
export default function Navbar(props) {
  const c = { ...DEFAULTS, ...props };
  const [open, setOpen] = useState(false);

  const menuBtnRef = useRef(null);
  const dropRef = useRef(null);
  const firstLinkRef = useRef(null);

  const current =
    c.activeHref ?? (typeof window !== "undefined" ? window.location.pathname : "/");
  const isActive = (href) => (href === "/" ? current === "/" : current.startsWith(href));

  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => menuBtnRef.current?.focus());
  };

  useEffect(() => {
    if (!open) return;

    requestAnimationFrame(() => firstLinkRef.current?.focus());

    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    const onClickOutside = (e) => {
      if (dropRef.current?.contains(e.target)) return;
      if (menuBtnRef.current?.contains(e.target)) return;
      setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const tab = open ? 0 : -1;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="nb">
        <a href={c.homeHref} className="nb-logo" aria-label={c.logoAlt} onClick={() => setOpen(false)}>
          <img src={c.logoSrc} alt={c.logoAlt} />
        </a>

        <div className="nb-actions">
          <a href={c.chatHref} className="nb-pill nb-pill--chat">
            <Roll>{c.chatLabel}</Roll>
            <span className="nb-icon">
              <ChatIcon />
            </span>
          </a>

          <button
            ref={menuBtnRef}
            type="button"
            className="nb-pill nb-pill--menu"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <span className="nb-swap">
              <span>{c.menuLabel}</span>
              <span aria-hidden="true">{c.closeLabel}</span>
            </span>
            <span className="nb-icon">
              <span className="nb-dots" aria-hidden="true">
                <i />
                <i />
              </span>
            </span>
          </button>
        </div>
      </header>

      {/* ================= DROPDOWN MENU ================= */}
      <div
        id="site-menu"
        ref={dropRef}
        className={`nb-drop${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="nb-panel" aria-label="Main navigation">
          {c.items.map((item, i) => (
            <a
              key={item.label}
              ref={i === 0 ? firstLinkRef : null}
              href={item.href}
              tabIndex={tab}
              className="nb-link"
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span>{item.label}</span>
              {isActive(item.href) && <i className="nb-dot" aria-hidden="true" />}
            </a>
          ))}
        </nav>

        <div className="nb-card">
          <div className="nb-card-top">
            <div>
              <p className="nb-card-label">{c.cardLabel}</p>
              <a href={`mailto:${c.email}`} className="nb-card-email" tabIndex={tab}>
                {c.email}
              </a>
              <a
                href={c.whatsappHref}
                className="nb-card-wa"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={tab}
              >
                {c.whatsappLabel}
              </a>
            </div>
            <span className="nb-sun">
              <SunIcon />
            </span>
          </div>

          <a href={c.callHref} className="nb-book" tabIndex={tab} onClick={() => setOpen(false)}>
            <Roll>{c.callLabel}</Roll>
            <span className="nb-book-icon">
              <Video strokeWidth={1.8} />
            </span>
          </a>

          <div className="nb-card-bottom">
            <p className="nb-note">{c.note}</p>
            <div className="nb-socials">
              {c.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  tabIndex={tab}
                >
                  {SOCIAL_ICONS[s.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}