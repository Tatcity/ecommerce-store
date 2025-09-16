import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  function removeFromCart(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  const subtotal = cartItems.reduce((sum, item) => {
    const priceNum = Number(item.price.replace("$", ""));
    return sum + priceNum * item.qty;
  }, 0);

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
              <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <p>Qty: {item.qty}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Subtotal: ${subtotal}</h3>
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
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .cart-item img {
          width: 100px;
          max-height: 100px;
          object-fit: contain;  /* ✅ keeps original proportions */
          border-radius: 8px;
          background: #f3f4f6; /* light gray behind transparent/odd-sized images */
          padding: 4px;
        }
        button {
          margin-top: 8px;
          padding: 6px 12px;
          border: none;
          background: #ef4444;
          color: #fff;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover {
          background: #dc2626;
        }
      `}</style>
    </section>
  );
}
