//import React from "react";

const stats = [
{
id: "projects",
value: "40+",
description: "Projects designed, built and launched.",
},
{
id: "awards",
value: "12+",
description: "Awards from Awwwards and CSS Design Awards.",
},
{
id: "views",
value: "10M+",
description: "Monthly views across the sites we've built.",
},
];

export default function Stats() {
return ( <section
   id="by-the-numbers"
   className="w-full bg-[#F4F1ED] text-[#171C22]"
 > <div className="mx-auto w-full max-w-[1325px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:px-0 lg:py-[120px]">


    {/* Section label */}
    <div className="mb-5 sm:mb-6">
      <p
        className="text-[17px] font-normal leading-none tracking-[-0.02em] text-[#9AA0A8] sm:text-[19px]"
      >
        By the numbers
      </p>
    </div>

    {/* Main heading */}
    <div className="mb-12 max-w-[1280px] sm:mb-16 md:mb-[68px]">
      <h2
        className="
          max-w-[1280px]
          text-[48px]
          font-medium
          leading-[0.96]
          tracking-[-0.055em]
          text-[#171C22]
          sm:text-[60px]
          md:text-[70px]
          lg:text-[78px]
          xl:text-[82px]
        "
      >
        Work that performs as well as it looks
      </h2>
    </div>

    {/* Statistics */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
      {stats.map((stat) => (
        <article
          key={stat.id}
          className="
            flex
            min-h-[360px]
            w-full
            flex-col
            justify-between
            rounded-[28px]
            bg-white
            px-7
            py-8
            sm:min-h-[390px]
            sm:px-9
            sm:py-10
            md:min-h-[417px]
            md:rounded-[29px]
            md:px-12
            md:py-11
            lg:px-[48px]
          "
        >
          {/* Number */}
          <div
            className="
              pt-1
              text-[88px]
              font-medium
              leading-[0.86]
              tracking-[-0.065em]
              text-[#171C22]
              sm:text-[100px]
              md:text-[108px]
              lg:text-[112px]
            "
          >
            {stat.value}
          </div>

          {/* Description */}
          <p
            className="
              max-w-[330px]
              text-[18px]
              font-normal
              leading-[1.28]
              tracking-[-0.025em]
              text-[#858C96]
              sm:text-[19px]
              md:text-[20px]
            "
          >
            {stat.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>


);
}
