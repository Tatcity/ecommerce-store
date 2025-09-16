// src/components/About.jsx
export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p className="intro">
          Welcome to <strong>My E-Shop</strong>! We’re passionate about delivering the
          best products at unbeatable prices. Our mission is to make online
          shopping simple, secure, and enjoyable for everyone.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>🌍 Our Story</h3>
            <p>
              Started in 2025, My E-Shop began with a small catalog of tech
              products and quickly grew into a trusted online marketplace. We
              pride ourselves on fast delivery and top-notch customer service.
            </p>
          </div>

          <div className="about-card">
            <h3>🤝 Our Promise</h3>
            <p>
              We stand behind every product we sell. That’s why we offer easy
              returns, transparent pricing, and 24/7 customer support to make
              sure your shopping experience is worry-free.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Looking Ahead</h3>
            <p>
              Our goal is to expand our product selection, support eco-friendly
              brands, and bring exciting deals to shoppers all over the world.
            </p>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .about {
          padding: 60px 20px;
          background: #f9fafb;
          color: #111827;
        }

        .about-container {
          max-width: 1000px;
          margin: auto;
          text-align: center;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .intro {
          font-size: 1.1rem;
          color: #4b5563;
          margin-bottom: 40px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
        }

        .about-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 25px;
          text-align: left;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .about-card h3 {
          margin-bottom: 10px;
          font-size: 1.3rem;
          color: #2563eb;
        }

        .about-card p {
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
