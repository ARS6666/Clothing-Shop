import React, { useState, useEffect } from "react";
import ProductCard from "../home/products"; // Import the ProductCard component

const ProductSlider = () => {
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
    // Example: If you want to automatically slide every 3 seconds
    const intervalId = setInterval(nextSlide, 20000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [Productss]);

  return (
    <div className="slider-container pt-5 col-md-12 p-3 ">
      <div className="product-slider fontr">
        <div class="col-md-12 row m-0  border-top border-dark" dir="rtl">
          {Productss.slice(currentIndex, currentIndex + 4).map((c) => (
            <div class="p-3 col-md-3">
              <div class="col-md-12 product-card">
                <div class="row">
                  <div class="d-flex justify-content-center ">
                    <img
                      src={c.pic}
                      class="Img col-md-11 p-2"
                    />
                  </div>
                  <div class="d-flex justify-content-center pt-2">
                    <span class="h4 fontr">{c.name}</span>
                  </div>
                  <div class="d-flex justify-content-center ">
                    <span class="h5 fontr pt-1" dir="rtl">
                      {c.price} هزار تومن
                    </span>
                  </div>
                </div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="d-flex justify-content-start col-md-12">
        <div class="m-1 fontr">
          <button
            class="btn border-0"
            onClick={nextSlide}
            disabled={currentIndex >= Productss.length - 3}
          >
            {`<`}
          </button>
        </div>
        <div class="m-1 fontr">
          <button
            class="btn border-0"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            {`>`}
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProductSlider;
