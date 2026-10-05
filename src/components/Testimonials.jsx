//import React from "react";

// ============================================================
// TESTIMONIAL DATA
// ============================================================

const testimonials = [
{
id: "left-coast",
brand: "LEFT COAST",
brandSecond: "DESIGN STUDIO",
quote:
"As a design studio, we're hard to impress. UpSunday matched the craft of our own work with clean lines, strong proportions, and nothing unnecessary.",
name: "Craig Trettau",
role: "Founder, Left Coast Design Studio",
cardClass: "bg-[#EEE7DC]",
logoClass: "text-[#171C22]",
dividerClass: "border-[#D9D1C5]",
},
{
id: "cobe",
brand: "COBE",
brandSecond: "CONSTRUCTION",
quote:
"UpSunday gave COBE a look that finally matches the quality of our builds. Clean, confident and built to last, just like our work.",
name: "Shaun Olson",
role: "President, COBE Construction Inc.",
cardClass: "bg-[#DDEBF4]",
logoClass: "text-[#171C22]",
dividerClass: "border-[#C9D9E3]",
},
{
id: "milk-cookies",
brand: "milk & cookies",
brandSecond: "",
quote:
"UpSunday gave our brand a shape it never had before. Every page feels considered—the type, the spacing, and the way it moves. It looks like us, just sharper.",
name: "Chasen McNaughton",
role: "Co-Founder, Milk & Cookies",
cardClass: "bg-[#050505]",
logoClass: "text-[#F4F1EB]",
dividerClass: "border-white/15",
dark: true,
},
{
id: "bad-birdie",
brand: "Bad Birdie",
brandSecond: "",
quote:
"The design has a shape and rhythm you feel as soon as the page loads. UpSunday took our ideas and made them feel inevitable.",
name: "Tanner Balisky",
role: "Bad Birdie",
cardClass: "bg-[#FAFAF8]",
logoClass: "text-[#171C22]",
dividerClass: "border-[#E2E0DB]",
},
];

// ============================================================
// TESTIMONIAL CARD
// ============================================================

