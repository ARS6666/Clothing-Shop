
import "../../assets/css/products/offprdct.css"
import React, { useRef, useEffect, useState } from 'react';
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
import url from "../../config.json"
import { useLocation } from "react-router-dom";

const ProductCarousel = () => {
  const sliderRef = useRef(null);
  const [Productss, setPRoduct] = useState([]);
  const [IsLoading, setisLoading] = useState(true)
  const [Cat, setCat] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const [id, setId] = useState('');
  const [Filter, setFilter] = useState([]);


  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
    myHeaders.append("X-CSRFToken", "tc6gv0BlCSEVzaDY2DEUFDyvHxAouuuWnjsAM5wngQp4psjqQKsZfKhJ0eopXCA7");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    const searchParams = new URLSearchParams(location.search);
    const paramId = searchParams.get('id');
    if (paramId) {
      setId(paramId);
    }
  }, [location.search]);

  

  useEffect(() => {
    fetch(`${url.baseUrl}/api/products/`, requestOptions)
      .then((response) => response.json())
      .then((result) => { setPRoduct(result); console.log(Productss) })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (Cat) {
      const filteredProducts = Productss.filter(product => product.category === Cat);
      setFilter(filteredProducts);
      console.log(Filter)
      console.log(21323)
    }
  }, [Productss, Cat]);

  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("authorization", "Basic MDkxMDQ4NDU3NDk6MTIz");
  myHeaders.append("X-CSRFToken", "krMY06dKPZfPJAhssIix8Yjkc9BgJfTCrx6NCcOUN154E9d3tW4npwnd7MvWUz01");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

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
        className="carousel-button border-0 left"
        onClick={() => sliderRef.current.slickPrev()}
      >
        {"<"}
      </Button>
      <Slider ref={sliderRef} {...settings}>
      {Productss?.map((c, index) => (
              <div class="p-3 col-md-3" style={{ minWidth: `(-${(100 / 4)}%)` }}>
                <div class={`${c.count === 0 ? 'out-of-stock col-md-12' : ' product-carde'}`}>
                  <div class="row m-0">
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
                        style={{ height: "400px" }}
                      >
                        <a class="hrefb align-self-center" href={"pi?id=" + c.id}>
                          <button className="btn btn-light hover  fontr ">
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
    </div>
  );
};

export default ProductCarousel;





// const [products, setproducts] = useState([]);

// useEffect(() => {
//   const myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("X-CSRFToken", "TvTvUiu7cUpi5lZNbZ9NjKJskwxoCrkncoMnmv6zsz4pQ5DJm4K5T6oENVxNEfaJ");

//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow"
//   };

//   fetch("http://127.0.0.1:8000/api/products/top-discounts/", requestOptions)
//     .then((response) => response.json())
//     .then((result) => setproducts(result))
//     .catch((error) => console.error(error));
// }, []);