import React, { useState, useEffect } from "react";
import img1 from "../../assets/media/p1.jpg";
import img2 from "../../assets/media/t1.jpg";
import img3 from "../../assets/media/s1.jpg";
import img4 from "../../assets/media/pirahan.jpg";
import img5 from "../../assets/media/t2.jpg";
import img6 from "../../assets/media/s2.jpg";
import "../../assets/css/home/category.css";
import url from "../../config.json";


const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("X-CSRFToken", "oWF4BYWZ2asUOabk8VBGC7SJcARquNg0HPyW3byriP71zUPgj0cYctxVFZRPwB6m");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url.baseUrl}/api/products/category/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setCategories(result))
      .catch((error) => console.error(error));
  }, []);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Categories.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };


  return (<>
    <div class="col-md-12 col-12 p-3 pb-3 m-0 ">
      <div class="fontr">
        <div class="col-md-12 row m-0 border-bottom border-2 ">
          <div class="d-flex justify-content-start col-md-6">
            <div class="m-1 fontr">
              <button
                class="btn border-0"
                onClick={nextSlide}
                disabled={currentIndex === 3}
                aria-label="Next"
              >
                {`<`}
              </button>
            </div>
            <div class="m-1 fontr">
              <button
                class="btn border-0"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous"
              >
                {`>`}
              </button>
            </div>
          </div>
          <div class="align-self-center text-end h3 d-flex justify-content-end col-md-6">دسته بندی ها</div>
        </div>

        <div class="slider-container col-md-12 row m-0 pt-2" dir="rtl">
          <div class="slider" style={{ transform: `translateX(${currentIndex * (100 / 3)}%)` }}>
            {Categories.map((categories, index) => (
              <div class="col-md-2 col-6 cat-hover" key={index} style={{ minWidth: `(-${(100 / 3)}%)` }}>
                <a class="hrefb align-self-center" href={"/products?category=" + categories.name}>
                  <div class="row m-0">
                    <div class="d-flex justify-content-center ">
                      <img src={categories.image} title ={categories.name} class="d-block col-md-11 p-2 w-100" alt={categories.name} />
                    </div>
                    <div class="d-flex justify-content-center pt-2">
                      <h4 class="h4 fontr">{categories.name}</h4>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  </>
  );
};

export default ProductSlider; 
