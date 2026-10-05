//import React from "react";

// ============================================================
// RECOGNITION DATA
// ============================================================

const recognitions = [
{
id: "awwwards-honors",
title: "Awwwards Honors",
color: "#999999",
textColor: "#F5F5F3",
accentColor: "#D8D8D8",
style: "awwwards",
},
{
id: "cssda-best-ui",
title: "CSSDA Best UI",
color: "#FF956C",
textColor: "#FFFFFF",
accentColor: "#FFFFFF",
style: "ui",
},
{
id: "cssda-best-ux",
title: "CSSDA Best UX",
color: "#24356D",
textColor: "#FFFFFF",
accentColor: "#FFFFFF",
style: "ux",
},
{
id: "cssda-best-innovation",
title: "CSSDA Best Innovation",
color: "#B85F45",
textColor: "#FFFFFF",
accentColor: "#FFFFFF",
style: "innovation",
},
{
id: "cssda-special-kudos",
title: "CSSDA Special Kudos",
color: "#4B68C5",
textColor: "#FFFFFF",
accentColor: "#FFFFFF",
style: "kudos",
},
];

// ============================================================
// POSTER PLACEHOLDER
// ============================================================

function AwardPoster({ item }) {
return (
<div
className="relative aspect-[5/7] w-full overflow-hidden rounded-[18px] sm:rounded-[19px] lg:rounded-[20px]"
style={{
backgroundColor: item.color,
}}
aria-hidden="true"
>
{/* ------------------------------------------------------
AWWWARDS HONORS
------------------------------------------------------ */}


  {item.style === "awwwards" && (
    <div
      className="absolute inset-0 p-5 sm:p-6"
      style={{ color: item.textColor }}
    >
      <div className="text-[24px] font-bold leading-none tracking-[-0.06em]">
        W.
      </div>

      <div className="mt-10 text-[25px] font-bold leading-[1.05] tracking-[-0.045em] sm:text-[28px]">
        Honors
      </div>

      <div className="mt-1 text-[20px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[22px]">
        April 24, 2026
      </div>

      <div className="absolute bottom-[21%] left-5 right-5 sm:left-6 sm:right-6">
        <div className="text-[18px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[20px]">
          Left Coast
        </div>

        <div className="text-[18px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[20px]">
          Design Studio
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[7px] uppercase tracking-[0.02em] opacity-70 sm:left-6 sm:right-6">
        <span>awwwards.winners</span>
        <span>2026</span>
      </div>
    </div>
  )}

  {/* ------------------------------------------------------
      CSSDA BEST UI
      ------------------------------------------------------ */}

  {item.style === "ui" && (
    <div
      className="absolute inset-0"
      style={{ color: item.textColor }}
    >
      <div className="absolute left-6 top-6 text-[6px] font-bold uppercase tracking-[0.15em] sm:left-7 sm:top-7">
        Awarded to:
      </div>

      <div className="absolute left-6 top-9 text-[6px] font-bold uppercase tracking-[0.08em] sm:left-7 sm:top-10">
        RefractWeb
      </div>

      <div className="absolute left-1/2 top-[27%] -translate-x-1/2">
        <div className="relative h-[120px] w-[115px] sm:h-[140px] sm:w-[135px]">
          <div className="absolute left-2 top-0 h-[110px] w-[15px] rounded-sm border-[3px] border-white sm:h-[130px]" />
          <div className="absolute left-8 top-4 h-[110px] w-[15px] rounded-sm border-[3px] border-white sm:h-[130px]" />
          <div className="absolute left-14 top-8 h-[110px] w-[15px] rounded-sm border-[3px] border-white sm:h-[130px]" />
          <div className="absolute left-[52px] top-[50px] h-[50px] w-[60px] rounded-full border-[3px] border-white sm:left-[58px]" />
        </div>
      </div>

      <div className="absolute bottom-[13%] left-6 text-[12px] font-bold leading-[1.05] uppercase sm:left-7 sm:text-[14px]">
        Left Coast
        <br />
        Design Studio
      </div>

      <div className="absolute bottom-5 right-5 text-[6px] uppercase tracking-[0.08em] sm:right-7">
        CSS Design Awards
      </div>
    </div>
  )}

  {/* ------------------------------------------------------
      CSSDA BEST UX
      ------------------------------------------------------ */}

  {item.style === "ux" && (
    <div
      className="absolute inset-0"
      style={{ color: item.textColor }}
    >
      <div className="absolute left-6 top-6 text-[6px] font-bold uppercase tracking-[0.15em] sm:left-7 sm:top-7">
        Awarded to:
      </div>

      <div className="absolute left-6 top-9 text-[6px] font-bold uppercase tracking-[0.08em] sm:left-7 sm:top-10">
        RefractWeb
      </div>

      <div className="absolute left-1/2 top-[30%] -translate-x-1/2">
        <div className="relative h-[120px] w-[130px] sm:h-[140px] sm:w-[145px]">
          <div className="absolute left-0 top-0 h-[75px] w-[24px] rounded-sm border-[3px] border-white" />
          <div className="absolute left-8 top-5 h-[75px] w-[24px] rounded-sm border-[3px] border-white" />
          <div className="absolute left-16 top-10 h-[75px] w-[24px] rounded-sm border-[3px] border-white" />
          <div className="absolute right-0 top-2 h-10 w-10 rounded-full border-[3px] border-white" />
          <div className="absolute bottom-0 left-5 h-10 w-16 rotate-[-12deg] border-[3px] border-white" />
        </div>
      </div>

      <div className="absolute bottom-[13%] left-6 text-[12px] font-bold leading-[1.05] uppercase sm:left-7 sm:text-[14px]">
        Left Coast
        <br />
        Design Studio
      </div>

      <div className="absolute bottom-5 right-5 text-[6px] uppercase tracking-[0.08em] sm:right-7">
        CSS Design Awards
      </div>
    </div>
  )}

  {/* ------------------------------------------------------
      CSSDA BEST INNOVATION
      ------------------------------------------------------ */}

  {item.style === "innovation" && (
    <div
      className="absolute inset-0"
      style={{ color: item.textColor }}
    >
      <div className="absolute left-6 top-6 text-[6px] font-bold uppercase tracking-[0.15em] sm:left-7 sm:top-7">
        Awarded to:
      </div>

      <div className="absolute left-6 top-9 text-[6px] font-bold uppercase tracking-[0.08em] sm:left-7 sm:top-10">
        RefractWeb
      </div>

      <div className="absolute left-1/2 top-[27%] -translate-x-1/2 text-center text-[38px] font-black leading-[0.72] tracking-[-0.08em] sm:text-[45px]">
        IN
        <br />
        NO
        <br />
        VA
        <br />
        TION
      </div>

      <div className="absolute bottom-[13%] left-6 text-[12px] font-bold leading-[1.05] uppercase sm:left-7 sm:text-[14px]">
        Left Coast
        <br />
        Design Studio
      </div>

      <div className="absolute bottom-5 right-5 text-[6px] uppercase tracking-[0.08em] sm:right-7">
        CSS Design Awards
      </div>
    </div>
  )}

  {/* ------------------------------------------------------
      CSSDA SPECIAL KUDOS
      ------------------------------------------------------ */}

  {item.style === "kudos" && (
    <div
      className="absolute inset-0"
      style={{ color: item.textColor }}
    >
      <div className="absolute left-6 top-6 text-[6px] font-bold uppercase tracking-[0.15em] sm:left-7 sm:top-7">
        Awarded to:
      </div>

      <div className="absolute left-6 top-9 text-[6px] font-bold uppercase tracking-[0.08em] sm:left-7 sm:top-10">
        RefractWeb
      </div>

      <div className="absolute left-1/2 top-[35%] w-[75%] -translate-x-1/2 -rotate-[18deg]">
        <div className="border-[2px] border-white px-3 py-2 text-center text-[13px] font-bold uppercase tracking-[0.02em] sm:text-[15px]">
          Special
        </div>

        <div className="-mt-[1px] ml-5 border-[2px] border-white px-3 py-2 text-center text-[13px] font-bold uppercase tracking-[0.02em] sm:text-[15px]">
          Kudos
        </div>

        <div className="-mt-[1px] ml-10 border-[2px] border-white px-3 py-2 text-center text-[13px] font-bold uppercase tracking-[0.02em] sm:text-[15px]">
          Awards
        </div>
      </div>

      <div className="absolute bottom-[13%] left-6 text-[12px] font-bold leading-[1.05] uppercase sm:left-7 sm:text-[14px]">
        Left Coast
        <br />
        Design Studio
      </div>

      <div className="absolute bottom-5 right-5 text-[6px] uppercase tracking-[0.08em] sm:right-7">
        CSS Design Awards
      </div>
    </div>
  )}
</div>


);
}

