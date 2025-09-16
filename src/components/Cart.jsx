import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // ✅ Update quantity in cart
  function updateQuantity(id, newQty) {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, newQty) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  // ✅ Remove item
  function removeFromCart(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  // ✅ Clear cart
  function clearCart() {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  // ✅ Totals
  const subtotal = cartItems.reduce((sum, item) => {
    const priceNum = Number(item.price.replace("$", ""));
    return sum + priceNum * item.qty;
  }, 0);

  const taxRate = 0.13; // 13% HST (change if needed)
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <section className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>

                {/* Quantity control */}
                <div className="qty-controls">
                  <label>Qty:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  />
                </div>

                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          {/* ✅ Receipt-style summary */}
          <div className="receipt">
            <h3>Order Summary</h3>
            <div className="line">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="line">
              <span>Tax (13%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="line total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}

      <style jsx="true">{`
        .cart {
          padding: 40px 20px;
          max-width: 800px;
          margin: auto;
        }
        .cart-item {
          display: flex;
          gap: 15px;
          align-items: center;
          margin-bottom: 20px;
          background: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        .cart-item img {
          width: 100px;
          max-height: 100px;
          object-fit: contain;
          border-radius: 8px;
          background: #f3f4f6;
          padding: 4px;
        }
        .cart-details {
          flex: 1;
          text-align: left;
        }
        .price {
          font-weight: bold;
          color: #2563eb;
          margin: 4px 0;
        }
        .qty-controls {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 8px 0;
        }
        .qty-controls input {
          width: 60px;
          padding: 4px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          text-align: center;
        }
        button {
          margin-top: 6px;
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover {
          opacity: 0.9;
        }
        .checkout-btn {
          background: #10b981;
          color: #fff;
          font-weight: 600;
          margin-right: 10px;
        }
        .clear-btn {
          background: #ef4444;
          color: #fff;
          font-weight: 600;
        }
        .receipt {
          margin-top: 30px;
          padding: 20px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          text-align: right;
        }
        .receipt h3 {
          margin-bottom: 15px;
          font-size: 1.2rem;
          text-align: left;
        }
        .line {
          display: flex;
          justify-content: space-between;
          margin: 6px 0;
          font-size: 1rem;
        }
        .line.total {
          font-weight: bold;
          font-size: 1.2rem;
          border-top: 1px solid #d1d5db;
          padding-top: 10px;
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}
