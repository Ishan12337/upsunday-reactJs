import { useEffect, useState } from "react";
import "./styling/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="/" className="navbar-logo">
        <span className="logo-mark">☼</span>
        <span>upsunday</span>
      </a>

      <div className="navbar-links">
        <a href="/" className="nav-link active">
          Home
        </a>

        <a href="/work" className="nav-link">
          Work
        </a>

        <a href="/contact" className="nav-link nav-cta">
          Book a call
        </a>
      </div>
    </nav>
  );
}