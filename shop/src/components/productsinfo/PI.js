import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "../../assets/css/productsinfo/PI.css";
import Comment from './CommentBox';

function ProductInfo() {
  const [IMG, setIMG] = useState([]);
  const [Size, setSize] = useState([]);
  const [product, setProduct] = useState({ colors: [] });
  const location = useLocation();
  const [id, setId] = useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Default white color
  const [selectedSize, setSelectedSize] = useState();

  const color = [
    { name: "Red", value: "#ff0000" },
    { name: "Green", value: "#00ff00" },
    { name: "Blue", value: "#0000ff" },
    { name: "Yellow", value: "#ffff00" },
    { name: "Purple", value: "#800080" },
  ];


  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
  myHeaders.append("X-CSRFToken", "tc6gv0BlCSEVzaDY2DEUFDyvHxAouuuWnjsAM5wngQp4psjqQKsZfKhJ0eopXCA7");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramId = searchParams.get('id');
    if (paramId) {
      setId(paramId);
    }
  }, [location.search]);

  useEffect(() => {
    if (id) {
      fetch("http://127.0.0.1:8000/api/v1/products/" + id, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setProduct(result); setIMG(result.images); setSize(result.size);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <>
      <div class=" col-md-12 row pt-2" dir="rtl">
        <div class="col-md-6 row" >
          <div class="col-md-2 ">
            {IMG.slice(0, 3).map((c) => (
              <img className="col-md-12 m-1" src={c.image} />
            ))}
          </div>
          <div class="col-md-10">
            <Carousel>
              {IMG.map((Pic) => (
                <Carousel.Item>
                  <img className="col-md-12 Image" src={Pic.image} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div class="col-md-6  fontr pt-5">
          <div>
            <span class="h1">{product.name}
            </span>
          </div>
          <div class="pt-3">
            <span class="h3 ">{product.price} هزار تومان</span>
          </div>
          <div class="pt-3">
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
          <div class="pt-3 ">
            <div>
              <span class="h4">سایز بندی:</span>
            </div>
            <div class="row d-flex justify-content-start" dir="ltr">
              {Size.map((e) => (

                <div class="color-option" style={{
                  height: "50px", width: "50px", backgroundColor: "#D9D9D9", marginRight: "10px", border:
                    selectedSize === e
                      ? "2px solid black"
                      : "none",
                }}
                  onClick={() => setSelectedSize(e)} >
                  <span classs='text-dark text-center  p-2 h3' style={{ marginTop: "10px" }}>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div class="pt-4">
            <div>
              <span class="h4">توضیحات:</span>
            </div>
            <div>
              <span class="h5">
                {product.description}
              </span>
            </div>
          </div>
          <div class="pt-4">
            <div>
              <span class="h4">جنس:</span>
            </div>
            <div class="  d-flex justify-content-end ">
              <span class="h5">{product.material}</span>
            </div>
          </div>
          <div class="pt-4">
            <div>
              <span class="h4">برند:</span>
            </div>
            <div class="  d-flex justify-content-end ">
              <span class="h5">{product.brand}</span>
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
