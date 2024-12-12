
import "../../assets/css/products/offprdct.css"
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/home/category.css";
import url from "../../config.json"
import { useLocation } from "react-router-dom";

const ProductCarousel = () => {
  const sliderRef = useRef(null);
  const [products, setproducts] = useState([]);
  const [OffDis, setOffDis] = useState(false);

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
    if (products.lenght == 5) {
      setOffDis(true)
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

  return (<>

    {OffDis ? <></> : <><div class="col-md-12 d-flex justify-content-center">
      <div class="d-flex justify-content-end col-md-11 border-bottom">
        <span class=" fontr h3  align-self-center">تخفیف ها</span>
      </div>
    </div>
      <div className="carousel-container">
        <Button
          className="carousel-button border-0 left"
          onClick={() => sliderRef.current.slickPrev()}
        >
          {"<"}
        </Button>
        <Slider ref={sliderRef} {...settings}>
          {products?.map((c, index) => (
            <div class="p-3 col-md-3 fontr" style={{ minWidth: `(-${(100 / 4)}%)` }}>
              <div class={`${c.count === 0 ? 'out-of-stock col-md-12' : ' product-carde'}`}>
                <div class="row m-0 d-flex justify-content-end">
                  {c.discount != 0 ? <div class="discountDisplay"><span class="">{c.discount}%</span></div> : null}
                  <div class="d-flex justify-content-center ">
                    <img
                      src={c.pic}
                      class="Img col-md-11 p-2"
                    />
                  </div>
                  <div class="d-flex justify-content-center pt-2">
                    <span class="h3 fontr text-center h5">{c.name}</span>
                  </div>
                  <div class="d-flex justify-content-center ">
                    <span class="h5 fontr pt-1" dir="rtl">
                      {c.price} هزار تومن
                    </span>
                  </div>
                </div>
                <a class="hrefb align-self-center" href={"pi?id=" + c.id}>
                  <div className="hover-detailse col-md-12 ">
                    <div
                      class="d-flex justify-content-center "
                      style={{ paddingTop: "45%" }}
                    >
                      <a class="hrefb align-self-center" href={"pi?id=" + c.id}>
                        <button className="btn btn-light fontr ">
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
        >
          {">"}

        </Button>
      </div></>}
  </>
  );
};

export default ProductCarousel;


