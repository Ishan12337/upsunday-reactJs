// import { useState } from "react";
// import "./styling/Testimonials.css";

// const testimonials = [
//   {
//     logo: "↖",
//     logoClass: "logo-leftcoast",
//     quote:
//       "As a design studio, we're hard to impress. UpSunday matched the craft of our own work: clean lines, perfect proportions, and nothing on the page that doesn't need to be there.",
//     name: "Craig Trettau",
//     role: "Founder, Left Coast Design Studio",
//     avatar: "avatar-craig",
//   },
//   {
//     logo: "M&C",
//     logoClass: "logo-milk",
//     quote:
//       "UpSunday gave our brand a shape it never had before. Every page feels considered, the type, the spacing, the way it moves. It looks like us, just sharper.",
//     name: "Chasen McNaughton",
//     role: "Co-Founder, Milk & Cookies",
//     avatar: "avatar-chasen",
//   },
//   {
//     logo: "COBE",
//     logoClass: "logo-cobe",
//     quote:
//       "UpSunday gave COBE a look that finally matches the quality of our builds. Clean, confident and built to last, just like our work.",
//     name: "Shaun Olson",
//     role: "President, COBE Construction Inc.",
//     avatar: "avatar-shaun",
//   },
//   {
//     logo: "Bad Birdie",
//     logoClass: "logo-badbirdie",
//     quote:
//       "The design has a shape and rhythm you feel as soon as the page loads. UpSunday took our ideas and made them look inevitable.",
//     name: "Tanner Balisky",
//     role: "Bad Birdie",
//     avatar: "avatar-tanner",
//   },
// ];

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   /*
//     4 testimonials + 1 CTA card
//     = 5 total slides
//   */
//   const totalSlides = testimonials.length + 1;

//   const goNext = () => {
//     setActiveIndex((current) =>
//       Math.min(current + 1, totalSlides - 1)
//     );
//   };

//   const goPrevious = () => {
//     setActiveIndex((current) =>
//       Math.max(current - 1, 0)
//     );
//   };

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <section className="testimonials-section">
//       <div className="testimonials-container">

//         <h2 className="testimonials-heading">
//           What clients say
//         </h2>

//         {/* ================================
//             CAROUSEL VIEWPORT
//         ================================= */}

//         <div className="testimonials-viewport">

//           <div
//             className="testimonials-track"
//             style={{
//               "--testimonial-index": activeIndex,
//             }}
//           >

//             {testimonials.map((item) => (
//               <article
//                 className="testimonial-card"
//                 key={item.name}
//               >

//                 {/* TOP */}

//                 <div className="testimonial-card-top">

//                   <div
//                     className={`testimonial-logo ${item.logoClass}`}
//                   >
//                     {item.logo}
//                   </div>

//                   <a
//                     href="#"
//                     className="testimonial-website"
//                     onClick={(event) =>
//                       event.preventDefault()
//                     }
//                   >
//                     <span>Website</span>
//                     <span className="website-arrow">
//                       ↗
//                     </span>
//                   </a>

//                 </div>

//                 {/* QUOTE */}

//                 <blockquote className="testimonial-quote">
//                   “{item.quote}”
//                 </blockquote>

//                 {/* PERSON */}

//                 <div className="testimonial-person">

//                   <div
//                     className={`testimonial-avatar ${item.avatar}`}
//                   />

//                   <div className="testimonial-person-info">
//                     <strong>{item.name}</strong>
//                     <span>{item.role}</span>
//                   </div>

//                 </div>

//               </article>
//             ))}


//             {/* ================================
//                 CTA CARD
//             ================================= */}

//             <article className="testimonial-cta-card">

//               <div className="testimonial-cta-inner">

//                 <p>
//                   Be our next client in this section.
//                 </p>

//                 <h3>
//                   Coffee's on us.
//                 </h3>

//                 <a href="/contact">
//                   Book a call
//                 </a>

//               </div>

//             </article>

//           </div>
//         </div>


//         {/* ================================
//             CONTROLS
//         ================================= */}

//         <div className="testimonials-controls">

//           <div
//             className="testimonial-progress"
//             onClick={(event) => {
//               const rect =
//                 event.currentTarget.getBoundingClientRect();

//               const clickPosition =
//                 event.clientX - rect.left;

//               const percentage =
//                 clickPosition / rect.width;

//               const index = Math.round(
//                 percentage * (totalSlides - 1)
//               );

//               goToSlide(
//                 Math.max(
//                   0,
//                   Math.min(
//                     totalSlides - 1,
//                     index
//                   )
//                 )
//               );
//             }}
//           >
//             <span
//               style={{
//                 transform: `translate3d(${
//                   activeIndex * 100
//                 }%, 0, 0)`,
//               }}
//             />
//           </div>


