import React from "react";
import "../../assets/css/account/panel.css"
import pfp from "../../assets/media/pfp.jpg"
import "../../assets/css/href.css";


function Panel() {
    return (<>
        <div class="p-3 fontr" dir="rtl">
            <div class="col-md-4" style={{ borderRadius: "20px", height: "600px", backgroundColor: "#000000" }}>
                <div class="d-flex justify-content-center  pt-4 ">
                    <img src={pfp} class="pfp rounded-circle" />
                </div>
                <div class="d-flex justify-content-center  pt-4 ">
                    <span class="text-light h3">عرشیا قاسم زاده</span>
                </div>
                <div class="col-md-12 row ">
                    <div class="d-flex justify-content-satrt col-md-6 pt-4 ">
                        <span class="text-light h4"> شماره تلفن:</span>
                    </div>
                    <div class="d-flex justify-content-end col-md-6 pt-4 ">
                        <span class="text-light h4">09915910538</span>
                    </div>
                </div>
                <div class="col-md-12 row ">
                    <div class="d-flex justify-content-satrt col-md-12 pt-2 ">
                        <span class="text-light h4">آدرس:</span>
                    </div>
                    <div class="d-flex justify-content-end col-md-12    ">
                        <span class="text-light h4 p-2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </span>
                    </div>
                </div>
                <a class="hrefb" href="/cart">
                    <div class="d-flex justify-content-start col-md-12 border-top border-bottom border">
                        <span class="text-light h4 p-2">سفارشات</span>
                    </div>
                </a>
                <a class="hrefb" href="/cart">
                    <div class="d-flex justify-content-start col-md-12 border-bottom">
                        <span class="text-light h4 p-2">تغییر جزییات حساب کاربری</span>
                    </div>
                </a>
                <a class="hrefb" href="/cart">
                    <div class="d-flex justify-content-start col-md-12 border-bottom">
                        <span class="text-light h4 p-2">سفارشات قبلی</span>
                    </div>
                </a>

            </div>
        </div>

    </>);
}

export default Panel;
