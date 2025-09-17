export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p className="subtitle">
        We’d love to hear from you. Get in touch with our team for quotes,
        bookings, or general inquiries.
      </p>

      <div className="info">
        <p>
          📞 Phone: <a href="tel:+14165551234">(416) 555-1234</a>
        </p>
        <p>
          📧 Email: <a href="mailto:info@gmail.ca">info@gmail.ca</a>
        </p>
        <p>📍 300 Borough Dr, Scarborough, ON M1P 4P5</p>
        <p>🕒 Mon–Fri: 9am – 6pm | Sat: 10am – 4pm | Sun: Closed</p>
      </div>

      {/* Map */}
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.7777220200655!2d-79.25919252362032!3d43.7764370710968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cf39565c5d1d%3A0x3bbf6a7b5e5c1442!2s300%20Borough%20Dr%2C%20Scarborough%2C%20ON%20M1P%204P5!5e0!3m2!1sen!2sca!4v1694976000000"
        width="100%"
        height="300"
        style={{ border: 0, marginTop: "20px", borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* Get Directions Button */}
      <div className="directions">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=300+Borough+Dr,+Scarborough,+ON+M1P+4P5"
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
        >
          Get Directions
        </a>
      </div>

      <style jsx="true">{`
        .contact {
          max-width: 800px;
          margin: auto;
          padding: 50px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin-bottom: 30px;
        }
        .info {
          font-size: 1.1rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        a {
          color: #2563eb;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .directions {
          margin-top: 20px;
        }
        .btn.primary {
          display: inline-block;
          background: #2563eb;
          color: #fff;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.3s;
        }
        .btn.primary:hover {
          background: #1e40af;
        }
      `}</style>
    </section>
  );
}
