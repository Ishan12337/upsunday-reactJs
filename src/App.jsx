
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
// import Work from "./components/Work";
import Services from "./components/Services";
 import Stats from "./components/Stats";
import Recognition from "./components/Recognition";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-up"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

 
  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, []);

  return (
    <div className="app">

      <Navbar />
      <main>
     <Hero/>
     <Work/>
      <Services/>
      <Stats/>
      <Recognition/>
      <Testimonials/>
      <Blog/>
      <CTA/>
      <Footer/>   
      </main>
    </div>
  );
}

export default App;

