import React, { useState } from 'react';
import "https://kit.fontawesome.com/6c2a0de8a3.js"
import './test.css'; // You can add your styles here

const Test = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const openOverlay = () => {
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    return (
        <div className="fontr">
            <button onClick={openOverlay}>Open Overlay</button>

            {isOverlayOpen && (
                <div className="overlay row m-0">
                    <div class="col-md-12 d-flex justify-content-center">
                        <div class=" col-md-8 " style={{ backgroundColor: "#ffffff", height: "400px" }}>
                            <div class="col-md-12">

                            </div>
                            <div class="col-md-12  text-center p-1 h4 row m-0">
                                <div class="justify-content-end col-md-12 d-flex" style={{ height: "25px" }}>
                                    <button class="btn  btn-lg border-0" onClick={closeOverlay}><i class="fa fa-times" aria-hidden="true"></i></button>
                                </div>
                                <span class="text-dark">افزودن آدرس جدید</span>
                            </div>
                            <div class="col-md-12">
                                <tilte class="h5 text-dark">نام و نام خانوادگی تحویل گیرنده *</tilte>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Test;
