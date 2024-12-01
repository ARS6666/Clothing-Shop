import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../assets/css/hide.css";
import "../../assets/css/home/productcard.css";
import url from "../../config.json"



const CommonProducts = () => {
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
    if (id) {
      fetch(`${url.baseUrl}/api/products/` + id, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setCat(result.category); setisLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("authorization", "Basic MDkxMDQ4NDU3NDk6MTIz");
  myHeaders.append("X-CSRFToken", "krMY06dKPZfPJAhssIix8Yjkc9BgJfTCrx6NCcOUN154E9d3tW4npwnd7MvWUz01");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };


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




  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Productss.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 20000);

    return () => clearInterval(intervalId);
  }, [Productss]);
  return (
    <div className="slider-container pt-5 remove p-4">
      <div class="border-bottom border-dark col-md-12 row m-0">
        <div class="d-flex justify-content-start col-md-6">
          <div class="m-1 fontr">
            <button
              class="btn btn-outline-dark"
              onClick={nextSlide}
              disabled={currentIndex >= Productss.length - 3}
            >
              بعدی
            </button>
          </div>
          <div class="m-1 fontr">
            <button
              class="btn btn-outline-dark"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              قبلی
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-end col-md-6">
          <span class=" fontr h3  align-self-center">محصولات مشابه</span>
        </div>
      </div>

      <div className="product-sl">
        <div class="col-md-12 row m-0 " dir="rtl">
          <div className="slider" style={{ transform: `translateX(${currentIndex * (100 / 4)}%)` }}>
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
                      <span class="h3 fontr">{c.name}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonProducts;
