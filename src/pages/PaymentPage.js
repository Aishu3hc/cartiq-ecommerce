import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  const handlePayment = () => {
    alert("Payment successful!");
    navigate('/exit');
  };

  return (
    <div className="container mt-5">
      <h3>Payment Page</h3>
      {selectedProduct ? (
        <div>
          <p><strong>Product:</strong> {selectedProduct.title}</p>
          <p><strong>Amount:</strong> Rs. {selectedProduct.price}</p>
          <button className="btn btn-success" onClick={handlePayment}>Pay Now</button>
        </div>
      ) : (
        <p>No product selected.</p>
      )}
    </div>
  );
}

export default PaymentPage;
