import React, { useState } from "react";
import "./test.css";

const OrderSummary = ({ order }) => {
  const [showProducts, setShowProducts] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className="order-summary">
      <div className="order-header" onClick={toggleProducts}>
        <h2>Order Summary</h2>
        <p>Order ID: {order.id}</p>
        <p>Total Amount: ${order.totalAmount}</p>
        <button className="toggle-button">
          {showProducts ? "Hide Products" : "Show Products"}
        </button>
      </div>
      {showProducts && (
        <div className="order-products">
          <h3>Products in Order:</h3>
          <ul>
            {order.products.map((product) => (
              <li key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const sampleOrder = {
    id: 12345,
    totalAmount: 100.0,
    products: [
      { id: 1, name: "Product 1", quantity: 2, price: 25.0, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Product 2", quantity: 1, price: 50.0, image: "https://via.placeholder.com/100" },
    ],
  };

  return (
    <div className="app">
      <OrderSummary order={sampleOrder} />
    </div>
  );
};

export default App;
