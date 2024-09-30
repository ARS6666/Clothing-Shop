import React, { useState } from "react";

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", "S9ziK45gGaKNq54vL0xyaYBmlmv9oN6fgKoYYiBBuiZWoitosXmdQbFv3wW0t1CJ");

    const handleLogin = async () => {
        const raw = JSON.stringify({
            "email": Email,
            "password": Password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/account/api/v1/token/login/", requestOptions);

            if (!response.ok) {
                const errorResponse = await response.json();
                console.log(errorResponse);
                setErrorMessage("Login failed:" `${errorResponse.detail || response.statusText}`);
                setSuccessMessage("");
                return;
            }

            const result = await response.json();
            console.log(result);
            setSuccessMessage("Login successful!");
            setErrorMessage("");
            setEmail("")
            setPassword("")
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred during login.");
            setSuccessMessage("");
        }
    };

    return (
        <>
            <div className="col-md-12 fontr" dir="rtl" style={{ backgroundColor: "#D9D9D9", height: "600px" }}>
                <div className="col-md-12 d-flex justify-content-center pt-5">
                    <div className="col-md-4 pt-5">
                        <div className="col-md-12 p-5 shadow bg-light" style={{ borderRadius: "20px" }}>
                            <div className="d-flex justify-content-center">
                                <span className="h2 col-md-12 border-bottom border-dark text-center p-1"> ورود </span>
                            </div>
                            <div className="pt-3">
                                <label className="h5">ایمیل:</label>
                            </div>
                            <div className="pt-1">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="pt-3">
                                <label className="h5">رمز عبور:</label>
                            </div>
                            <div className="pt-1">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-md-12 d-flex justify-content-center pt-4">
                                <button className="col-md-6 col-6 btn btn-outline-success" onClick={handleLogin}>ورود</button>
                            </div>
                            {errorMessage && <div className="text-danger pt-3" dir="ltr">{errorMessage}</div>}
                            {successMessage && <div className="text-success pt-3" dir="ltr">{successMessage}</div>}

                            <div className="col-md-12 d-flex justify-content-end pt-2">
                                <span>اکانت ندارید؟</span>
                                <a href="/signin">ثبت نام کنید</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
