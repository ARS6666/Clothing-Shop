import "../../assets/css/products/offprdct.css";
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/home/category.css";
import url from "../../config.json";

const ProductCarousel = () => {
  const sliderRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [OffDis, setOffDis] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("X-CSRFToken", "TvTvUiu7cUpi5lZNbZ9NjKJskwxoCrkncoMnmv6zsz4pQ5DJm4K5T6oENVxNEfaJ");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url.baseUrl}/api/products/top-discounts/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.error(error));

    if (products.length === 5) {
      setOffDis(true);
    }
  }, [products.length]);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(4);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const addCommas = (number) => {
    let [integer] = number.toString().split('.');
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return integer;
  };

  return (
    <>
      {!OffDis && (
        <>
          <div className="col-md-12 col-12 d-flex justify-content-center remove p-3">
            <div className="d-flex justify-content-end col-md-11 col-11 border-bottom remove">
              <span className="fontr h3 align-self-center">تخفیف ها</span>
            </div>
          </div>
          <div className="carousel-container m-0">
            <Button
              className="carousel-button border-0 left"
              onClick={() => sliderRef.current.slickPrev()}
              aria-label="Previous"
            >
              {"<"}
            </Button>
            <Slider ref={sliderRef} {...settings}>
              {products.map((c) => (
                <div key={c.id} className={`col-1 col-md-3 productt-card Anim m-0 ${c.count === 0 ? 'out-of-stock' : ''}`}>
                  <div className="row m-0">
                    {c.discount !== 0 && c.count !== 0 && (
                      <div className="discountDisplay">
                        <span>{c.discount}%</span>
                      </div>
                    )}
                    <div className="d-flex justify-content-center">
                      <img src={c.pic} className="Image col-12" alt={c.name} />
                    </div>
                    <div className="d-flex justify-content-center pt-3">
                      <span className="h5 fontr text-center">{c.name}</span>
                    </div>
                    <div className=" d-flex justify-content-center">
                      <span className=" fontr h5 pt-1">{addCommas(c.price)} تومان</span>
                    </div>
                  </div>
                  <a href={`pi?id=${c.id}#${c.name}`} className=" hrefb align-self-center" aria-label={`View ${c.name}`}>
                    <div className=" hoverr-details col-12">
                      <div className=" d-flex justify-content-center bp">
                        <button className=" btn btn-light border-0 hover fontr" aria-label="View Product">مشاهده محصول</button>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
            <Button
              className="carousel-button border-0 right"
              onClick={() => sliderRef.current.slickNext()}
              aria-label="Next"
            >
              {">"}
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCarousel;
