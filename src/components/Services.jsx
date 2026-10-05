//import React from "react";
import { ArrowUpRight } from "lucide-react";

// ======================================================
// SERVICE IMAGES
// Change only these paths if your filenames are different
// ======================================================

import brandImage from "../assets/services/service-1.jpg";
import webImage from "../assets/services/service-2.jpg";
import softwareImage from "../assets/services/service-3.jpg";
import motionImage from "../assets/services/service-4.jpg";

// ======================================================
// SERVICES DATA
// Single source of truth for all service cards
// ======================================================

const services = [
{
id: "brand",
title: "Brand",
image: brandImage,
description:
"Identities people know at a glance and remember long after.",
capabilities: ["Identity", "Logo systems", "Guidelines"],
},
{
id: "web",
title: "Web",
image: webImage,
description:
"Websites that load fast, look sharp and turn visitors into clients.",
capabilities: ["UI/UX", "Development", "CMS"],
},
{
id: "software",
title: "Software",
image: softwareImage,
description:
"Custom apps, portals and AI features that run the business behind the brand.",
capabilities: ["Web apps", "Dashboards", "AI features"],
},
{
id: "motion",
title: "Motion",
image: motionImage,
description:
"Movement and 3D that make your brand impossible to scroll past.",
capabilities: ["3D", "Animation", "Interaction"],
},
];

// ======================================================
// REUSABLE SERVICE CARD
// ======================================================

function ServiceCard({ service }) {
return ( <article
   className="
     group
     flex
     min-w-0
     flex-col
     overflow-hidden
     rounded-[28px]
     bg-[#252D38]
     p-5
     transition-transform
     duration-500
     hover:-translate-y-1
   "
 >
{/* Image */} <div
     className="
       relative
       aspect-[0.76]
       w-full
       overflow-hidden
       rounded-[20px]
       bg-[#F1EEE7]
     "
   >
<img
src={service.image}
alt={`${service.title} service`}
className="
absolute
inset-0
h-full
w-full
object-cover
transition-transform
duration-700
ease-out
group-hover:scale-[1.025]
"
/> </div>


  {/* Title + Arrow */}
  <div className="mt-8 flex items-center justify-between gap-3">
    <h3
      className="
        text-[42px]
        font-medium
        leading-[0.95]
        tracking-[-0.055em]
        text-[#F5F5F3]
        sm:text-[46px]
        lg:text-[48px]
      "
    >
      {service.title}
    </h3>

    <div
      className="
        flex
        h-[54px]
        w-[54px]
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#F7F7F5]
        text-[#171C22]
        opacity-0
        translate-x-2
        scale-90
        transition-all
        duration-300
        group-hover:translate-x-0
        group-hover:scale-100
        group-hover:opacity-100
      "
    >
      <ArrowUpRight
        size={24}
        strokeWidth={1.8}
      />
    </div>
  </div>

  {/* Description */}
  <p
    className="
      mt-6
      max-w-[270px]
      text-[18px]
      font-normal
      leading-[1.3]
      tracking-[-0.025em]
      text-[#A5ACB5]
      sm:text-[19px]
    "
  >
    {service.description}
  </p>

  {/* Capability Pills */}
  <div className="mt-7 flex flex-wrap gap-2 pb-1">
    {service.capabilities.map((capability) => (
      <span
        key={capability}
        className="
          rounded-full
          bg-[#2C3541]
          px-[18px]
          py-[9px]
          text-[15px]
          font-normal
          leading-none
          tracking-[-0.015em]
          text-[#D9DDE1]
          sm:text-[16px]
        "
      >
        {capability}
      </span>
    ))}
  </div>
</article>


);
}

// ======================================================
// SERVICES SECTION
// ======================================================

export default function Services() {
return ( <section
   id="services"
   className="
     w-full
     overflow-hidden
     bg-[#151A20]
     text-[#F5F5F3]
   "
 > <div
     className="
       mx-auto
       w-full
       max-w-[1325px]
       px-5
       py-20
       sm:px-8
       sm:py-24
       md:px-10
       md:py-28
       lg:px-0
       lg:py-[120px]
     "
   >
{/* Section Label */} <div className="mb-5 sm:mb-6"> <span
         className="
           text-[17px]
           font-normal
           leading-none
           tracking-[-0.02em]
           text-[#8F969F]
           sm:text-[19px]
         "
       >
Services </span> </div>


    {/* Section Heading */}
    <div className="mb-12 max-w-[1200px] sm:mb-16 md:mb-[68px]">
      <h2
        className="
          text-[48px]
          font-medium
          leading-[0.94]
          tracking-[-0.055em]
          text-[#F5F5F3]
          sm:text-[60px]
          md:text-[70px]
          lg:text-[78px]
          xl:text-[82px]
        "
      >
        Everything your brand needs, built by one team
      </h2>
    </div>

    {/* Service Cards */}
    <div
      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        sm:gap-5
        lg:grid-cols-4
      "
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  </div>
</section>

);
}
