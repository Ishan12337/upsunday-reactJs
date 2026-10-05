import React, { useState, useEffect } from "react";

// Rotating words after "Let's talk about something"
const WORDS = ["yours", "bold", "new", "big", "sunny"];

// Replace with your own assets
const IMAGES = [
  "https://upsunday.co/services/step-discover.webp",
  "https://upsunday.co/services/step-build.webp",
  "https://upsunday.co/brand/sun-3d.webp",
];

const EMAIL = "project@upsunday.co";

// Text-roll label: text is duplicated and slides up on hover
const Roll = ({ children }) => (
  <span className="relative inline-block h-[1.2em] overflow-hidden leading-[1.2em] align-middle">
    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
      {children}
    </span>
    <span className="block absolute top-full left-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
      {children}
    </span>
  </span>
);

export default function CTA() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="contact"
      className="w-full bg-[#F5F3EF] text-[#15191F] pt-24 pb-28 sm:pt-36 sm:pb-40 md:pt-44 md:pb-48 px-5 sm:px-8 md:px-12 lg:px-[10vw] overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto min-w-0 flex flex-col items-start">
        {/* SECTION LABEL */}
        <div className="mb-6 sm:mb-10">
          <span className="font-sans text-lg sm:text-xl font-normal text-[#15191F]/50 tracking-tight">
            Contact
          </span>
        </div>

        {/* HEADING WITH ROTATING WORD */}
        <h2 className="mb-12 sm:mb-16 md:mb-20 max-w-[1600px] min-w-0 font-sans text-[clamp(44px,8.5vw,130px)] font-medium leading-[0.95] tracking-[-0.04em] text-[#15191F]">
          Let’s talk
          <br />
          about something{" "}
          <span className="relative inline-grid overflow-hidden align-bottom pb-[0.1em]">
            {WORDS.map((word, i) => (
              <span
                key={word}
                aria-hidden={i !== index}
                className={`col-start-1 row-start-1 italic transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  i === index
                    ? "translate-y-0 opacity-100"
                    : i === (index - 1 + WORDS.length) % WORDS.length
                    ? "-translate-y-full opacity-0"
                    : "translate-y-full opacity-0"
                }`}
              >
                {word}
              </span>
            ))}
          </span>
        </h2>

        {/* ACTIONS + IMAGES */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <div className="flex flex-col items-start gap-6">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#15191F] text-[#F5F3EF] font-sans text-base sm:text-lg md:text-xl font-medium tracking-tight hover:bg-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15191F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F3EF]"
            >
              <Roll>Book a call</Roll>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="group font-sans text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-[#15191F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15191F] rounded-sm"
            >
              <Roll>{EMAIL}</Roll>
            </a>
          </div>

          <div className="flex items-end gap-3 sm:gap-4">
            {IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className={`object-cover rounded-2xl w-[28vw] max-w-[220px] ${
                  i === 1 ? "aspect-[3/4] translate-y-6" : "aspect-[4/5]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}