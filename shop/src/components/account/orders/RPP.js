import React, { useState } from 'react';
import '../../../assets/css/account/RPP.css';
import Img from "../../../assets/media/logo.jpg";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleBackClick = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="bg-white p-3 shadow-0 fontr border" dir="rtl" style={{ borderRadius: "10px" }}>
      {selectedOrder ? (
        <div className="recent-order-details">
          <div className="col-md-12 col-12 d-flex justify-content-end">
            <button className="btn btn-outline-primary" onClick={handleBackClick}>برگشت</button>
          </div>
          <ul className="recent-product-list">
            <li key="{product.id}" className="recent-product-item">
              <img src={Img} alt="Copper Product" className="recent-product-image" />
              <div className="recent-product-details">
                <h4>مس رونالدو</h4>
                <p>تعداد: 10</p>
                <p>قیمت: 45000 تومان</p>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="recent-orders-list">
          <h2>سفارشات گذشته</h2>
          <ul className="recent-order-summary-list">
            <li key="{order.id}" className="recent-order-summary row m-0" onClick={() => handleOrderClick("sda")}>
              <div className="col"><p>آیدی سفارش: <span className="order-id">34</span></p></div>
              <div className="col"><p>قیمت کل: <span className="order-amount">450900 تومان</span></p></div>
              <div className="col"><p>تاریخ سفارش: <span className="order-date">1402/12/1</span></p></div>
              <div className="col d-flex justify-content-end">
                <button className="btn btn-outline-primary">مشاهده جزییات</button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
