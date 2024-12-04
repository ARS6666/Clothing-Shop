import React, { useState, useEffect } from 'react';
import "../../assets/css/account/panel.css"
import pfp from "../../assets/media/pfp.jpg"
import Profile from "./profile"
import Address from './address';
import Order from './orders/order';
import "../../assets/css/href.css";
import "https://kit.fontawesome.com/6c2a0de8a3.js"
import url from "../../config.json"




function Panel() {
    const [Prop, setProp] = useState([]);
    const token = localStorage.getItem('token');
    const [Name, setN] = useState("");
    const [Img, setI] = useState("");

    useEffect(() => {

        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("X-CSRFToken", "hokKVAaR2S1flum20JC9E6zabZsARewk31NGGIUOMRiNOlAWLEHjAjRwiGZlfPp8");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url.baseUrl}/auth/profile/`, requestOptions)
            .then((response) => response.json())
            .then((result) => setProp(result))
            .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
        if (Prop.length > 0) {
            setN(Prop[0].name);
            setI(Prop[0].image);

        }
    }, [Prop]);


    const [content, setContent] = useState(<Profile />);
    const changeContent = (newContent) => {
        setContent(newContent);
    };

    const [isChecked, setIsChecked] = useState(true);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);

    const handleClick = () => {
        setIsChecked(prevChecked => !prevChecked);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
    };
    const handleClick2 = () => {
        setIsChecked2(prevChecked => !prevChecked);
        setIsChecked(false);
        setIsChecked3(false);
        setIsChecked4(false);
    };
    const handleClick3 = () => {
        setIsChecked3(prevChecked => !prevChecked);
        setIsChecked2(false);
        setIsChecked(false);
        setIsChecked4(false);
    };
    const handleClick4 = () => {
        setIsChecked4(prevChecked => !prevChecked);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked(false);
    };


    return (<>
        <div class=" fontr col-md-12 row m-0 pb-2 pt-2" dir="rtl">
            <div class="col-md-3 border" style={{ borderRadius: "10px" }}>
                <div class="d-flex justify-content-center  pt-4 ">
                    <img src={Img} class="pfp rounded-circle" />
                </div>
                <div class="d-flex justify-content-center  pt-4 ">
                    <span class=" h4">{Name}</span>
                </div>
                <div class="pt-3">
                    <div class=" col-md-12 border-top border-bottom part">
                        <button onClick={() => {
                            handleClick(); changeContent(
                                <Profile />
                            )
                        }}
                            class="btn  col-md-12 col-12 btn-lg hover d-flex justify-content-start border-0"
                            style={{ backgroundColor: isChecked ? '#7a7a7a' : '' }}
                        ><h5 class="p-2">
                                <i class="  p-1 fa fa-user" aria-hidden="true"></i>
                                تغییر جزییات حساب کاربری
                            </h5>
                        </button>
                    </div>
                    <div class=" col-md-12 border-top border-bottom part">
                        <button onClick={() => { handleClick2(); changeContent(<Order />) }}
                            class="btn  col-md-12 col-12 btn-lg hover d-flex justify-content-start border-0"
                            style={{ backgroundColor: isChecked2 ? '#7a7a7a' : '' }}
                        ><h5 class="p-2">
                                <i class="fas fa-shopping-basket  p-1"></i>
                                سفارشات
                            </h5>
                        </button>
                    </div>
                    <div class=" col-md-12 border-top border-bottom part">
                        <button onClick={() => { handleClick3(); changeContent(<div class="col-md-12" dir="ltr"><Address /></div>) }}
                            class="btn  col-md-12 col-12 btn-lg hover d-flex justify-content-start border-0"
                            style={{ backgroundColor: isChecked3 ? '#7a7a7a' : '' }}>
                            <h5 class="p-2">
                                <i class="fas fa-map  p-1"></i>
                                آدرس ها
                            </h5>
                        </button>
                    </div>
                    <div class=" col-md-12  border-top border-bottom part">
                        <button onClick={() => { handleClick4(); changeContent("sssoooon") }}
                            class="btn  col-md-12 col-12 btn-lg hover d-flex justify-content-start border-0"
                            style={{ backgroundColor: isChecked4 ? '#7a7a7a' : '' }}>
                            <h5 class="p-2">
                                <i class="fas fa-folder-open  p-1"></i>
                                سفارشات گذشته
                            </h5>
                        </button>
                    </div>
                </div>

            </div>
            <div class="col-md-9">
                {content}
            </div>
        </div>

    </>);
}

export default Panel;
