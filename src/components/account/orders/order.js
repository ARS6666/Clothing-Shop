import React, { useState, useEffect } from 'react';
import "../../../assets/css/href.css";
import "../../../assets/css/account/order.css";
import Img from "../../../assets/media/logo.jpg";
import url from "../../../config.json";


function Order() {
    var jalaali = require('jalaali-js')
    const [isOrder, setisOrder] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const token = localStorage.getItem('token');
    const [Orderdetail, setOrderdetail] = useState({ items: [] });
    const [iranianDate, setIranianDate] = useState('');

    const toggleProducts = () => {
        setShowProducts(!showProducts);
    };

    const addCommas = (number) => {
        if (number !== undefined) {
            let [integer] = number.toString().split('.');
            integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return integer;
        }
        return null;
    };

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

    function truncateString(str) {
        const words = str.split(' ');
        if (words.length <= 6) {
            return str;
        }
        const truncated = words.slice(0, 6).join(' ');
        return `${truncated}...`;
    }

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("X-CSRFToken", "76KkTuMhRX6NLeCSdl3YkkhW0U0bE9RYN9n94qYAGuBwAUjIPycXSiQvSgsXEx0o");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url.baseUrl}/order/order/`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result && result.length > 0) {
                    setOrderdetail(result[0]);
                    setisOrder(true);
                } else {
                    setisOrder(false);
                }
            })
            .catch((error) => console.error(error));
    }, [token]);

    useEffect(() => {
        if (Orderdetail && Orderdetail.created_at) {
            setIranianDate(convertToIranianDate(Orderdetail.created_at));
        }
    }, [Orderdetail]);

    return (
        <div className="col-md-12 fontr" dir="rtl">
            {isOrder ? (
                <div className="container border-bottom border fontr" dir="rtl" style={{ borderRadius: "10px" }}>
                    <div className="col-md-12 d-flex justify-content-center">
                        <h2 className="border-bottom border-4 border-danger p-3 col-md-3 col-6 text-center">سفارش در جریان</h2>
                    </div>
                    <div className="order-header p-3" onClick={toggleProducts} dir="ltr">
                        <p className="p-1">آیدی سفارش : {Orderdetail.id}<i className="fa-solid fa-cart-shopping m-2"></i></p>
                        <p>قیمت کل: {addCommas(Orderdetail.total)} تومان</p>
                        <p>تعداد محصولات : {Orderdetail.items.length}</p>
                        <p><span dir="rtl">{iranianDate}</span> : تاریخ سفارش </p>
                        <p>در حال ارسال</p>
                        <button className="btn btn-outline-primary">
                            {showProducts ? <i className="fa-solid fa-chevron-up"><span className="fontr">بستن</span></i> : <i className="fa-solid fa-chevron-down"><span className="fontr">مشاهده سفارشات</span></i>}
                        </button>
                    </div>
                    {showProducts && (
                        <div className="order-products pt-2 border-top">
                            <ul style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                {Orderdetail.items.map((c) => (
                                    <a className="hrefb" href={`pi?id=${c.product.id}#${c.product.name}`} key={c.product.id}>
                                        <li className="product-item">
                                            <img src={`${url.baseUrl}/${c.product.pic}`} alt={c.product.name} className="product-image" />
                                            <div className="product-details">
                                                <h4>{truncateString(c.product.name)}</h4>
                                                <p>{c.product.category}</p>
                                                <p>قیمت: {addCommas(c.product.price)} تومان</p>
                                                <p>تعداد: {c.quantity}</p>
                                            </div>
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div className="col-md-12 text-center pt-3 d-flex justify-content-center row p-0 m-0 pt-5">
                    <h3 className="fontr text-dark">سفارش در جریانی ندارید!</h3>
                    <div className="col-md-12 pt-3">
                        <button className="btn btn-outline-success col-md-2">
                            <a className="hrefb p-2" href="/products"> سفارش بدهید :{")"}</a>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Order;
