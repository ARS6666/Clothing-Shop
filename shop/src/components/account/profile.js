import React, { useState, useEffect } from 'react';
import Loading from '../loading/loading';
import IMg from "../../assets/media/pfp.jpg";
import url from "../../config.json";

function ProfProp() {
    const [IsLoading, setisLoading] = useState(true);
    const [Prop, setProp] = useState([]);
    const token = localStorage.getItem('token');
    const [Id, setId] = useState("");
    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [LastName, setLastName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleName = (event) => setName(event.target.value);
    const handlePhone = (event) => setPhone(event.target.value);
    const handleLastName = (event) => setLastName(event.target.value);

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
        redirect: "follow",
    };

    useEffect(() => {
        fetch(`${url.baseUrl}/auth/profile/`, requestOptions)
            .then((response) => response.json())
            .then((result) => { setProp(result); setisLoading(false); })
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

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = () => {
        console.log(Id)
        if (!selectedFile || !selectedFile.type.startsWith("image/")) {
            console.error("Selected file is not a valid image.");
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('id', Id);
        formData.append('user_id', Id);
        formData.append('name', Name);
        formData.append('family', LastName);
        formData.append('description', "");

        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("authorization", "Basic MDkxMDQ4NDU3NDk6MTIz");
        myHeaders.append("X-CSRFToken", "q57iInNu2kSPMTmMGoYoDFw5mtQ32POz684Hl0QVQIieFoQIqnwwjg2izEvANEgE");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
            redirect: "follow"
        };

        fetch(`${url.baseUrl}/auth/profile/`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    };

    return (
        <>
            {IsLoading ? <Loading /> : null}
            <div className="col-md-12 pt-2 fontr border" dir="rtl" style={{ borderRadius: "10px" }}>
                <div className="col-md-12">
                    <div className="col-md-12 p-3 row m-0">
                        <div className="col-md-6 d-flex justify-content-start">
                            <span className="h4 col-md-2 border-bottom border-2 border-dark p-2">پروفایل</span>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button className="btn btn-dark btn-sm rounded-0" onClick={reset}>بازیابی</button>
                        </div>
                        <div className="col-md-12 row m-0 pt-3 d-flex justify-content-center">
                            <div className="col-md-5">
                                <span className="text-dark">نام:</span>
                                <div className="pt-2 col-md-12">
                                    <input className="form-control form-control-lg border-dark rounded-0" onChange={handleName} value={Name} required />
                                </div>
                                <span className="text-dark pt-5">نام خانوادگی:</span>
                                <div className="pt-2 col-md-12">
                                    <input className="form-control form-control-lg border-dark rounded-0" onChange={handleLastName} value={LastName} required />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="pt-3">
                                    <span className="text-dark pt-5">عکس پروفایل:</span>
                                </div>
                                <div className="pt-2 pb-5 col-md-12">
                                    <input type="file" id="imageInput" accept="image/*" dir="rtl" className="form-control form-control-lg border-dark rounded-0" onChange={handleFileChange} required />
                                </div>
                            </div>
                            <div className="col-md-12 col-12 d-flex justify-content-center pt-2">
                                <div className="col-md-10 col-10">
                                    <button className="col-md-12 col-12 btn btn-lg btn-outline-success rounded-0" onClick={handleSubmit}>ثبت اطلاعات</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfProp;
