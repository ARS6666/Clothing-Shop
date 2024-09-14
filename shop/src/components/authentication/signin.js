import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-CSRFToken", "KMc5hxXTxGq48f6W7B9S2FipbKgtw0PovamdrfyY7fYp2zJGTo0t4TkwtbyIFRML");

        const raw = JSON.stringify({
            email: email,
            password: password,
            password1: password1,
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/account/api/v1/registration/", requestOptions);
            const result = await response.json();

            if (response.ok) {
                navigate('/login'); // Redirect to login page after successful registration
            } else {
                setError(result); // Display error message
            }
        } catch (error) {
            setError(error.toString());
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
                            <input class="form-control form-control-lg" onChange={e => setPassword(e.target.value)}  dir="ltr"/>
                        </div>
                        <small id="emailHelp" class="form-text text-muted">رمز عبور شما باید دارای 8 کرکتر باشد.</small>
                        <div class="pt-3">
                            <label class="h5 ">تکرار رمز عبور: </label>
                        </div>

                        <div class="pt-1">
                            <input class="form-control form-control-lg" onChange={e => setPassword1(e.target.value)}  dir="ltr"/>
                        </div>
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}

                        <div class="col-md-12 d-flex justify-content-center pt-4">
                            <button type="submit" class=" col-md-6 btn btn-outline-success">ثبت نام</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>


    </>);
}

export default SignIn;