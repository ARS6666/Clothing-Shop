import React, { useEffect, useState } from 'react';
import IMg from "../../../assets/media/s1.jpg"
import "../../../assets/css/account/cart.css"
import "../../../assets/css/hide.css"
import url from "../../../config.json"
import Loading from "../../loading/loading";



function Cart() {
    const [CartItems, setCartItem] = useState([])
    const [TotalPrice, setTotalPrice] = useState([])
    const token = localStorage.getItem('token');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [IsLoading, setIsLoading] = useState(true);


    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("X-CSRFToken", "5teHG5lzFJM4CD8QwLdXzrrvjxmRqWl91abWUh2YcbHKJ1NVq5s3g9B3KrcKmR8L");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    function show() {
        fetch(`${url.baseUrl}/cart/cart/`, requestOptions)
            .then((response) => response.json())
            .then((result) => { setTotalPrice(result.total_price); setCartItem(result.items) ;setIsLoading(false)})
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        show()
    }, []);
    function AddItem(productId) {
        setButtonDisabled(true);
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("X-CSRFToken", "5teHG5lzFJM4CD8QwLdXzrrvjxmRqWl91abWUh2YcbHKJ1NVq5s3g9B3KrcKmR8L");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const raw = JSON.stringify({
            "product_id": productId
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url.baseUrl}/cart/cart/add_item/`, requestOptions)
            .then((response) => response.text())
            .then((result) => { setButtonDisabled(false); show() })
            .catch((error) => { console.error(error); setButtonDisabled(false) });

    }
    function RemoveItem(productId) {
        setButtonDisabled(true);
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("X-CSRFToken", "5teHG5lzFJM4CD8QwLdXzrrvjxmRqWl91abWUh2YcbHKJ1NVq5s3g9B3KrcKmR8L");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const raw = JSON.stringify({
            "product_id": productId
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url.baseUrl}/cart/cart/remove_item/`, requestOptions)
            .then((response) => response.text())
            .then((result) => { setButtonDisabled(false); show() })
            .catch((error) => { setButtonDisabled(false); console.error(error) });
    }
    function RemoveAll(ProductID) {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("X-CSRFToken", "59NyS5epInpykUicznqVg6s2p69HTvXo1QKN6hVOfPkeriXhtHF1XOCAQ0ZAPqK0");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const raw = JSON.stringify({
            "product_id": ProductID
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url.baseUrl}/cart/cart/remove_all/`, requestOptions)
            .then((response) => response.text())
            .then((result) => show())
            .catch((error) => console.error(error));
    }

    const addCommas = (number) => {
        let [integer] = number.toString().split('.');

        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return integer;
    };

    function CreateOrder() {
        setIsLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("X-CSRFToken", "76KkTuMhRX6NLeCSdl3YkkhW0U0bE9RYN9n94qYAGuBwAUjIPycXSiQvSgsXEx0o");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url.baseUrl}/order/order/create_order/`, requestOptions)
            .then((response) => response.text())
            .then((result) =>{setIsLoading(false); show() })
            .catch((error) => console.error(error));

    }



    return (<>
        {IsLoading ? <Loading /> : null}
        <div class="col-md-12 col-12 fontr d-flex justify-content-center pt-5 pb-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div class="col-md-12 col-12 pt-5 pb-5">
                <div class="col-md-12 col-12 row m-0 bg-white">
                    <div class="col-md-4 col-12 col-5 pb-4 pt-4" dir="rtl">
                        <div class="col-md-12 col-12 p-1" >
                            <div class="col-md-12 col-12" style={{ backgroundColor: "#f8f9fa" }}>
                                <div class="col-md-12 col-12 pt-3 pb-2 d-flex justify-content-center">
                                    <span class="h5">
                                        جمع کل سبد خرید
                                    </span>
                                </div>
                                <div class="col-md-12 col-12 d-flex justify-content-center">
                                    <div class=" col-md-11 col-11 bg-white rounded">
                                        <div class="col-md-12 col-12 pt-2 d-flex justify-content-center row m-0 border-bottom">
                                            <div class="col-md-4 col-4 d-flex justify-content-start pb-2">
                                                <span>جمع جزء</span>
                                            </div>
                                            <div class="col-md-8 col-8 d-flex justify-content-start pb-2">
                                                <span>{addCommas(TotalPrice)} تومان</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12 pt-2 d-flex justify-content-center row m-0 border-bottom">
                                            <div class="col-md-4 col-4 d-flex justify-content-start pb-2">
                                                <span class="align-self-center">حمل و نقل</span>
                                            </div>
                                            <div class="col-md-8 col-8 d-flex justify-content-start pt-2">
                                                <div class="col-md-12 col-12">
                                                    <div class="pb-2">حمل و نقل به <span class="text-primary">گلستان.</span></div>
                                                    <a class="pb-2 text-primary" href='/account'>تغییرآدرس<i class="fa fa-truck" aria-hidden="true"></i>
                                                        .</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12 pt-2 d-flex justify-content-center row m-0">
                                            <div class="col-md-4 col-4 d-flex justify-content-start pb-2">
                                                <span>مجموع</span>
                                            </div>
                                            <div class="col-md-8 col-8 d-flex justify-content-start pb-2">
                                                <span>{addCommas(TotalPrice)} تومان</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-12 d-flex justify-content-center pt-4 pb-5">
                                    <button class="btn btn-lg col-md-10 col-10 text-white rounded-0" onClick={CreateOrder} style={{ backgroundColor: "#007bff" }}>ادامه جهت تسویه حساب</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-12 " dir="rtl">
                        <div class="col-md-12 col-12 pt-4 ">
                            <div class="col-md-12 col-12 border row m-0">
                                <div class="col-md-2 col-1 p-3"></div>
                                <div class="col-md-4 col-2 p-3"><span>محصول</span></div>
                                <div class="col-md-2 col-3 p-3"><span>قیمت</span></div>
                                <div class="col-md-2 col-3 p-3"><span>تعداد</span></div>
                                <div class="col-md-2 col-3 p-3"><span>جمع جزء</span></div>
                            </div>
                        </div>
                        {CartItems?.map((c) => (<>
                            <div class="col-md-12 col-12">
                                <div class="col-md-12 col-12 border rounded-0 align-items-center row m-0">
                                    <div class="col-md-1 col-1 p-3 "><button class="btn btn-light rounded-circle btn-circle" onClick={() => RemoveAll(c.product.id)}><i class="fa-solid fa-trash-can"></i></button></div>
                                    <div class="col-md-2 p-3 remove">
                                        <img src={`${url.baseUrl}/${c.product.pic}`} alt="" class="col-md-12" style={{ height: "70px", objectFit: "cover" }} />
                                    </div>
                                    <div class="col-md-3 col-2 p-3"><a href={"pi?id=" + c.product.id}>{c.product.name}</a></div>
                                    <div class="col-md-2 col-3 p-3">{addCommas(c.product.price)}تومان</div>
                                    <div class="col-md-1 col-2 p-3 row m-0 text-center d-flex justify-content-center">
                                        <button class="btn-circle btn" onClick={() => AddItem(c.product.id)} disabled={buttonDisabled}><i class="fa-solid fa-arrow-up"></i></button>
                                        <span class=" p-2">{c.quantity}</span>
                                        <button class="btn-circle btn" onClick={() => RemoveItem(c.product.id)} disabled={buttonDisabled}><i class="fa-solid fa-arrow-down"></i></button>
                                    </div>
                                    <div class="col-md-2 col-3 p-3">{addCommas(c.product.price * c.quantity)}تومان</div>
                                </div>
                            </div>
                        </>))}
                        <div class="col-md-12 col-12 pb-4"></div>
                    </div>
                </div>
            </div>
        </div >
    </>);
}

export default Cart;