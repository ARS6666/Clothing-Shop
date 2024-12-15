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
  const [products, setproducts] = useState([]);
  const [OffDis, setOffDis] = useState(false);
  const[Isvisible,setIsvisible] = useState(true)

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
      .then((result) => setproducts(result))
      .catch((error) => console.error(error));

    if (products.length === 5) {
      setOffDis(true);
    }
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
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsvisible(false);
    } else {
      setIsvisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {Isvisible ?
      <>{!OffDis && (
        <>
          <div className="col-md-12 d-flex justify-content-center">
            <div className="d-flex justify-content-end col-md-11 border-bottom">
              <span className="fontr h3 align-self-center">تخفیف ها</span>
            </div>
          </div>
          <div className="carousel-container">
            <Button
              className="carousel-button border-0 left"
              onClick={() => sliderRef.current.slickPrev()}
              aria-label="Previous"
            >
              {"<"}
            </Button>
            <Slider ref={sliderRef} {...settings}>
              {products.map((c) => (
                <div key={c.id} className="p-3 col-md-3 col-12 fontr" style={{ minWidth: `calc(100% / 4)` }}>
                  <div className={c.count === 0 ? 'out-of-stock col-md-12 col-12' : 'product-carde'}>
                    <div className="row m-0 d-flex justify-content-start">
                      {c.discount !== 0 && (
                        <div className="discountDisplay">
                          <span>{c.discount}%</span>
                        </div>
                      )}
                      <div className="d-flex justify-content-center">
                        <img
                          src={c.pic}
                          className="Img col-md-11 p-2"
                          alt={c.name}
                        />
                      </div>
                      <div className="d-flex justify-content-center pt-2">
                        <span className="h3 fontr text-center h5">{c.name}</span>
                      </div>
                      <div className="d-flex justify-content-center">
                        <span className="h5 fontr pt-1" dir="rtl">
                          {c.price} هزار تومن
                        </span>
                      </div>
                    </div>
                    <a
                      className="hrefb align-self-center"
                      href={`pi?id=${c.id}`}
                      aria-label={`View ${c.name}`}
                    >
                      <div className="hover-detailse col-md-12">
                        <div
                          className="d-flex justify-content-center"
                          style={{ paddingTop: "45%" }}
                        >
                          <a
                            className="hrefb align-self-center"
                            href={`pi?id=${c.id}`}
                          >
                            <button className="btn btn-light fontr" aria-label="View Product">
                              مشاهده محصول
                            </button>
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>
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
      )}</> : <></>}
    </>
  );
};

export default ProductCarousel;
