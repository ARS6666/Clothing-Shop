import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "../../assets/css/productsinfo/PI.css";

import one from "../../assets/media/11.png";
import two from "../../assets/media/12.PNG";
import three from "../../assets/media/123.png";
function ProductInfo() {
  const [SliderPic, setSliderpic] = useState([
    { image: one },
    { image: two },
    { image: three },
  ]);
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Default white color

  const color = [
    { name: "Red", value: "#ff0000" },
    { name: "Green", value: "#00ff00" },
    { name: "Blue", value: "#0000ff" },
    { name: "Yellow", value: "#ffff00" },
    { name: "Purple", value: "#800080" },
  ];

  return (
    <>
      <div class=" col-md-12 row pt-2" dir="rtl">
        <div class="col-md-6 row" style={{ height: "700px" }}>
          <div class="col-md-3 ">
            {SliderPic.slice(0, 3).map((Pic) => (
              <img className="col-md-12 Imageside mb-3" src={Pic.image} />
            ))}
          </div>
          <div class="col-md-9">
            <Carousel>
              {SliderPic.map((Pic) => (
                <Carousel.Item>
                  <img className="col-md-12 Image" src={Pic.image} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div class="col-md-6  fontr pt-5">
          <div>
            <span class="h1">شلوار مردانه</span>
          </div>
          <div class="pt-3">
            <span class="h3 ">998 هزار تومان</span>
          </div>
          <div class="pt-5">
            <span class="h4">رنگ ها:</span>
            <div class="  d-flex justify-content-end ">
              <div className="d-flex flex-wrap">
                {color.map((color) => (
                  <div
                    key={color.name}
                    className="color-option m-2"
                    style={{
                      borderRadius: "50px",
                      backgroundColor: color.value,
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      border:
                        selectedColor === color.value
                          ? "2px solid black"
                          : "none",
                    }}
                    onClick={() => setSelectedColor(color.value)}
                  />
                ))}
              </div>

              <div />
            </div>
          </div>
          <div class="pt-4">
            <div>
              <span class="h4">توضیحات:</span>
            </div>
            <div>
              <span class="h5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              </span>
            </div>
          </div>
          <div class="pt-4">
            <div>
              <span class="h4">جنس:</span>
            </div>
            <div class="  d-flex justify-content-end ">
              <span class="h5">پنبه و الیاف مصنوعی</span>
            </div>
          </div>
          <div class="pt-4">
            <div>
              <span class="h4">برند:</span>
            </div>
            <div class="  d-flex justify-content-end ">
              <span class="h5">زارا</span>
            </div>
          </div>
          <div class="pt-5">
            <button class="col-md-12 btn rounded-0 btn-lg btn-outline-dark ">افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
