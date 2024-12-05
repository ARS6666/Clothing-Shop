import React, { useState, useEffect } from "react";
import "../../assets/css/home/productcard.css";
import Loading from "../loading/loading";
import url from "../../config.json"


function HProducts() {
  const [IsLoading, setisLoading] = useState(true)
  const [Product, setPRoduct] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append(
    "X-CSRFToken",
    "eEAIhybYoInBYX8ZQrRp3EaIxvQ9JkybnKje3c7ErDM26IYdDViudwiEsmQI1o7j"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(`${url.baseUrl}/api/products/`, requestOptions)
      .then((response) => response.json())
      .then((result) => { setPRoduct(result); setisLoading(false) })
      .catch((error) => console.error(error));
  }, []);

  const addCommas = (number) => {
    let [integer] = number.toString().split('.');

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return integer;
  };

  return (
    <>
      {IsLoading ? <Loading /> : null}

      <div class="d-flex justify-content-center m-0">
        <span class="h2 fontr border-bottom border-4 border-danger p-3">
          محصولات
        </span>
      </div>
      <div class="col-md-12 row m-0 d-flex justify-content-center fontr">
        {Product?.slice(0, 9).map((c) => (
          <div className={` col-md-3 col-4 col-sm-4 m-3 product-cardee Anim ${c.count === 0 ? 'out-of-stock' : ''}`}>
            <div class="row m-0">
              {c.discount != 0 && c.count != 0 ? <div class="discountDisplay">{c.discount}%</div> : null}
              <div class="d-flex justify-content-center ">
                <img
                  src={c.pic}
                  class="Imge col-md-11"
                />
              </div>
              <div class="d-flex justify-content-center pt-3">
                <span class="h5 fontr text-center col-md-8">{c.name}</span>
              </div>
              <div class="d-flex justify-content-center ">
                <span class=" fontr pt-1 " dir="rtl">
                {addCommas(c.price)} هزار تومان
                </span>
              </div>
            </div>
            <a class="hrefb align-self-center" href={"pi?id=" + c.id}>
              <div className="hover-detailsee col-md-12 ">
                <div
                  class="d-flex justify-content-center bpe"
                >
                  <a class="hrefb align-self-center" href={"pi?id=" + c.id}>
                    <button className="btn btn-light hover  fontr ">
                      مشاهده محصول
                    </button>
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
        <div class="d-flex justify-content-center pt-4 mb-4">
          <a class="hrefw col-md-6 col-6" href="/products"><button class="btn btn-lg btn-dark col-md-12 col-12">مشاهده همه</button></a>
        </div>
      </div>
    </>
  );
}

export default HProducts;