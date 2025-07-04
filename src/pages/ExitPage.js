// src/pages/ExitPage.js
import { useEffect } from 'react';

export default function ExitPage() {
  useEffect(() => {
    localStorage.removeItem('cart'); // clear cart after purchase
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
      <h2>Thank you for your purchase!</h2>
      <p>Your order has been placed successfully.</p>
    </div>
  );
}