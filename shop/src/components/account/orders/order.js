import React, { Component, useState } from 'react';
import "../../../assets/css/href.css"
function Order() {
    const [isOrder, setisOrder] = useState(false)
    return (<>
        <div class="col-md-12 fontr" dir ="rtl">
            {isOrder ? <>sdifjdsiofjsdio
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