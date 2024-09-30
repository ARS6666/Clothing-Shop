import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);
        if (password !== password1) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-CSRFToken", "S9ziK45gGaKNq54vL0xyaYBmlmv9oN6fgKoYYiBBuiZWoitosXmdQbFv3wW0t1CJ");

        const raw = JSON.stringify({
            "email": email,
            "password": password,
            "password1": password1
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/account/api/v1/registration/", requestOptions);
            const result = await response.json();

            if (response.ok) {
                navigate('/login');
                setEmail("");
                setPassword("");
                setPassword1("");
            } else {
                setError(result.message || "Registration failed.");
            }
        } catch (error) {
            setError(error.toString());
        } finally {
            setLoading(false);
        }
    };

    return (<>
        <div class="col-md-12  fontr " dir="rtl" style={{ backgroundColor: "#D9D9D9", height: "600px" }}>
            <form onSubmit={handleSubmit} class="col-md-12 d-flex justify-content-center pt-5">

                <div class="col-md-4  ">
                    <div class="col-md-12 p-5  shadow bg-light" style={{ borderRadius: "20px" }}>
                        <div class="d-flex justify-content-center">
                            <span class="h2 col-md-12 border-bottom border-dark text-center p-1">
                                ثبت نام
                            </span>
                        </div>
                        <div class="pt-3">
                            <label class="h5 ">ایمیل:</label>
                        </div>

                        <div class="pt-1">
                            <input class="form-control form-control-lg" onChange={e => setEmail(e.target.value)} dir="ltr" />
                        </div>
                        <div class="pt-3">
                            <label class="h5 ">رمز عبور:</label>
                        </div>

                        <div class="pt-1">
                            <input class="form-control form-control-lg" onChange={e => setPassword(e.target.value)} dir="ltr" />
                        </div>
                        <small id="emailHelp" class="form-text text-muted">رمز عبور شما باید دارای 8 کرکتر باشد.</small>
                        <div class="pt-3">
                            <label class="h5 ">تکرار رمز عبور: </label>
                        </div>

                        <div class="pt-1">
                            <input class="form-control form-control-lg" onChange={e => setPassword1(e.target.value)} dir="ltr" />
                        </div>
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}

                        <div class="col-md-12 d-flex justify-content-center pt-4">
                            <button type="submit" class=" col-md-6 col-6 btn btn-outline-success">ثبت نام</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>


    </>);
}

export default SignIn;
