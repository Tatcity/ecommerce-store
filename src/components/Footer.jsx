import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Quick Links */}
        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Socials */}
        <div className="socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">📘</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">💻</a>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p>📞 (416) 555-1234</p>
          <p>📧 info@gmail.ca</p>
          <p>📍 300 Borough Dr, Scarborough, ON M1P 4P5</p>
        </div>
      </div>

      <div className="copy">
        <p>© {year} My E-Shop. All rights reserved.</p>
      </div>

      <style jsx="true">{`
        .footer {
          background: linear-gradient(135deg, #111827, #1f2937);
          color: #fff;
          padding: 40px 20px 20px;
          margin-top: 60px;
        }

        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 25px;
          max-width: 1200px;
          margin: auto;
        }

        /* Quick Links */
        .links {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .links a {
          color: #d1d5db;
          text-decoration: none;
          font-weight: 500;
        }
        .links a:hover {
          color: #60a5fa;
        }

        /* Socials */
        .socials {
          display: flex;
          gap: 15px;
          font-size: 1.4rem;
        }
        .socials a {
          color: #d1d5db;
          transition: color 0.3s;
        }
        .socials a:hover {
          color: #60a5fa;
        }

        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
          color: #9ca3af;
          font-size: 0.95rem;
        }
        .contact-info p {
          margin: 0;
        }

        /* Copyright */
        .copy {
          margin-top: 20px;
          text-align: center;
          font-size: 0.85rem;
          opacity: 0.75;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .contact-info {
            flex-direction: row;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
}
