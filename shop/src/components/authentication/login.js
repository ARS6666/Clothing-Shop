import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loading from "../loading/loading";
import SignIn from "./signin";
import url from "../../config.json"

function Login() {
    const [Phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [IsLoading, setisLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", "K3pUKlDKLUZFsL3nSzrm8K6VQ5uoTWNXA6mlMlJcCjJUTl7n1qpLebKqIMXdQnUg");

    const handleLogin = async () => {
        setisLoading(true)
        const raw = JSON.stringify({
            "phone": Phone,
            "password": Password
        });


        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch(`${url.baseUrl}/auth/jwt/create/`, requestOptions);

            if (!response.ok) {
                const errorResponse = await response.json();
                console.log(errorResponse);
                setErrorMessage("Login failed:" `${errorResponse.detail || response.statusText}`);
                setSuccessMessage("");
                setisLoading(false)
                return;
            }

            const result = await response.json();
            setisLoading(false)
            localStorage.setItem('token', result.access);
            localStorage.setItem('refresh', result.refresh);

            setSuccessMessage("Login successful!");
            setErrorMessage("");
            setPhone("");
            setPassword("");
            navigate('/account');
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred during login.");
            setSuccessMessage("");
            setisLoading(false)
        }
    };

    return (
        <>
            {IsLoading ? <Loading /> : null}
            <div class="col-md-12 fontr vh-100" dir="rtl" style={{ backgroundColor: "#D9D9D9" }}>
                <div class="col-md-12 d-flex justify-content-center pt-5">
                    <div class="col-md-4 pt-5">
                        <div class="col-md-12 p-5 shadow bg-light" style={{ borderRadius: "20px" }}>
                            <div class="d-flex justify-content-center">
                                <span class="h2 col-md-12 border-bottom border-dark text-center p-1"> ورود </span>
                            </div>
                            <div class="pt-3">
                                <label class="h5">شماره تلفن همراه:</label>
                            </div>
                            <div class="pt-1" dir="ltr">
                                <input
                                    type="Phone"
                                    class="form-control form-control-lg"
                                    value={Phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    id="phone"
                                />
                            </div>
                            <div class="pt-3">
                                <label class="h5">رمز عبور:</label>
                            </div>
                            <div class="pt-1" dir="ltr">
                                <input
                                    type="password"
                                    class="form-control form-control-lg"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter")
                                            handleLogin();
                                    }}
                                    id="password"
                                />
                            </div>
                            <div class="col-md-12 d-flex justify-content-center pt-4">
                                <button class="col-md-6 col-6 btn btn-outline-success" onClick={handleLogin}>ورود</button>
                            </div>
                            {errorMessage && <div class="text-danger pt-3" dir="ltr">{errorMessage}</div>}
                            {successMessage && <div class="text-success pt-3" dir="ltr">{successMessage}</div>}

                            <div class="col-md-12 d-flex justify-content-end pt-2">
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
