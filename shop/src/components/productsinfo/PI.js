import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
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
  const [IMG, setIMG] = useState([]);
  const [product, setProduct] = useState({ colors: [] });
  const location = useLocation();
  const [id, setId] = useState('');
  const [isChecked, setIsChecked] = React.useState(false);

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
          fetch("http://127.10.0.1/api/v1/products/" + id, requestOptions)
              .then((response) => response.json())
              .then((result) => {
                  setProduct(result);setIMG(result.images);console.log(IMG);
              })
              .catch((error) => console.error(error));
      }
  }, [id]);

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
        <div class="col-md-6 bg-warning"></div>
      </div>
    </>
  );
}

export default ProductInfo;