function TestimonialCard({ testimonial }) {
const textColor = testimonial.dark
? "text-[#F5F3EE]"
: "text-[#171C22]";

const mutedColor = testimonial.dark
? "text-white/55"
: "text-[#73777C]";

return (
<article
className={[
"flex min-w-0 h-full flex-col overflow-hidden rounded-[28px]",
"transition-transform duration-300",
"hover:-translate-y-1",
testimonial.cardClass,
].join(" ")}
>
{/* =====================================================
COLOR / BRAND AREA
No image is used here.
===================================================== */}


  <div className="relative flex h-[250px] shrink-0 flex-col justify-end p-7 sm:h-[270px] sm:p-8 lg:h-[290px]">
    {/* Simple decorative color shapes.
        These replace the image while preserving the
        visual weight of the original media area. */}

    {testimonial.id === "left-coast" && (
      <>
        <div className="absolute left-[32%] top-[26%] h-16 w-16 rounded-full bg-[#B8B39F]/70 blur-[1px]" />
        <div className="absolute right-[-12px] top-[16%] h-32 w-20 rotate-[-8deg] rounded-[8px] bg-[#292A29]/90" />
        <div className="absolute right-[20%] top-[10%] h-24 w-24 rounded-[4px] border-[10px] border-[#D7D0C4]" />
      </>
    )}

    {testimonial.id === "cobe" && (
      <>
        <div className="absolute left-1/2 top-[18%] h-20 w-32 -translate-x-1/2 rounded-[45%] bg-[#5C789B] shadow-[inset_0_-8px_0_rgba(30,50,70,0.15)]" />
        <div className="absolute left-1/2 top-[28%] h-2 w-28 -translate-x-1/2 rounded-full bg-[#D74C65]" />
        <div className="absolute left-1/2 top-[34%] h-2 w-28 -translate-x-1/2 rounded-full bg-[#D74C65]" />
        <div className="absolute left-1/2 top-[38%] h-5 w-36 -translate-x-1/2 rounded-sm bg-[#D8D6D0]" />
      </>
    )}

    {testimonial.id === "milk-cookies" && (
      <>
        <div className="absolute right-[18%] top-[13%] h-32 w-28 rotate-[7deg] rounded-[8px] bg-[#252525]" />
        <div className="absolute right-[14%] top-[42%] flex gap-1">
          <span className="h-12 w-12 rounded-full bg-[#C99A5B]" />
          <span className="h-12 w-12 rounded-full bg-[#D4A665]" />
          <span className="h-12 w-12 rounded-full bg-[#BD8E4F]" />
        </div>
      </>
    )}

    {testimonial.id === "bad-birdie" && (
      <>
        <div className="absolute left-1/2 top-[12%] h-32 w-32 -translate-x-1/2 rounded-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)]" />
        <div className="absolute left-[38%] top-[22%] h-5 w-5 rounded-full bg-[#F5A5C7]" />
        <div className="absolute left-[55%] top-[28%] h-6 w-6 rounded-full bg-[#F4D45E]" />
        <div className="absolute left-[62%] top-[18%] h-5 w-5 rounded-full bg-[#7ED8D1]" />
        <div className="absolute left-1/2 top-[42%] h-12 w-5 -translate-x-1/2 rounded-b-full bg-[#E967A8]" />
      </>
    )}

    {/* Brand treatment */}
    <div className="relative z-10">
      {testimonial.id === "left-coast" && (
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center bg-[#171C22] [clip-path:polygon(0_0,100%_0,100%_28%,38%_28%,38%_100%,0_100%)]" />
          <div className={`font-sans text-[21px] font-bold leading-[0.88] tracking-[-0.04em] ${testimonial.logoClass}`}>
            <div>{testimonial.brand}</div>
            <div>{testimonial.brandSecond}</div>
          </div>
        </div>
      )}

      {testimonial.id === "cobe" && (
        <div
          className={`inline-flex flex-col border-y-[3px] border-current py-1 font-sans text-[25px] font-bold leading-[0.82] tracking-[-0.055em] ${testimonial.logoClass}`}
        >
          <span>{testimonial.brand}</span>
          <span className="text-[16px] tracking-[-0.03em]">
            {testimonial.brandSecond}
          </span>
        </div>
      )}

      {testimonial.id === "milk-cookies" && (
        <div
          className={`font-mono text-[25px] font-medium leading-none tracking-[-0.06em] ${testimonial.logoClass}`}
        >
          {testimonial.brand}
        </div>
      )}

      {testimonial.id === "bad-birdie" && (
        <div
          className={`font-serif text-[34px] italic leading-none tracking-[-0.07em] ${testimonial.logoClass}`}
        >
          {testimonial.brand}
        </div>
      )}
    </div>
  </div>

  {/* =====================================================
      QUOTE + ATTRIBUTION
      ===================================================== */}

  <div className="flex flex-1 flex-col p-7 sm:p-8">
    <blockquote className="min-w-0 flex-1">
      <p
        className={[
          "font-sans text-[20px] font-normal leading-[1.42]",
          "tracking-[-0.018em]",
          "sm:text-[21px] lg:text-[22px]",
          textColor,
        ].join(" ")}
      >
        “{testimonial.quote}”
      </p>
    </blockquote>

    {/* Divider */}
    <div
      className={`mt-10 border-t ${testimonial.dividerClass}`}
    />

    {/* Person */}
    <footer className="mt-6 flex items-center gap-4">
      {/* Small monochrome avatar placeholder.
          No external image is used. */}
      <div
        className={[
          "flex h-11 w-11 shrink-0 items-end justify-center overflow-hidden rounded-full",
          testimonial.dark ? "bg-white/15" : "bg-black/10",
        ].join(" ")}
      >
        <div
          className={[
            "mb-[-2px] h-8 w-6 rounded-t-full",
            testimonial.dark ? "bg-white/75" : "bg-[#62666A]/65",
          ].join(" ")}
        />
      </div>

      <div className="min-w-0">
        <p
          className={[
            "font-sans text-[16px] font-medium leading-[1.2] tracking-[-0.015em]",
            textColor,
          ].join(" ")}
        >
          {testimonial.name}
        </p>

        <p
          className={[
            "mt-1 font-sans text-[14px] leading-[1.3]",
            mutedColor,
          ].join(" ")}
        >
          {testimonial.role}
        </p>
      </div>
    </footer>
  </div>
</article>

);
}

// ============================================================
// MAIN TESTIMONIALS SECTION
// ============================================================

export default function Testimonials() {
return ( <section
   id="testimonials"
   className="w-full overflow-hidden bg-[#F2EFE9] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 md:px-10 md:pb-28 md:pt-32 lg:px-[10vw] lg:pt-36"
 > <div className="mx-auto w-full max-w-[1332px]">
{/* Section label */} <div className="mb-7 sm:mb-8"> <span className="font-sans text-[16px] font-medium tracking-[-0.02em] text-[#A7ADB4] sm:text-[17px]">
Testimonials </span> </div>


    {/* Main heading */}
    <div className="mb-14 max-w-[1320px] sm:mb-16 md:mb-20">
      <h2 className="font-sans text-[clamp(42px,5.35vw,78px)] font-medium leading-[0.94] tracking-[-0.055em] text-[#171C22]">
        Straight from the founders we build for
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
    </div>
  </div>
</section>


);
}
