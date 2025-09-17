import { Link } from "react-router-dom";

export default function Home() {
  const products = [
    { title: "Wireless Headphones", image: "/headphones.jpg", price: "$129" },
    { title: "Smart Watch", image: "/watch.jpg", price: "$199" },
    { title: "Sneakers", image: "/sneakers.jpg", price: "$89" },
    { title: "Backpack", image: "/backpack.jpg", price: "$59" },
  ];

  const testimonials = [
    {
      name: "Alex P.",
      feedback:
        "I love shopping here — the products are top quality and shipping was super fast!",
      image: "/user1.jpg",
    },
    {
      name: "Maria G.",
      feedback:
        "The checkout process was smooth and I got a great discount. Highly recommend!",
      image: "/user2.jpg",
    },
    {
      name: "James K.",
      feedback:
        "Fantastic customer support and the items look even better in person.",
      image: "/user3.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Discover the Best Deals Online</h1>
          <p className="tagline">Trendy, affordable, and delivered to your door.</p>
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
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p className="price">{p.price}</p>
              <Link to="/shop" className="btn small">View Product</Link>
            </div>
          ))}
        </div>
        <div className="view-all">
          <Link to="/shop" className="btn primary">View All Products</Link>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo">
        <h2>🔥 Limited Time Offer</h2>
        <p>Get up to 30% off select items this week only!</p>
        <Link to="/shop" className="btn primary">Shop the Sale</Link>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <img src={t.image} alt={t.name} className="testimonial-img" />
              <p className="feedback">“{t.feedback}”</p>
              <div className="testimonial-footer">
                <p className="name">— {t.name}</p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx="true">{`
        /* Hero */
        .hero {
          background: url('/logo.png') center/cover no-repeat; /* ✅ logo as full hero background */
          color: #fff;
          text-align: center;
          padding: 100px 20px;
          position: relative;
          margin: 0; /* ✅ removes white gap above */
        }
        .hero-overlay {
          background: rgba(0, 0, 0, 0.55);
          padding: 60px 20px;
          border-radius: 12px;
          max-width: 800px;
          margin: auto;
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
        }

        /* Featured Products */
        .featured {
          padding: 40px 20px;
          margin-top: 0; /* ✅ removes white gap below hero */
          text-align: center;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }
        .product-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          background: #fff;
          transition: transform 0.2s;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
        .product-card img {
          max-width: 100%;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .price {
          font-weight: bold;
          color: #111827;
          margin: 10px 0;
        }

        /* Promo */
        .promo {
          background: #1f2937;
          color: #fff;
          padding: 60px 20px;
          text-align: center;
        }
        .promo h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        /* Testimonials */
        .testimonials {
          padding: 60px 20px;
          background: #f9fafb;
          text-align: center;
        }
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }
        .testimonial-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.2s;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
        }
        .testimonial-img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px;
        }
        .feedback {
          font-size: 1.1rem;
          margin-bottom: 15px;
        }
        .testimonial-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        .name {
          font-weight: bold;
          color: #111827;
        }
        .stars {
          color: #fbbf24;
          font-size: 1.1rem;
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
