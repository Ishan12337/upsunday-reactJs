import "./styling/Booking.css";

export default function Booking() {
  return (
    <section className="booking-section">
      <div className="booking-card">

        <div className="booking-content">

          <div className="booking-status">
            <span className="booking-status-dot" />

            <span className="booking-status-text">
              We're Online
            </span>

            <div className="booking-avatars">
              <span className="booking-avatar avatar-one" />
              <span className="booking-avatar avatar-two" />
              <span className="booking-avatar avatar-three" />
              <span className="booking-avatar avatar-four" />
            </div>
          </div>

          <h2 className="booking-heading">
            Book a call
          </h2>

          <p className="booking-description">
            30 minutes with our team.
            <br />
            Bring the idea, we'll bring the questions.
          </p>

          <a href="/contact" className="booking-button">
            <span className="meet-icon">
              <span className="meet-camera" />
            </span>

            <span>Book a call</span>
          </a>

        </div>

      </div>
    </section>
  );
}