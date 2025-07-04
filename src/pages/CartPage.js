import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
  }, []);

  function handleBuy() {
    alert("Purchase successful! Thank you.");
    localStorage.removeItem("cart");
    navigate("/exit");
  }

  function handleExit() {
    localStorage.removeItem("cart");
    navigate("/exit");
  }

  function handleRemove(indexToRemove) {
    const updatedCart = cartItems.filter((_, i) => i !== indexToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  }

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-4">🛒 Your Cart</h4>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }}
                    className="rounded"
                  />
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    <p className="mb-0">₹{item.price}</p>
                  </div>
                </div>
                <button className="btn btn-danger" onClick={() => handleRemove(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center mt-4 p-3 border-top">
            <h5>Total: ₹{calculateTotal()}</h5>
            <div>
              <button className="btn btn-success me-2" onClick={handleBuy}>
                Buy Now
              </button>
              <button className="btn btn-danger" onClick={handleExit}>
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