//           <div className="testimonial-arrows">

//             <button
//               type="button"
//               className="testimonial-arrow"
//               onClick={goPrevious}
//               disabled={activeIndex === 0}
//               aria-label="Previous testimonial"
//             >
//               ←
//             </button>

//             <button
//               type="button"
//               className="testimonial-arrow"
//               onClick={goNext}
//               disabled={
//                 activeIndex === totalSlides - 1
//               }
//               aria-label="Next testimonial"
//             >
//               →
//             </button>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import "./styling/Testimonials.css";

const testimonials = [
  {
    logo: "↖",
    logoClass: "logo-leftcoast",
    quote:
      "As a design studio, we're hard to impress. UpSunday matched the craft of our own work: clean lines, perfect proportions, and nothing on the page that doesn't need to be there.",
    name: "Craig Trettau",
    role: "Founder, Left Coast Design Studio",
    avatar: "avatar-craig",
  },
  {
    logo: "M&C",
    logoClass: "logo-milk",
    quote:
      "UpSunday gave our brand a shape it never had before. Every page feels considered, the type, the spacing, the way it moves. It looks like us, just sharper.",
    name: "Chasen McNaughton",
    role: "Co-Founder, Milk & Cookies",
    avatar: "avatar-chasen",
  },
  {
    logo: "COBE",
    logoClass: "logo-cobe",
    quote:
      "UpSunday gave COBE a look that finally matches the quality of our builds. Clean, confident and built to last, just like our work.",
    name: "Shaun Olson",
    role: "President, COBE Construction Inc.",
    avatar: "avatar-shaun",
  },
  {
    logo: "Bad Birdie",
    logoClass: "logo-badbirdie",
    quote:
      "The design has a shape and rhythm you feel as soon as the page loads. UpSunday took our ideas and made them look inevitable.",
    name: "Tanner Balisky",
    role: "Bad Birdie",
    avatar: "avatar-tanner",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  /*
    4 testimonials + 1 CTA
    With 3 cards visible:
    0 = cards 1,2,3
    1 = cards 2,3,4
    2 = cards 3,4,CTA
  */
  const maxIndex = 2;

  const goNext = () => {
    setActiveIndex((current) =>
      Math.min(current + 1, maxIndex)
    );
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      Math.max(current - 1, 0)
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(
      Math.max(0, Math.min(maxIndex, index))
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <h2 className="testimonials-heading">
          What clients say
        </h2>

        <div className="testimonials-viewport">
          <div
            className="testimonials-track"
            style={{
              "--testimonial-index": activeIndex,
            }}
          >

            {testimonials.map((item) => (
              <article
                className="testimonial-card"
                key={item.name}
              >

                <div className="testimonial-card-top">

                  <div
                    className={`testimonial-logo ${item.logoClass}`}
                  >
                    {item.logo}
                  </div>

                  <a
                    href="#"
                    className="testimonial-website"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    <span>Website</span>

                    <span className="website-arrow">
                      ↗
                    </span>
                  </a>

                </div>

                <blockquote className="testimonial-quote">
                  “{item.quote}”
                </blockquote>

                <div className="testimonial-person">

                  <div
                    className={`testimonial-avatar ${item.avatar}`}
                  />

                  <div className="testimonial-person-info">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>

                </div>

              </article>
            ))}

            <article className="testimonial-cta-card">

              <div className="testimonial-cta-inner">

                <p>
                  Be our next client in this section.
                </p>

                <h3>
                  Coffee's on us.
                </h3>

                <a href="/contact">
                  Book a call
                </a>

              </div>

            </article>

          </div>
        </div>

        <div className="testimonials-controls">

          <div
            className="testimonial-progress"
            onClick={(event) => {
              const rect =
                event.currentTarget.getBoundingClientRect();

              const clickPosition =
                event.clientX - rect.left;

              const percentage =
                clickPosition / rect.width;

              const index = Math.round(
                percentage * maxIndex
              );

              goToSlide(index);
            }}
          >
            <span
              style={{
                transform: `translate3d(${
                  activeIndex * 100
                }%, 0, 0)`,
              }}
            />
          </div>

          <div className="testimonial-arrows">

            <button
              type="button"
              className="testimonial-arrow"
              onClick={goPrevious}
              disabled={activeIndex === 0}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <button
              type="button"
              className="testimonial-arrow"
              onClick={goNext}
              disabled={activeIndex === maxIndex}
              aria-label="Next testimonial"
            >
              →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}