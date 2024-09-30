import React, { useState, useEffect } from "react";
import "../../assets/css/home/prooductcard.css";

function HProducts() {
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
    fetch("http://127.0.0.1:8000/api/v1/products/", requestOptions)
      .then((response) => response.json())
      .then((result) => setPRoduct(result))
      .catch((error) => console.error(error));
  }, []);




  return (
    <>
      <div class="d-flex justify-content-center m-0">
        <span class="h2 fontr border-bottom border-4 border-danger p-3">
          محصولات
        </span>
      </div>
      <div class="col-md-12 row m-0 d-flex justify-content-center fontr">
        {Product.map((c) => (
          <div class=" col-md-3 col-4 col-sm-4 m-3 product-carde">
            <div class="row m-0">
              <div class="d-flex justify-content-center ">
                <img
                  src={c.pic}
                  class="Imge col-md-11"
                />
              </div>
              <div class="d-flex justify-content-center pt-3">
                <span class="h5 fontr ">{c.name}</span>
              </div>
              <div class="d-flex justify-content-center ">
                <span class=" fontr pt-1 " dir="rtl">
                  {c.price} هزار تومن
                </span>
              </div>
            </div>
            <div className="hover-detailse col-md-12 ">
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