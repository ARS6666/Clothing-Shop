import React from 'react';


function Orders() {
    return (<>
        <div class="col-md-12 pt-2 fontr" dir="rtl" style={{ borderRadius: "10px" }}>
            <div class="col-md-12">
                <div class="col-md-12 bg-light p-3">
                    <div class="col-md-12 d-flex justify-content-start">
                        <span class="h4 col-md-2 border-bottom border-2 border-dark p-2">پروفایل</span>
                    </div>
                    <div class="col-md-12 row m-0 pt-3 d-flex justify-content-center">
                        <div class="col-md-5">
                            <span class="text-dark">نام:</span>
                            <div class="pt-2 col-md-12">
                                <input class="form-control form-control-lg border-dark rounded-0"></input>
                            </div>
                            <div class="pt-3">
                                <span class="text-dark ">شماره موبایل:</span>
                            </div>
                            <div class="pt-2  col-md-12">
                                <input class="form-control form-control-lg border-dark rounded-0"></input>
                            </div>
                            <div class="pt-3">
                                <span class="text-dark pt-5">عکس پروفایل:</span>
                            </div>
                            <div class="pt-2 pb-5 col-md-12" >
                                <input type="file" dir="rtl" class="form-control form-control-lg border-dark rounded-0"></input>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <span class="text-dark pt-5"> نام خانوادگی:</span>
                            <div class="pt-2  col-md-12">
                                <input class="form-control form-control-lg border-dark rounded-0"></input>
                            </div>
                            <div class="pt-3">
                                <span class="text-dark pt-5">آدرس ایمیل:</span>
                            </div>
                            <div class="pt-2 pb-1 col-md-12">
                                <input class="form-control form-control-lg border-dark rounded-0"></input>
                            </div>
                        </div>
                        <div class="col-md-12 col-12 d-flex justify-content-center pt-2">
                            <div class="col-md-10 col-10">
                                <button class="col-md-12 col-12 btn btn-lg btn-outline-success">ثبت اطلاعات</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Orders;