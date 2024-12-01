import React, { useState, useEffect } from 'react';
import Loading from '../loading/loading';
import IMg from "../../assets/media/pfp.jpg"
import url from "../../config.json"


function ProfProp() {
    const [IsLoading, setisLoading] = useState(true)
    const [Prop, setProp] = useState([]);
    const token = localStorage.getItem('token');
    const [Id, setId] = useState("")
    const [Name, setName] = useState("");
    const handleName = (event) => {
        setName(event.target.value);
    };
    const [Phone, setPhone] = useState("");
    const handlePhone = (event) => {
        setPhone(event.target.value);
    };
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const formData = new FormData();
    formData.append('image', selectedFile);
    const [LastName, setLastName] = useState("");
    const handleLastName = (event) => {
        setLastName(event.target.value);
    };

    const reset = () => {
        if (Prop.length > 0) {
            setName(Prop[0].name);
            setPhone(Prop[0].phone);
            setLastName(Prop[0].family);
        }
    };

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("X-CSRFToken", "SjMmaTXAj0X5A8Z7PTGMws8sPzdC2JD3O0JBo5EZQsSLHwEcJdVSdai0gt3vYEqF");
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    useEffect(() => {
        fetch(`${url.baseUrl}/auth/profile/`, requestOptions)
            .then((response) => response.json())
            .then((result) => { setProp(result); setisLoading(false) })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        if (Prop.length > 0) {
            setName(Prop[0].name);
            setId(Prop[0].id);
            setPhone(Prop[0].phone);
            setLastName(Prop[0].family);
        }
    }, [Prop]);


    const handleSubmit = () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("authorization", "Basic MDkxMDQ4NDU3NDk6MTIz");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-CSRFToken", "q57iInNu2kSPMTmMGoYoDFw5mtQ32POz684Hl0QVQIieFoQIqnwwjg2izEvANEgE");

        const raw = JSON.stringify({
            "id": Id,
            "name": Name,
            "image": Image,
            "family": LastName
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url.baseUrl}/auth/profile/1`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    };


    return (<>
        {IsLoading ? <Loading /> : null}
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
                                <span class="text-dark pt-5">عکس پروفایل:</span>
                            </div>
                            <div class="pt-2 pb-5 col-md-12" >
                                <input type="file" dir="rtl" class="form-control form-control-lg border-dark rounded-0" onChange={handleFileChange} required></input>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <span class="text-dark pt-5"> نام خانوادگی:</span>
                            <div class="pt-2  col-md-12">
                                <input class="form-control form-control-lg border-dark rounded-0" onChange={handleLastName} value={LastName} required></input>
                            </div>
                        </div>
                        <div class="col-md-12 col-12 d-flex justify-content-center pt-2">
                            <div class="col-md-10 col-10">
                                <button class="col-md-12 col-12 btn btn-lg btn-outline-success rounded-0" onClick={handleSubmit}>ثبت اطلاعات</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ProfProp;