// ============================================================
// RECOGNITION CARD
// ============================================================

function RecognitionCard({ item }) {
return ( <article className="min-w-0"> <AwardPoster item={item} />


  <h3 className="mt-5 font-sans text-[18px] font-normal leading-[1.2] tracking-[-0.025em] text-[#171C22] sm:text-[19px] lg:text-[20px]">
    {item.title}
  </h3>
</article>


);
}

// ============================================================
// MAIN RECOGNITION SECTION
// ============================================================

export default function Recognition() {
return ( <section
   id="recognition"
   className="w-full overflow-hidden bg-[#F4F1EB] px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-28 md:px-10 md:pb-32 md:pt-32 lg:px-12 lg:pt-36"
 > <div className="mx-auto w-full max-w-[1325px]">
{/* ====================================================
SECTION LABEL
==================================================== */}


    <div className="mb-7 sm:mb-8">
      <span className="font-sans text-[16px] font-medium leading-none tracking-[-0.02em] text-[#A6ACB3] sm:text-[17px]">
        Recognition
      </span>
    </div>

    {/* ====================================================
        MAIN HEADING
        ==================================================== */}

    <div className="mb-14 sm:mb-16 md:mb-17 lg:mb-16">
      <h2 className="max-w-[1100px] font-sans text-[clamp(46px,5.25vw,78px)] font-medium leading-[0.94] tracking-[-0.055em] text-[#171C22]">
        Work the design world noticed
      </h2>
    </div>

    {/* ====================================================
        FIVE AWARD POSTERS
        ==================================================== */}

    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-[18px]">
      {recognitions.map((item) => (
        <RecognitionCard key={item.id} item={item} />
      ))}
    </div>
  </div>
</section>


);
}
