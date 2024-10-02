import React, { useState, useEffect } from 'react';


function Orders() {
    const [Prop, setProp] = useState([]); 
    const token = localStorage.getItem('token');
    const [Name, setName] = useState("");
    const handleName = (event) => {
        setName(event.target.value);
    };
    const [Phone, setPhone] = useState("");
    const handlePhone = (event) => {
        setPhone(event.target.value);
    };
    const [Email, setEmail] = useState("");
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const [LastName, setLastName] = useState("");
    const handleLastName = (event) => {
        setLastName(event.target.value);
    };
    
    const reset = () => {
        if (Prop.length > 0) {
            setName(Prop[0].name); 
            setPhone(Prop[0].phone);
            setEmail(Prop[0].email);
            setLastName(Prop[0].family);
        }
    };
    
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`); 
    myHeaders.append("X-CSRFToken", "0a1bccef9a75baa5f7886812bec9a1ef60862467");
    
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/account/api/v1/profile/", requestOptions)
            .then((response) => response.json())
            .then((result) => setProp(result))
            .catch((error) => console.error(error));
    }, []);
    
    useEffect(() => {
        if (Prop.length > 0) {
            setName(Prop[0].name); 
            setPhone(Prop[0].phone);
            setEmail(Prop[0].email);
            setLastName(Prop[0].family);
        }
    }, [Prop]);

    return (<>
        <div class="col-md-12 pt-2 fontr border" dir="rtl" style={{ borderRadius: "10px" }}>
            <div class="col-md-12">
                <div class="col-md-12  p-3 row m-0">
                    <div class="col-md-6 d-flex justify-content-start">
                        <span class="h4 col-md-2 border-bottom border-2 border-dark p-2">پروفایل</span>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end">
                        <button class=" btn btn-dark btn-sm rounded-0" onClick={reset}>بازیابی</button>
                    </div>
                    <div class="col-md-12 row m-0 pt-3 d-flex justify-content-center">
                        <div class="col-md-5">
                            <span class="text-dark">نام:</span>
                            <div class="pt-2 col-md-12">
                                <input class="form-control form-control-lg border-dark rounded-0" onChange={handleName} value={Name} required></input>
                            </div>
                            <div class="pt-3">
                                <span class="text-dark ">شماره موبایل:</span>
                            </div>
                            <div class="pt-2 col-md-12">
                                <input dir="ltr" class="form-control form-control-lg border-dark rounded-0"
                                    required
                                    style={{
                                        WebkitAppearance: 'none',
                                        MozAppearance: 'textfield',
                                        type: "number",
                                    }}
                                    onChange={handlePhone} value={Phone}></input>
                            </div>
                            <div class="pt-3">
                                <span class="text-dark pt-5">عکس پروفایل:</span>
                            </div>
                            <div class="pt-2 pb-5 col-md-12" >
                                <input type="file" dir="rtl" class="form-control form-control-lg border-dark rounded-0" required></input>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <span class="text-dark pt-5"> نام خانوادگی:</span>
                            <div class="pt-2  col-md-12">
                                <input class="form-control form-control-lg border-dark rounded-0" onChange={handleLastName} value={LastName} required></input>
                            </div>
                            <div class="pt-3">
                                <span class="text-dark pt-5">آدرس ایمیل:</span>
                            </div>
                            <div class="pt-2 pb-1 col-md-12">
                                <input dir="ltr" class="form-control form-control-lg border-dark rounded-0" onChange={handleEmail} value={Email} required></input>
                            </div>
                        </div>
                        <div class="col-md-12 col-12 d-flex justify-content-center pt-2">
                            <div class="col-md-10 col-10">
                                <button class="col-md-12 col-12 btn btn-lg btn-outline-success rounded-0" type='submit'>ثبت اطلاعات</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Orders;