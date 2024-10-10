import React from 'react';
import IMg from "../../../assets/media/s1.jpg"
import "../../../assets/css/account/cart.css"
function cart() {
    return (<>
        <div class="col-md-12 col-12 vh-100 fontr d-flex justify-content-center pt-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div class="col-md-8 col-8 pt-5">
                <div class="col-md-12 col-12 row m-0 bg-white">
                    <div class="col-md-4 col-5 pb-4 pt-4" dir="rtl">
                        <div class="col-md-12 p-1" >
                            <div class="col-md-12 " style={{ backgroundColor: "#f8f9fa" }}>
                                <div class="col-md-12 pt-3 pb-2 d-flex justify-content-center">
                                    <span class="h5">
                                        جمع کل سبد خرید
                                    </span>
                                </div>
                                <div class="col-md-12 d-flex justify-content-center">
                                    <div class=" col-md-11 bg-white rounded">
                                        <div class="col-md-12 pt-2 d-flex justify-content-center row m-0 border-bottom">
                                            <div class="col-md-4 d-flex justify-content-start pb-2">
                                                <span>جمع جزء</span>
                                            </div>
                                            <div class="col-md-8 d-flex justify-content-start pb-2">
                                                <span>11154تومان</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 pt-2 d-flex justify-content-center row m-0 border-bottom">
                                            <div class="col-md-4 d-flex justify-content-start pb-2">
                                                <span class="align-self-center">حمل و نقل</span>
                                            </div>
                                            <div class="col-md-8 d-flex justify-content-start pt-2">
                                                <div class="col-md-12">
                                                    <div class="pb-2">هزینه پست:58,000 تومان</div>
                                                    <div class="pb-2">حمل و نقل به <span class="text-primary">گلستان.</span></div>
                                                    <div class="pb-2  text-primary">تغییرآدرس<i class="fa fa-truck" aria-hidden="true"></i>
                                                        .</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 pt-2 d-flex justify-content-center row m-0">
                                            <div class="col-md-4 d-flex justify-content-start pb-2">
                                                <span>مجموع</span>
                                            </div>
                                            <div class="col-md-8 d-flex justify-content-start pb-2">
                                                <span>1,232,000تومان</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 d-flex justify-content-center pt-4 pb-5">
                                    <button class="btn btn-lg col-md-10 text-white rounded-5" style={{ backgroundColor: "#007bff" }}>ادامه جهت تسویه حساب</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-7 " dir="rtl">
                        <div class="col-md-12 pt-4 ">
                            <div class="col-md-12 border row m-0">
                                <div class="col-md-2 p-3"></div>
                                <div class="col-md-4 p-3"><span>محصول</span></div>
                                <div class="col-md-2 p-3"><span>قیمت</span></div>
                                <div class="col-md-2 p-3"><span>تعداد</span></div>
                                <div class="col-md-2 p-3"><span>جمع جزء</span></div>
                            </div>
                        </div>
                        <div class="col-md-12" style={{ height: "70px" }}>
                            <div class="col-md-12 border rounded-0 align-items-center row m-0">
                                <div class="col-md-1 p-3 "><button class="btn btn-dark rounded-circle btn-circle">x</button></div>
                                <div class="col-md-2 p-3">
                                    <img src={IMg} class="col-md-12" style={{ height: "70px", objectFit: "cover" }} />
                                </div>
                                <div class="col-md-3 p-3"><a href='/nmd'>کفش  سفید نایکی مجهز به نیروی باد</a></div>
                                <div class="col-md-2 p-3">789,000تومان</div>
                                <div class="col-md-2 p-3">
                                    <button class="btn-circle btn border">-</button>
                                    <span class="border-bottom p-2">1</span>
                                    <button class="btn-circle btn border">+</button>
                                </div>
                                <div class="col-md-2 p-3">789,000تومان</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>);
}

export default cart;