
import "../../assets/css/products/offprdct.css"
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../../assets/media/p1.jpg";
import img2 from "../../assets/media/t1.jpg";
import img3 from "../../assets/media/s1.jpg";
import img4 from "../../assets/media/pirahan.jpg";
import img5 from "../../assets/media/t2.jpg";
import img6 from "../../assets/media/s2.jpg";
import "../../assets/css/home/category.css";


const ProductCarousel = () => {
  const sliderRef = useRef(null); 

  const products = [
    { Name: "تی شرت", Category: "تی شرت", pic: img2 },
    { Name: "شلوار", Category: "شلوار", pic: img1 },
    { Name: "کفش", Category: "کفش", pic: img3 },
    { Name: "پیراهن", Category: "پیراهن", pic: img4 },
    { Name: "کلاه", Category: "کلاه", pic: img5 },
    { Name: "دامن", Category: "پیراهن", pic: img6 },
  ];

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
    <div className="carousel-container">
      <Button
        className="carousel-button left"
        onClick={() => sliderRef.current.slickPrev()} 
      >
        &#9664; 
      </Button>
      <div className="text-end float-end mb-6">  
            <div class="twelve " >
  <h1>تخفیف ویژه</h1>
  
  <div class="gradient-box">

    <div class="vertical-text">متن عمودی</div>
</div>
</div></div>


      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div className="row m-0">
          <div className="d-flex justify-content-center ">
            <img src={product.pic} className="d-block col-md-11 p-2 w-100" alt={product.Name} />
          </div>
          <div className="d-flex justify-content-center pt-2">
            <span className="h4 fontr">{product.Name}</span>
          </div>
        </div>
        ))}
      </Slider>
      <Button
        className="carousel-button right"
        onClick={() => sliderRef.current.slickNext()} 
      >
        &#9664; 

      </Button>
    </div>
  );
};

export default ProductCarousel;
