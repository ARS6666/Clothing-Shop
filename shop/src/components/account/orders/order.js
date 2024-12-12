import React, { Component, useState } from 'react';
import "../../../assets/css/href.css"
import "../../../assets/css/account/order.css"
import Img from "../../../assets/media/logo.jpg"

function Order() {
    const [isOrder, setisOrder] = useState(true)
    const [showProducts, setShowProducts] = useState(false);

    const toggleProducts = () => {
        setShowProducts(!showProducts);
    };

    return (<>
        <div class="col-md-12 fontr" dir="rtl">
            {isOrder ? <>
                <div className="container border-bottom border fontr" dir="rtl" style={{ borderRadius: "10px" }}>
                    <div class="col-md-12 d-flex justify-content-center"><h2 class="border-bottom border-4 border-danger p-3 col-md-3 col-6 text-center">سفارش در جریان</h2></div>
                    <div className="order-header p-3" onClick={toggleProducts}>

                        <p class="p-1"><i class="fa-solid fa-cart-shopping m-2"></i>سفارش 1234</p>
                        <p>قیمت کل: 51641 تومان</p>
                        <p>تعداد محصولات : 1</p>
                        <p>نوع پست : پست پیشتاز</p>
                        <button className="toggle-button">
                            {showProducts ? <i class="fa-solid fa-chevron-up"><span class="fontr">بستن</span></i> : <i class="fa-solid fa-chevron-down "><span class="fontr">مشاهده سفارشات</span></i>}
                        </button>
                    </div>
                    {showProducts && (
                        <div className="order-products pt-2 border-top" >
                            <ul>
                                <li key="product.id" className="product-item ">
                                    <img src={Img} alt="product.name" className="product-image" />
                                    <div className="product-details row m-0">
                                        <p>مس رونالدو</p>
                                        <p>تعداد: 10</p>
                                        <p>قیمت: 485600 تومان</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </> : <>
                <div class="col-md-12 text-center pt-3 d-flex justify-content-center row p-0 m-0 pt-5">
                    <h3 class=" fontr text-dark ">سفارش در جریانی ندارید!</h3>
                    <div class="col-md-12 pt-3"><button class=" btn btn-outline-success col-md-2"><a class="hrefb p-2" href="/products"> سفارش بدهید :{")"}</a></button></div>
                </div>
            </>}
        </div>
    </>);
}

export default Order;