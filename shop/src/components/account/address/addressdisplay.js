import React from 'react';
function AddressDisplay() {
    return (<>
        <div class="col-md-6 p-1 fontr " dir="rtl" style={{color:"gray"}}>
            <div class=" border border-3 border-dark" style={{ borderStyle: "double" }}>
                <div class="col-md-12 p-3">
                    <span class="h3">عرشیا قاسم زاده</span>
                </div>
                <div class="col-md-12 row m-0 fontr pt-3">
                    <div class="col-md-6 text-end h5 ">استان    : زنجان</div>
                    <div class="col-md-6 text-end h5 ">شهرستان : زنجان</div>
                </div>
                <div class="col-md-12 pt-3">
                    <span class="h5 p-4 ">آدرس : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                </div>
                <div class="col-md-12 pt-3">
                    <span class="h5 p-4 ">کد پستی :24214124</span>
                </div>
                <div class="col-md-12 row m-0 fontr pt-3">
                    <div class="col-md-6 text-end h5 ">تلفن همراه :0991591053841</div>
                    <div class="col-md-6 text-start h5 "><button class="btn rounded-0 text-light"style={{backgroundColor:"#000000"}}>حدف</button></div>
                </div>

            </div>
        </div>
    </>);
}

export default AddressDisplay;