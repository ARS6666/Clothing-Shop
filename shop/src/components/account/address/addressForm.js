import React, { useState } from 'react';
import "https://kit.fontawesome.com/6c2a0de8a3.js";
import "../../../assets/css/account/address.css";
import url from "../../../config.json"


function Address() {
    const token = localStorage.getItem('token');
    const data = {
        تهران: {
            cities: ['تهران', 'شهریار', 'ملارد', 'ری', 'اسلامشهر', 'پردیس'],
            counties: ['تهران', 'شمیرانات', 'ری', 'اسلامشهر', 'پردیس']
        },
        اصفهان: {
            cities: ['اصفهان', 'کاشان', 'نجف‌آباد', 'خمینی‌شهر', 'دولت‌آباد'],
            counties: ['اصفهان', 'خمینی‌شهر', 'نجف‌آباد', 'کاشان', 'دولت‌آباد']
        },
        فارس: {
            cities: ['شیراز', 'مرودشت', 'جهرم', 'فسا', 'نی‌ریز'],
            counties: ['شیراز', 'مرودشت', 'جهرم', 'فسا', 'نی‌ریز']
        },
        خراسان_رضوی: {
            cities: ['مشهد', 'نیشابور', 'سبزوار', 'تربت حیدریه', 'کاشمر'],
            counties: ['مشهد', 'نیشابور', 'سبزوار', 'تربت حیدریه', 'کاشمر']
        },
        آذربایجان_شرقی: {
            cities: ['تبریز', 'مراغه', 'آذرشهر', 'اهر', 'بستان‌آباد'],
            counties: ['تبریز', 'مراغه', 'آذرشهر', 'اهر', 'بستان‌آباد']
        },
        آذربایجان_غربی: {
            cities: ['ارومیه', 'خوی', 'ماکو', 'پلدشت', 'سلماس'],
            counties: ['ارومیه', 'خوی', 'ماکو', 'پلدشت', 'سلماس']
        },
        البرز: {
            cities: ['کرج', 'ساوجبلاغ', 'نظرآباد', 'طالقان'],
            counties: ['کرج']
        },
        بوشهر: {
            cities: ['بوشهر', 'گناوه', 'دیلم', 'دشتستان'],
            counties: ['بوشهر']
        },
        چهارمحال_وبختیاری: {
            cities: ['شهرکرد', 'بروجن', 'فارسان'],
            counties: ['شهرکرد']
        },
        خراسان_شمالی: {
            cities: ['بجنورد', 'اسفراین', 'شیروان'],
            counties: ['بجنورد']
        },
        زنجان: {
            cities: ['زنجان', 'خرمدره', 'طارم', 'ابهر'],
            counties: ['زنجان']
        },
        سمنان: {
            cities: ['سمنان', 'شاهرود', 'دامغان'],
            counties: ['سمنان']
        },
        سیستان_و_بلوچستان: {
            cities: ['زاهدان', 'زابل', 'خاش'],
            counties: ['زاهدان']
        },
        قزوین: {
            cities: ['قزوین', 'البرز', 'بوئین‌زهرا'],
            counties: ['قزوین']
        },
        قم: {
            cities: ['قم'],
            counties: ['قم']
        },
        کردستان: {
            cities: ['سنندج', 'قروه', 'بیجار'],
            counties: ['سنندج']
        },
        کرمان: {
            cities: ['کرمان', 'رفسنجان', 'زرند'],
            counties: ['کرمان']
        },
        کرمانشاه: {
            cities: ['کرمانشاه', 'سنقر و کلیایی'],
            counties: ['کرمانشاه']
        },
        کهگیلویه_و_بویراحمد: {
            cities: ['یاسوج', 'گچساران'],
            counties: ['یاسوج']
        },
        گلستان: {
            cities: ['گرگان', 'گنبد کاووس'],
            counties: ['گرگان']
        },
        گیلان: {
            cities: ['رشت', 'لاهیجان', 'آستارا'],
            counties: ['رشت']
        },
        مازندران: {
            cities: ['ساری', 'بابل', 'آمل'],
            counties: ['ساری']
        },
        هرمزگان: {
            cities: ['بندرعباس', 'قشم'],
            counties: ['بندرعباس']
        },
        یزد: {
            cities: ['یزد', 'اردکان'],
            counties: ['یزد']
        }
    };
    const [selectedProvince, setSelectedProvince] = useState('');
    const [cities, setCities] = useState([]);
    const [counties, setCounties] = useState([]);

    const handleProvinceChange = (event) => {
        const province = event.target.value;
        setSelectedProvince(province);
        setCities(data[province]?.cities || []);
        setCounties(data[province]?.counties || []);
    };
    const [Name, setName] = useState("")
    const handleName = (event) => {
        setName(event.target.value);
    };
    const [Address, setAddress] = useState("")
    const handleAddress = (event) => {
        setAddress(event.target.value);
    };
    const [Phone, setPhone] = useState()
    const handlePhone = (event) => {
        setPhone(event.target.value);
    };
    const [Ostan, setOstan] = useState("")
    const handleOstan = (event) => {
        setOstan(event.target.value);
    };
    const [Shahr, setShahr] = useState("")
    const handleShahr = (event) => {
        setShahr(event.target.value);
    };
    const [PostCode, setPostCode] = useState("")
    const HandlePostCode = (event) => {
        setPostCode(event.target.value);
    };

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", "suAdFiV4TS429JyIf0LP0hxKoYL4IGxU5HHR9e52YQvsh6wbWiwScHXhWAwZgI24");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
        "profile": 1,
        "name": Name,
        "address": Address,
        "ostan": Ostan,
        "shahr": Shahr,
        "postcode": PostCode,
        "phone": Phone
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    function STS() {
        fetch(`${url.baseUrl}/account/api/v1/address/`, requestOptions)
            .then((response) => response.text())
            .then((result) => setIsOverlayOpen(false))
            .catch((error) => console.error(error));
    }


    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const openOverlay = () => {
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    return (<>
        <div class="col-md-12 pt-2 fontr" >
            <div class="col-md-12" style={{ borderStyle: "dashed" }}>
                <buttton class="col-md-12 btn btn-lg col-12 border-0" onClick={openOverlay}><h4 class="text-dark">افزودن آدرس</h4></buttton>
            </div>
        </div>
        {isOverlayOpen && (
            <div className="overlay row m-0 fontr" dir="rtl">
                <div class="col-md-12 d-flex justify-content-center">
                    <div class=" col-md-8 " style={{ backgroundColor: "#ffffff" }}>
                        <div class="col-md-12">

                        </div>
                        <div class="col-md-12  text-center p-1 h4 row m-0">
                            <div class="justify-content-end col-md-12 d-flex" style={{ height: "25px" }}>
                                <button class="btn  btn-lg border-0" onClick={closeOverlay}><i class="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                            <span class="text-dark">افزودن آدرس جدید</span>
                        </div>
                        <div class="col-md-12">
                            <span class="text-dark h5 p-1">نام و نام خانوادگی تحویل گیرنده *</span>
                            <div class="pt-2 col-md-12 p-3">
                                <input class="form-control form-control-lg border-dark rounded-0" onChange={handleName}></input>
                            </div>
                        </div>
                        <div class="co-md-12 row m-0">
                            <div class="col-md-6">
                                <span class="text-dark h5">شماره موبایل*</span>
                                <div class="pt-2 col-md-12 p-1">
                                    <input class="form-control form-control-lg border-dark rounded-0" onChange={handlePhone}></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <span class="text-dark h5">کد پستی*</span>
                                <div class="pt-2 col-md-12 p-1">
                                    <input class="form-control form-control-lg border-dark rounded-0" onChange={HandlePostCode}></input>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="fontr row m-0 pt-2" dir="rtl" style={{ color: "#000000" }}>
                                <div class="col-md-6 col-6">
                                    <label class="h5">
                                        انتخاب استان:
                                        <div class="pt-2">
                                            <select class="form-select rounded-0" value={selectedProvince} onChange={handleProvinceChange}>
                                                <option value="">انتخاب کنید</option>
                                                {Object.keys(data).map((province) => (
                                                    <option key={province} value={province} onClick={handleOstan}>
                                                        {province}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6 col-6">
                                    <label class="h5">
                                        انتخاب شهر:
                                        <div class="pt-2">

                                            <select class="form-select rounded-0" disabled={!selectedProvince}>
                                                <option value="">انتخاب کنید</option>
                                                {cities.map((city) => (
                                                    <option key={city} value={city} onClick={handleShahr}>
                                                        {city}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 p-3">
                            <span class="text-dark h5">آدرس پستی *</span>
                            <textarea
                                rows="4"
                                className="form-control border-dark rounded-0 textarea pt-3"
                                placeholder="آدرس تحویل گیرنده را وارد کنید"
                                onChange={handleAddress}
                            />
                        </div>
                        <div class="col-md-12 col-12 row m-1">
                            <div class="col-md-10 col-8"></div>
                            <div class="col-md-1 col-2 "><button class="btn rounded-0  text-light" style={{ backgroundColor: "#000000" }} onClick={closeOverlay}>انصراف</button></div>
                            <div class="col-md-1 col-2 "><button class="btn  rounded-0  text-light" style={{ backgroundColor: "#000000" }} onClick={STS}>ثبت</button></div>

                        </div>
                    </div>

                </div>
            </div>
        )
        }
    </>);
}

export default Address;