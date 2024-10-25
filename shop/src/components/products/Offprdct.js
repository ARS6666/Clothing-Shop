
import "../../assets/css/products/offprdct.css"
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductCarousel = () => {
  const sliderRef = useRef(null); 

  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150x100?text=Product+1', 
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150x100?text=Product+2',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x100?text=Product+3',
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://via.placeholder.com/150x100?text=Product+4',
    },
    {
      id: 5,
      name: 'Product 5',
      image: 'https://via.placeholder.com/150x100?text=Product+5',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        &#9664; {/* اون دکمه چپه */}
      </Button>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <Button variant="primary">View Details</Button>
          </div>
        ))}
      </Slider>
      <Button
        className="carousel-button right"
        onClick={() => sliderRef.current.slickNext()} 
      >
        &#9654; {/* دکه راستیه */}
      </Button>
    </div>
  );
};

export default ProductCarousel;
