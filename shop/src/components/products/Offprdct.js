
import "../../assets/css/products/offprdct.css"
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/media/p1.jpg";
import img2 from "../../assets/media/t1.jpg";
import img3 from "../../assets/media/s1.jpg";
import img4 from "../../assets/media/pirahan.jpg";
import img5 from "../../assets/media/t2.jpg";
import img6 from "../../assets/media/s2.jpg";
import "../../assets/css/home/category.css";


const ProductCarousel = () => {
  const sliderRef = useRef(null);

  const [products, setproducts] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("X-CSRFToken", "TvTvUiu7cUpi5lZNbZ9NjKJskwxoCrkncoMnmv6zsz4pQ5DJm4K5T6oENVxNEfaJ");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/products/top-discounts/", requestOptions)
      .then((response) => response.json())
      .then((result) => setproducts(result))
      .catch((error) => console.error(error));
  }, []);




  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div class="carousel-container">
      <Button
        class="carousel-button border-0 left"
        onClick={() => sliderRef.current.slickPrev()}
      >
        {"<"}
      </Button>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div class="row m-0">
            <div class="d-flex justify-content-center ">
              <img src={product.pic} class="d-block col-md-11 p-2 w-100" alt={product.name} />
            </div>
            <div class="d-flex justify-content-center pt-2">
              <span class="h4 fontr">{product.name}</span>
            </div>
          </div>
        ))}
      </Slider>
      <Button
        class="carousel-button border-0 right"
        onClick={() => sliderRef.current.slickNext()}
      >
        {">"}

      </Button>
    </div>
  );
};

export default ProductCarousel;
