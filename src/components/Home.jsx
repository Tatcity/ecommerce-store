import { Link } from "react-router-dom";

export default function Home() {
  const products = [
    { title: "Wireless Headphones", image: "/headphones.jpg", price: "$129" },
    { title: "Smart Watch", image: "/watch.jpg", price: "$199" },
    { title: "Sneakers", image: "/sneakers.jpg", price: "$89" },
    { title: "Backpack", image: "/backpack.jpg", price: "$59" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Discover the Best Deals Online</h1>
          <p className="tagline">
            Trendy, affordable, and delivered to your door.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn primary">Shop Now</Link>
            <Link to="/about" className="btn secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.title}>
              <div className="image-wrapper">
                <img src={p.image} alt={p.title} className="product-img" />
              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="price">{p.price}</p>
                <Link to="/shop" className="btn small">View Product</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Fixed button placement */}
        <div className="view-all">
          <Link to="/shop" className="btn primary">View All Products</Link>
        </div>
      </section>

      {/* 🔥 Limited Time Offer */}
      <section className="promo">
        <h2>🔥 Limited Time Offer</h2>
        <p>Get up to 25% off select items this week only!</p>
        <Link to="/shop" className="btn primary">Shop the Sale</Link>
      </section>

      {/* ⭐ Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"I love shopping here — the products are top quality and shipping was super fast!"</p>
            <h4>- Alex R</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="testimonial-card">
            <p>"The checkout process was smooth and I got a great discount. Highly recommend!"</p>
            <h4>- Maria S</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="testimonial-card">
            <p>"Fantastic customer support and the items look even better in person."</p>
            <h4>- James K</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Hero */
        .hero {
          background: url('/logo.png') center/cover no-repeat;
          color: #fff;
          text-align: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
        }
        .hero-overlay {
          background: rgba(0, 0, 0, 0.55);
          padding: 40px 20px;
          border-radius: 12px;
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
        }
        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        .tagline {
          font-size: 1.2rem;
          margin-bottom: 25px;
        }
        .hero-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Featured Products */
        .featured {
          padding: 40px 20px;
          margin-top: 0;
          text-align: center;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          margin-top: 30px;
          margin-bottom: 60px; /* ✅ extra spacing for button */
        }
        .product-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          background: #fff;
          transition: transform 0.2s;
          height: 100%;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
        .image-wrapper {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          overflow: hidden;
        }
        .product-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .card-body {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          flex: 1;
        }
        .price {
          font-weight: bold;
          color: #111827;
          margin: 10px 0;
        }
        .view-all {
          margin-top: 40px; /* ✅ spacing ensures no overlap */
          text-align: center;
        }

        /* Promo */
        .promo {
          padding: 50px 20px;
          background: #1f2937;
          color: #fff;
          text-align: center;
          margin-top: 40px;
          border-radius: 12px;
        }
        .promo h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        .promo p {
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        /* Testimonials */
        .testimonials {
          padding: 60px 20px;
          background: #f9fafb;
          text-align: center;
          margin-top: 50px;
        }
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }
        .testimonial-card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
        }
        .testimonial-card p {
          font-style: italic;
          margin-bottom: 15px;
          color: #555;
        }
        .testimonial-card h4 {
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }
        .stars {
          color: #fbbf24;
          font-size: 1.2rem;
        }

        /* Buttons */
        .btn {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.3s;
        }
        .btn.primary {
          background: #2563eb;
          color: #fff;
        }
        .btn.primary:hover {
          background: #1e40af;
        }
        .btn.secondary {
          background: #fff;
          color: #2563eb;
          border: 2px solid #2563eb;
        }
        .btn.secondary:hover {
          background: #2563eb;
          color: #fff;
        }
        .btn.small {
          padding: 6px 14px;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
