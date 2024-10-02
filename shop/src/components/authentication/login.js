import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import SignIn from "./signin";

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", "fX5sFP00keywprbGk4cJWZOEoZmk4owWnxI5gWbR2ukOs4u3xiU3bi5THXM1MC03");

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
            const response = await fetch("http://127.0.0.1:8000/account/api/v1/jwt/create/", requestOptions);

            if (!response.ok) {
                const errorResponse = await response.json();
                console.log(errorResponse);
                setErrorMessage("Login failed:" `${errorResponse.detail || response.statusText}`);
                setSuccessMessage("");
                return;
            }

            const result = await response.json();
            localStorage.setItem('token', result.access);

            setSuccessMessage("Login successful!");
            setErrorMessage("");
            setEmail("");
            setPassword("");
            navigate('/account');
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
