
//import React from "react";

import milkCookiesImage from "../assets/work/cover-1.jpg";
import leftCoastImage from "../assets/work/cover-2.jpg";

//import clients from "../data/clients";
import "./styling/Work.css";

const projects = [
  {
    id: "milk-and-cookies",
    title: "Milk and Cookies",
    image: milkCookiesImage,
    categories: ["Brand", "Web"],
    href: "/work/milk-and-cookies",
  },
  {
    id: "left-coast-design-studio",
    title: "Left Coast Design Studio",
    image: leftCoastImage,
    categories: ["Web"],
    href: "/work/left-coast-design-studio",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="work-project group min-w-0">
      <a
        href={project.href}
        className="work-project-link block"
        aria-label={`View ${project.title}`}
      >
        <div
          className="
            work-project-image
            relative
            w-full
            overflow-hidden
            rounded-[28px]
            bg-[#E6E3DE]
            aspect-[1.08/1]
            sm:rounded-[30px]
          "
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              block
              h-full
              w-full
              object-cover
              transition-transform
              duration-[900ms]
              ease-out
              group-hover:scale-[1.025]
            "
          />
        </div>

        <div
          className="
            mt-5
            flex
            items-start
            justify-between
            gap-5
          "
        >
          <h3
            className="
              min-w-0
              text-[24px]
              font-normal
              leading-[1]
              tracking-[-0.045em]
              text-[#171C22]
              sm:text-[27px]
              lg:text-[30px]
            "
          >
            {project.title}
          </h3>

          <div
            className="
              flex
              shrink-0
              flex-wrap
              justify-end
              gap-2
            "
          >
            {project.categories.map((category) => (
              <span
                key={category}
                className="
                  rounded-full
                  bg-white
                  px-4
                  py-[9px]
                  text-[13px]
                  font-normal
                  leading-none
                  tracking-[-0.02em]
                  text-[#252A30]
                  sm:text-[14px]
                "
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}

// function TrustedClients() {
//   return (
//     <div className="mt-[150px]">
//       <div
//         className="
//           grid
//           gap-10
//           md:grid-cols-[300px_1fr]
//           md:items-center
//           lg:grid-cols-[360px_1fr]
//         "
//       >
//         {/* Fixed heading — never affected by client hover */}
//         <h3
//           className="
//             text-[21px]
//             font-normal
//             leading-[1.12]
//             tracking-[-0.04em]
//             text-[#171C22]
//             sm:text-[23px]
//           "
//         >
//           Trusted by founders
//           <br className="hidden md:block" />
//           {" "}and growing brands
//         </h3>

//         {/* Client names */}
//         <div className="work-clients">
//           {clients.map((client) => (
//             <a
//               key={client.id}
//               href="#"
//               className="work-client"
//               style={{
//                 "--client-font-family": client.fontFamily,
//                 "--client-font-size": client.fontSize,
//                 "--client-font-weight": client.fontWeight,
//                 "--client-letter-spacing": client.letterSpacing,
//               }}
//             >
//               {client.name}
//             </a>
//           ))}
//         </div>

//         {/* 2 */}
//           <div className="work-clients">
//           {clients.map((client) => (
//             <a
//               key={client.id}
//               href="#"
//               className="work-client"
//               style={{
//                 "--client-font-family": client.fontFamily,
//                 "--client-font-size": client.fontSize,
//                 "--client-font-weight": client.fontWeight,
//                 "--client-letter-spacing": client.letterSpacing,
//               }}
//             >
//               {client.name}
//             </a>
//           ))}
//         </div>

//         {/* 3 */}
//           <div className="work-clients">
//           {clients.map((client) => (
//             <a
//               key={client.id}
//               href="#"
//               className="work-client"
//               style={{
//                 "--client-font-family": client.fontFamily,
//                 "--client-font-size": client.fontSize,
//                 "--client-font-weight": client.fontWeight,
//                 "--client-letter-spacing": client.letterSpacing,
//               }}
//             >
//               {client.name}
//             </a>
//           ))}
//         </div>





//       </div>
//     </div>
//   );
// }

// function TrustedClients() {
//   return (
//     <div className="mt-[150px]">
//       <div
//         className="
//           grid
//           gap-10
//           md:grid-cols-[300px_1fr]
//           md:items-center
//           lg:grid-cols-[360px_1fr]
//         "
//       >
//         {/* Fixed heading */}
//         <h3
//           className="
//             text-[21px]
//             font-normal
//             leading-[1.12]
//             tracking-[-0.04em]
//             text-[#171C22]
//             sm:text-[23px]
//           "
//         >
//           Trusted by founders
//           <br className="hidden md:block" />
//           {" "}and growing brands
//         </h3>

//         {/* Client data — only once */}
//         <div className="work-clients">
//           {clients.map((client) => (
//             <a
//               key={client.id}
//               href="#"
//               className="work-client"
//               style={{
//                 "--client-font-family": client.fontFamily,
//                 "--client-font-size": client.fontSize,
//                 "--client-font-weight": client.fontWeight,
//                 "--client-letter-spacing": client.letterSpacing,
//               }}
//             >
//               {client.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


function TrustedClients() {
  return (
    <div className="mt-[150px]">
      <div
        className="
          grid
          gap-10
          md:grid-cols-[300px_1fr]
          md:items-center
          lg:grid-cols-[360px_1fr]
        "
      >
        {/* Fixed heading */}
        <h3
          className="
            text-[21px]
            font-normal
            leading-[1.12]
            tracking-[-0.04em]
            text-[#171C22]
            sm:text-[23px]
          "
        >
          Trusted by founders
          <br className="hidden md:block" />
          {" "}and growing brands
        </h3>

        {/* 3 separate sentences */}
        <div className="work-client-sentences">

          <a
            href="#"
            className="work-client-sentence client-sentence-1"
          >
            Bad Birdie
          </a>

          <a
            href="#"
            className="work-client-sentence client-sentence-2"
          >
            Milk & Cookies
          </a>

          <a
            href="#"
            className="work-client-sentence client-sentence-3"
          >
            COBE Construction
          </a>

        </div>
      </div>
    </div>
  );
}



export default function Work() {
  return (
    <section
      id="work"
      className="
        w-full
        overflow-hidden
        bg-[#F6F4F1]
        text-[#171C22]
      "
    >
      <div
        className="
          mx-auto
          w-full
          px-[5vw]
          py-[12.5vw]
          md:py-[9vw]
          lg:py-[8vw]
        "
      >
        {/* Section header */}
        <header
          className="
            mb-8
            flex
            items-baseline
            justify-between
            gap-6
            sm:mb-10
          "
        >
          <span
            className="
              text-[16px]
              font-normal
              leading-none
              tracking-[-0.02em]
              text-[#9AA0A8]
              sm:text-[18px]
            "
          >
            Selected work
          </span>

          <a
            href="#all-work"
            className="
              work-all-link
              text-[16px]
              font-normal
              leading-none
              tracking-[-0.025em]
              text-[#171C22]
              sm:text-[18px]
            "
          >
            All work
          </a>
        </header>

        {/* Featured projects */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            md:gap-5
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Trusted clients */}
        <TrustedClients />
      </div>
    </section>
  );
}
 