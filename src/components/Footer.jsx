import "./styling/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-message">
            <h2>
              Take it easy, spend this Sunday with your family.
            </h2>

            <p>
              We'll be here, working on something good.
            </p>
          </div>

          <div className="footer-links">

            <div className="footer-column">
              <h3>Studio</h3>

              <a href="/work">Work</a>

              <a href="/contact">Book a call</a>
            </div>

            <div className="footer-column">
              <h3>Follow</h3>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
            </div>

            <div className="footer-column">
              <h3>Company</h3>

              <a href="/privacy">Privacy</a>

              <a href="/terms">Terms</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <a href="/" className="footer-logo">
            <span className="footer-logo-mark">☼</span>
            <span>upsunday</span>
          </a>

          <p>
            © 2026 UpSunday LLC · San Diego, California
          </p>

        </div>

      </div>
    </footer>
  );
}