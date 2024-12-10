import React, { useState, useEffect } from "react";
import "../../assets/css/home/Homeproduct.css";
import Loading from "../loading/loading";
import url from "../../config.json";

function HProducts() {
  const [IsLoading, setIsLoading] = useState(true);
  const [Product, setProduct] = useState([]);
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
      .then((result) => {
        setProduct(result);
        setIsLoading(false);
      })
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

      <div className="d-flex justify-content-center m-0">
        <span className="h2 fontr border-bottom border-4 border-danger p-3">
          محصولات
        </span>
      </div>
      <div className="col-md-12 row m-0 d-flex justify-content-center fontr">
        {Product?.slice(0, 9).map((c) => (
          <div key={c.id} className={`col-md-3 col-sm-8 col-10 m-3 product-cardee Anim pt-5 ${c.count === 0 ? 'out-of-stock' : ''}`}>
            <div className="row m-0">
              {c.discount !== 0 && c.count !== 0 ? <div className="discountDisplay">{c.discount}%</div> : null}
              <div className="d-flex justify-content-center">
                <img src={c.pic} className="Imgee col-12" alt={c.name} />
              </div>
              <div className="d-flex justify-content-center pt-3">
                <span className="h5 fontr text-center col-md-8">{c.name}</span>
              </div>
              <div className="d-flex justify-content-center">
                <span className="fontr pt-1" dir="rtl">
                  {addCommas(c.price)} هزار تومان
                </span>
              </div>
            </div>
            <div className="hover-detailsee col-12">
              <div className="d-flex justify-content-center bpee">
                <a className="hrefb align-self-center" href={`pi?id=${c.id}#${c.name}`}>
                  <button className="btn btn-light hover fontr">
                    مشاهده محصول
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center pt-4 mb-4">
          <a className="hrefw col-md-6 col-12" href="/products"><button className="btn btn-lg btn-dark col-md-12">مشاهده همه</button></a>
        </div>
      </div>
    </>
  );
}

export default HProducts;
