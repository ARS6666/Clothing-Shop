import React from "react";

function Login() {
    
    return (<>
        <div class="col-md-12  fontr " dir="rtl" style={{ backgroundColor: "#D9D9D9", height: "600px" }}>
            <div class="col-md-12 d-flex justify-content-center pt-5" >
                <div class="col-md-4  pt-5 ">
                    <div class="col-md-12 p-5  shadow bg-light" style={{ borderRadius: "20px" }}>
                        <div class="d-flex justify-content-center">
                            <span class="h2 col-md-12 border-bottom border-dark text-center p-1">
                                ورود
                            </span>
                        </div>
                        <div class="pt-3">
                            <label class="h5 ">ایمیل:</label>
                        </div>

                        <div class="pt-1">
                            <input class="form-control form-control-lg" />
                        </div>
                        <div class="pt-3">
                            <label class="h5 ">رمز عبور:</label>
                        </div>

                        <div class="pt-1">
                            <input class="form-control form-control-lg" />
                        </div>
                        <div class="col-md-12 d-flex justify-content-center pt-4">
                            <button class=" col-md-6 btn btn-outline-success">ورود</button>
                        </div>
                        <div class=" col-md-12 d-flex justify-content-end pt-2">
                            <span >اکانت ندارید؟</span>
                            <a href="/signin">ثبت نام کنید</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    </>);
}

export default Login;
