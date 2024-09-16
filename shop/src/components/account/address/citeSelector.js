import React, { useState } from 'react';

// Sample data for provinces, cities, and their counties in Persian
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

const CityCountySelector = () => {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [cities, setCities] = useState([]);
    const [counties, setCounties] = useState([]);

    // Handle province selection
    const handleProvinceChange = (event) => {
        const province = event.target.value;
        setSelectedProvince(province);
        setCities(data[province]?.cities || []); // Update cities based on selected province
        setCounties(data[province]?.counties || []); // Update counties based on selected province
    };

    return (
        <div class="fontr row m-0 pt-2" dir="rtl" style={{ color: "#000000" }}>
            <div class="col-md-6">
                <label class="h5">
                    انتخاب استان:
                    <div class="pt-2">
                        <select class="form-select rounded-0" value={selectedProvince} onChange={handleProvinceChange}>
                            <option value="">انتخاب کنید</option>
                            {Object.keys(data).map((province) => (
                                <option key={province} value={province}>
                                    {province}
                                </option>
                            ))}
                        </select>
                    </div>
                </label>
            </div>
            <div class="col-md-6">
                <label class="h5">
                    انتخاب شهر:
                    <div class="pt-2">

                        <select class="form-select rounded-0" disabled={!selectedProvince}>
                            <option value="">انتخاب کنید</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default CityCountySelector;
