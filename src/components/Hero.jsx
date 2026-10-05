import React from "react";
import "./styling/Hero.css";

function Arrow() {
  return (
    <svg className="hero-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M13 7L18 12L13 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const scrollToWork = (event) => {
    event.preventDefault();
    const workSection = document.getElementById("work");
    if (!workSection) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    workSection.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero-section" aria-label="Introduction">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Brands &<br />
            Websites
          </h1>

          <div className="hero-info">
            <p className="hero-description">
              We design brands and build websites, software and motion for businesses ready to grow.
              <br />
              Great work doesn't wait for Monday.
              <br />
              Always UpSunday.
            </p>

            <div className="hero-actions">
              <a href="#work" onClick={scrollToWork} className="hero-button hero-button-dark">
                <span>See the work</span>
                <span className="hero-button-icon">
                  <Arrow />
                </span>
              </a>

              <a href="/contact" className="hero-button hero-button-light">
                <span>Start a project</span>
                <span className="hero-button-icon">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}