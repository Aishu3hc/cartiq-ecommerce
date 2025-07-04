import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavPage from '../components/Nav';        
import FilterPage from '../components/FilterPanel';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://dummyjson.com/products?limit=1000")
      .then((response) => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch((error) => console.error(error));

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  function handleSearchResult(data) {
    setFilteredProducts(data);
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate('/login');
  }

  function addToCart(product) {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  }

  function handleBuy(product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/payment");
  }

  return (
    <div className="container">
      {/* Navbar */}
      <div className="d-flex justify-content-between align-items-center my-3">
        <NavPage items={products} getState={handleSearchResult} />
        {/* Only Logout button kept here */}
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Layout */}
      <div className="row">
        <div className="col-2">
          <FilterPage items={products} getState={handleSearchResult} />
        </div>
        <div className="col-10">
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description.slice(0, 60)}...</p>
                    <p><strong>Rs. {product.price}</strong></p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary" onClick={() => addToCart(product)}>
                        Add to Cart
                      </button>
                      <button className="btn btn-success" onClick={() => handleBuy(product)}>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
