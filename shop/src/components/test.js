import React, { useState, useEffect } from 'react';
import './test.css';
import Img from "../assets/media/logo.jpg"

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Fetch orders from an API or use a static list for demo purposes
    const fetchOrders = async () => {
      const response = await fetch('/api/recent-orders'); // Replace with your API endpoint
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleBackClick = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="recent-orders">
      {selectedOrder ? (
        <div className="order-details">
          <h2>Order Details</h2>
          <button className="back-button" onClick={handleBackClick}>Back to Orders</button>
          <ul className="product-list">
            <li key="{product.id} " className="product-item">
              <img src={Img} alt="{product.name} " className="product-image" />
              <div className="product-details">
                <h4>tret  ter</h4>
                <p>Quantity: 342</p>
                <p>Price: $423434</p>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="order-list">
          <h2>Recently Purchased Orders</h2>
          <ul className="order-summaryy-list">
            <li key="{order.id}" className="order-summaryy" onClick={() => handleOrderClick("sda")}>
              <p>Order ID: <span className="order-id">34</span></p>
              <p>Total Amount: <span className="order-amount">$34244</span></p>
              <p>Date: <span className="order-date">324 2 53 53</span></p>
              <button className="view-button">View Details</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
