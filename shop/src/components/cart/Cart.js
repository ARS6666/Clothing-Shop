import React, { useState, useEffect } from "react";
import "https://kit.fontawesome.com/6c2a0de8a3.js"
import t2 from "../../assets/media/t2.jpg"

const Cart = () => {
    const token = localStorage.getItem('token');
    const [Cart, setCart] = useState({ items: [] });
    const [Add, setAdd] = useState({ items: [] });

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("X-CSRFToken", "JgergyhhFBqn0UEWbLpfiQtudUPlx3X9yrm5rey6qaSSYrzBLBfsL95pmOhErX91");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://127.0.0.1:8000/cart/", requestOptions)
            .then((response) => response.json())
            .then((result) => setCart(result))
            .catch((error) => console.error(error));
    }, []);

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4MjM3NDIyLCJpYXQiOjE3MjgyMzE0MjIsImp0aSI6IjBhYTA2MjZlNzkwOTQzZDJiMjczZThlMTM0OWM1YjAxIiwidXNlcl9pZCI6MX0.gkMSXDQJMkQywQVZ-6S0siDtuKxw-G-vmjuJmigIcuc");
    myHeaders.append("X-CSRFToken", "Rr8COQfUSo7FQ5Xtw0M0O34gr3UNYen4GCggZwwJDXzaOCS86QCdhmGbAXm6S8zW");
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "product_id": 7,
      "quntity": 1
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    



    const [Num, setNum] = useState(0);
    function Inc() {
        fetch("http://127.0.0.1:8000/cart/add_item/", requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    function Dec() {
        if (Num != 0) {
            setNum(Num - 1)
        }
    }

    return (
        <div class='d-flex justify-content-center fontr'>
            <div class='container row '  >
                <div class='col-md-3 mt-5 rounded' style={{ height: '500px' }}>
                    <div class='d-flex justify-content-center' dir='rtl'>
                        <div class='col-md-12 m-5'>
                            <div class="col-md-12 border-bottom row m-1">
                                <div class="col-md-6 d-flex justify-content-start">
                                    <span class='m-2'>محصولات:</span>ّ
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                    <span class='m-2'>3940202981</span>ّ
                                </div>
                            </div>
                            <div class="col-md-12 border-bottom row m-1">
                                <div class="col-md-6 d-flex justify-content-start">
                                    <span class='m-2'>هزینه حمل:</span>ّ
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                    <span class='m-2'>13</span>ّ
                                </div>
                            </div>
                            <div class="col-md-12 row m-1">
                                <div class="col-md-6 d-flex justify-content-start">
                                    <span class='m-2'>جمع کل:</span>ّ
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                    <span class='m-2'>1234434</span>ّ
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="input-group">
                        <button class="btn btn-outline-dark" type="button" >اعمال کد</button>
                        <input type="text" class="form-control" />
                    </div>


                    <div class='d-flex justify-content-center'>
                        <div class="bg-light rounded col-md-12 mt-5 " dir='rtl'>
                            <button type="button" class="btn btn-outline-success col-md-12">ادامه و پرداخت</button>
                        </div>
                    </div>
                </div>

                <div class='col-md-8 mt-5 m-2 rounded'>
                    {Cart.items?.map(c => <div class="card m-3 mt-4" style={{ height: '150px' }}>

                        <div class="row no-gutters" dir='rtl'>
                            <div class="col-md-2">
                                <img src={t2} class="card-img col-md-2" style={{ hieght: "70px", width: "120px" }} />
                            </div>
                            <div class="col-md-7" dir='rtl'>
                                <div class="card-body">
                                    <h5 class="card-title">{c.product.name}</h5>
                                    <div class="card-text">{c.product.description}</div>
                                    <small class='mt-4 text-danger'>{c.product.price}</small>
                                </div>
                            </div>
                            <div class='col-md-2 mt-3 '>

                                <div class=' mt-4 m-2 card' dir='rtl' >
                                    <div class="btn-group m-1 d-flex justify-content-center rounded" role="group" aria-label="Second group">
                                        <button type="button" class="btn " onClick={Inc}>+</button>
                                        <span class='align-self-center m-2'>{Num}</span>
                                        <button type="button" class="btn" onClick={Dec}>-</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>)}
                </div>

            </div>
        </div>
    )
}

export default Cart;