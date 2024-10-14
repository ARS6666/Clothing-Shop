import React, { useState, useEffect } from "react";
import "../../assets/css/hide.css";
import "../../assets/css/home/productcard.css";


const CommonProducts = () => {
  const [Productss, setPRoduct] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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




  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Productss.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 20000);

    return () => clearInterval(intervalId);
  }, [Productss]);

  return (
    <div className="slider-container pt-5 remove p-4">
      <div class="border-bottom border-dark col-md-12 row m-0">
        <div class="d-flex justify-content-start col-md-6">
          <div class="m-1 fontr">
            <button
              class="btn btn-outline-dark"
              onClick={nextSlide}
              disabled={currentIndex >= Productss.length - 3}
            >
              بعدی
            </button>
          </div>
          <div class="m-1 fontr">
            <button
              class="btn btn-outline-dark"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              قبلی
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-end col-md-6">
          <span class=" fontr h3  align-self-center">محصولات مشابه</span>
        </div>
      </div>

      <div className="product-slider">
        <div class="col-md-12 row m-0 " dir="rtl">
          <div className="slider" style={{ transform: `translateX(${currentIndex * (100 / 4)}%)` }}>
            {Productss.map((c) => (
              <div class="p-3 col-md-3" style={{ minWidth: `(-${(100 / 4)}%)` }}>
                <div class={`${c.count === 0 ? 'out-of-stock col-md-12' : ' product-card'}`}>
                  <div class="row m-0">
                    {c.discount != 0 ? <div class="discountDisplay"><span class="">{c.discount}%</span></div> : null}
                    <div class="d-flex justify-content-center ">
                      <img
                        src={c.pic}
                        class="Img col-md-11 p-2"
                      />
                    </div>
                    <div class="d-flex justify-content-center pt-2">
                      <span class="h3 fontr">{c.name}</span>
                    </div>
                    <div class="d-flex justify-content-center ">
                      <span class="h5 fontr pt-1" dir="rtl">
                        {c.price} هزار تومن
                      </span>
                    </div>
                  </div>
                  <a class="hrefb align-self-center" href={"pi?id=" + c.id}>
                    <div className="hover-details col-md-12 ">
                      <div
                        class="d-flex justify-content-center "
                        style={{ height: "400px" }}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonProducts;
