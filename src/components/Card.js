// components/Card.js
import { useNavigate } from 'react-router-dom';

function Card({ object, addToCart }) {
  const navigate = useNavigate();

  const handleBuy = () => {
    localStorage.setItem('selectedProduct', JSON.stringify(object));
    navigate('/payment');
  };

  return (
    <div className="card m-2" style={{ width: '16rem' }}>
      <img src={object.thumbnail} className="card-img-top" alt={object.title} />
      <div className="card-body">
        <h5 className="card-title">{object.title}</h5>
        <p className="card-text">{object.description.slice(0, 60)}...</p>
        <p><strong>Rs. {object.price}</strong></p>
        
        {/* Show both buttons side by side */}
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={() => addToCart(object)}>Add to Cart</button>
          <button className="btn btn-success" onClick={handleBuy}>Buy Now</button>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
