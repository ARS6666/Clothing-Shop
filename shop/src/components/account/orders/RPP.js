import React, { useState, useEffect } from 'react';
import '../../../assets/css/account/RPP.css';
import Img from "../../../assets/media/logo.jpg";
import url from "../../../config.json";


const RecentOrders = () => {
  var jalaali = require('jalaali-js')
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const token = localStorage.getItem('token');
  const [Orderhistory, setOrderhistory] = useState([{ items: [] }])
  const [OrderItems, setOrderItems] = useState([])


  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleBackClick = () => {
    setSelectedOrder(null);
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("X-CSRFToken", "xOcmZfETILyxOSu0qlmZYHvVxBbbTwcadRPbabQcxi3gDybQ2yvYwF4upXDXTUlA");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url.baseUrl}/order/order-history`, requestOptions)
      .then((response) => response.json())
      .then((result) => setOrderhistory(result))
      .catch((error) => console.error(error));
    console.log(Orderhistory)
  }, []);
  function convertToIranianDate(isoDate) {
    if (!isoDate) {
      return 'Invalid date';
    }
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }

    const gregorianYear = date.getUTCFullYear();
    const gregorianMonth = date.getUTCMonth() + 1;
    const gregorianDay = date.getUTCDate();

    const jalaliDate = jalaali.toJalaali(gregorianYear, gregorianMonth, gregorianDay);

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${jalaliDate.jy}-${String(jalaliDate.jm).padStart(2, '0')}-${String(jalaliDate.jd).padStart(2, '0')} ${hours}:${minutes}:${seconds}`;
  }
  const addCommas = (number) => {
    if (number !== undefined) {
      let [integer] = number.toString().split('.');
      integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return integer;
    }
    return null;
  };
  function fetchOrderItems(orderId) {
    const order = orders.find(order => order.id === orderId);
    if (order) {
      setOrderItems(order.items);
    }
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
            {Orderhistory.map((order) => (<li key={order.id} className="recent-order-summary row m-0" onClick={() => handleOrderClick(order.id)}>
              <div className="col"><p>آیدی سفارش: <span className="order-id">{order.id}</span></p></div>
              <div className="col"><p>قیمت کل: <span className="order-amount">{addCommas(order.total)} تومان</span></p></div>
              <div className="col"><p>تاریخ سفارش: <span className="order-date">{convertToIranianDate(order.created_at)}</span></p></div>
              <div className="col d-flex justify-content-end">
                <button className="btn btn-outline-primary">مشاهده جزییات</button>
              </div>
            </li>))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
