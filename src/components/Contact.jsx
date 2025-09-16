// src/components/Contact.jsx
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
          📧 Email: <a href="mailto:info@norbec.ca">info@norbec.ca</a>
        </p>
        <p>📍 Toronto, ON</p>
        <p>🕒 Mon–Fri: 9am – 6pm | Sat: 10am – 4pm | Sun: Closed</p>
      </div>

      {/* Map */}
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.515598302032!2d-79.38318408450927!3d43.653226779121534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d721d8b1f5%3A0x2f4a46b58c8794f9!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1689963000000"
        width="100%"
        height="300"
        style={{ border: 0, marginTop: "20px", borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

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
      `}</style>
    </section>
  );
}
