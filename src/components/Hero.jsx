import "./styling/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          We build websites that
          <br />
          grow your business.
        </h1>

        <p className="hero-subtitle">
          Brand, web and motion, designed and built by one studio.
        </p>

        <div className="hero-actions">
          <a href="/contact" className="hero-button hero-button-primary">
            Book a call
          </a>

          <a href="/work" className="hero-button hero-button-secondary">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}