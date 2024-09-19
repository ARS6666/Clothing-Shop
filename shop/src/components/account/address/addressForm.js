import React, { useState } from 'react';
import Cities from "./citeSelector";
import "https://kit.fontawesome.com/6c2a0de8a3.js";
import "../../../assets/css/account/address.css";
function Address() {

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const openOverlay = () => {
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    return (<>
        <div class="col-md-12 pt-2 fontr" >
            <div class="col-md-12" style={{ borderStyle: "dashed" }}>
                <buttton class="col-md-12 btn btn-lg col-12 border-0" onClick={openOverlay}><h4 class="text-dark">افزودن آدرس</h4></buttton>
            </div>
        </div>
        {isOverlayOpen && (
            <div className="overlay row m-0 fontr" dir="rtl">
                <div class="col-md-12 d-flex justify-content-center">
                    <div class=" col-md-8 " style={{ backgroundColor: "#ffffff" }}>
                        <div class="col-md-12">

                        </div>
                        <div class="col-md-12  text-center p-1 h4 row m-0">
                            <div class="justify-content-end col-md-12 d-flex" style={{ height: "25px" }}>
                                <button class="btn  btn-lg border-0" onClick={closeOverlay}><i class="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                            <span class="text-dark">افزودن آدرس جدید</span>
                        </div>
                        <div class="col-md-12">
                            <span class="text-dark h5 p-1">نام و نام خانوادگی تحویل گیرنده *</span>
                            <div class="pt-2 col-md-12 p-3">
                                <input class="form-control form-control-lg border-dark rounded-0"></input>
                            </div>
                        </div>
                        <div class="co-md-12 row m-0">
                            <div class="col-md-6">
                                <span class="text-dark h5">شماره موبایل*</span>
                                <div class="pt-2 col-md-12 p-1">
                                    <input class="form-control form-control-lg border-dark rounded-0"></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <span class="text-dark h5">کد پستی*</span>
                                <div class="pt-2 col-md-12 p-1">
                                    <input class="form-control form-control-lg border-dark rounded-0"></input>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <Cities />
                        </div>
                        <div class="col-md-12 p-3">
                            <span class="text-dark h5">آدرس پستی *</span>
                            <textarea
                                rows="4"
                                className="form-control border-dark rounded-0 textarea pt-3"
                                placeholder="آدرس تحویل گیرنده را وارد کنید"
                            />
                        </div>
                        <div class="col-md-12 col-12 row m-1">
                            <div class="col-md-10 col-8"></div>
                            <div class="col-md-1 col-2 "><button class="btn rounded-0  text-light" style={{ backgroundColor: "#000000" }}>انصراف</button></div>
                            <div class="col-md-1 col-2 "><button class="btn  rounded-0  text-light" style={{ backgroundColor: "#000000" }}>ثبت</button></div>

                        </div>
                    </div>

                </div>
            </div>
        )
        }
    </>);
}

export default Address;