import React, { useState, useEffect } from 'react';
function AddressDisplay() {
    const [Prop, setProp] = useState([])
    const token = localStorage.getItem('token');

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("X-CSRFToken", "3PsPK9K8KJIvlRSxGFP8sOFAlGX4AalPRfR0NEtrC1ekoz46JTToUCbSWNrpzbgo");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://127.0.0.1:8000/account/api/v1/address/", requestOptions)
            .then((response) => response.json())
            .then((result) => setProp(result))
            .catch((error) => console.error(error));

    }, []);

    return (<>
        {Prop.map((c) => (
            <div class="col-md-6 p-1 fontr " dir="rtl" style={{ color: "gray" }}>
                <div class=" border border-3 border-dark" style={{ borderStyle: "double" }}>
                    <div class="col-md-12 p-3">
                        <span class="h3">{c.name}</span>
                    </div>
                    <div class="col-md-12 row m-0 fontr pt-3">
                        <div class="col-md-6 text-end h5 ">استان : {c.ostan}</div>
                        <div class="col-md-6 text-end h5 ">شهرستان : {c.shahr}</div>
                    </div>
                    <div class="col-md-12 pt-3">
                        <span class="h5 p-4 ">آدرس :{c.address}.</span>
                    </div>
                    <div class="col-md-12 pt-3">
                        <span class="h5 p-4 ">کد پستی :{c.postcode}</span>
                    </div>
                    <div class="col-md-12 row m-0 fontr pt-3 p-2">
                        <div class="col-md-6 text-end h5 ">تلفن همراه :{c.phone}</div>
                        <div class="col-md-6 text-start h5 "><button class="btn rounded-0 text-light" style={{ backgroundColor: "#000000" }}>حذف</button></div>
                    </div>

                </div>
            </div>
        ))}
    </>);
}

export default AddressDisplay;