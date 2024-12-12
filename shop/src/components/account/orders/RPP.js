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
    <div class="bg-white p-3 shadow-0 fontr border" dir="rtl" style={{borderRadius:"10px"}}>
      {selectedOrder ? (
        <div class="recent-order-details">
          <div class="col-md-12 col-12 d-flex justify-content-end">
            <button class="btn btn-outline-primary" onClick={handleBackClick}>برگشت</button>
          </div>
          <ul class="recent-product-list">
            <li key="{product.id}" class="recent-product-item">
              <img src={Img} alt="{product.name}" class="recent-product-image" />
              <div class="recent-product-details">
                <h4>مس رونالدو</h4>
                <p>تعداد: 10</p>
                <p>قیمت: 45000 تومان</p>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div class="recent-orders-list">
          <h2>سفارشات گذشته</h2>
          <ul class="recent-order-summary-list">
            <li key="{order.id}" class="recent-order-summary row m-0" onClick={() => handleOrderClick("sda")}>
              <div class="col"><p>آیدی سفارش: <span class="order-id">34</span></p></div>
              <div class="col"><p>قیمت کل: <span class="order-amount">450900 تومان</span></p></div>
              <div class="col"><p>تاریخ سفارش: <span class="order-date">1402/12/1</span></p></div>
              <div class="col d-flex justify-content-end">
                <button class="btn btn-outline-primary">مشاهده جزییات</button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
