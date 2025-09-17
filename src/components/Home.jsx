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

      <style jsx="true">{`
        /* Hero */
        .hero {
          background: url('/logo.png') center/cover no-repeat;
          color: #fff;
          text-align: center;
          min-height: 100vh;          /* ✅ full screen height */
          display: flex;              /* ✅ use flexbox */
          align-items: center;        /* ✅ center vertically */
          justify-content: center;    /* ✅ center horizontally */
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
          flex-wrap: wrap; /* ✅ makes buttons wrap nicely on mobile */
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
