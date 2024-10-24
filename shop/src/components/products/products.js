import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../loading/loading";
import "../../assets/css/products/products.css";
import Filter from "./Filter";

function Products() {
  const [IsLoading, setisLoading] = useState(true)
  const [detail, setDetail] = useState([]);
  const [NoResult, setNoResult] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');
  const [ShowCount, setShowCount] = useState(9)
  const [ButtContent, setButtContent] = useState("مشاهده بیشتر ...")
  const [ButtDisable, setButtDisable] = useState(false)
  const location = useLocation();


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramId = searchParams.get('category');
    if (paramId) {
      setCategory(paramId);

    }
  }, [location.search]);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramId = searchParams.get('search');
    if (paramId) {
      setSearchTerm(paramId);

    }
  }, [location.search]);

  useEffect(() => {
    const fetchProducts = async () => {
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("X-CSRFToken", "AmrdKuP98ULWK4LXWttdeKR7sbq8MXasc254HGREEMpPhMwsthsWoHV4KfdW6NHl");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      try {
        const response = await fetch("http://192.168.1.53:8000/api/v1/products/", requestOptions);
        const result = await response.json();
        setDetail(result);
        setisLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();

  }, []);

  const handleFilterChange = (filters) => {
    setSearchTerm(filters.searchTerm);
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
    setCategory(filters.category);
  };

  const filteredProducts = detail.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinPrice = minPrice === '' || product.price >= parseFloat(minPrice);
    const matchesMaxPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
    const matchesCategory = category === '' || product.category.includes(category);

    return matchesSearchTerm && matchesMinPrice && matchesMaxPrice && matchesCategory;
  });

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    const cat = product.category[0];
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(product);
    return acc;
  }, {});

  const displayedProducts = Object.values(groupedProducts).flatMap(products =>
    products
  );

  const [content, setContent] = useState(<button
    class="btn btn-dark col-md-11 col-11 add"
    onClick={() => {
      handleClick(); changeContent(
        <Filter onFilterChange={handleFilterChange} />
      )
    }}
  ><span class="h5">اعمال فیلتر</span>
  </button>);
  const changeContent = (newContent) => {
    setContent(newContent);
  };
  const [isChecked, setIsChecked] = useState(true);
  const handleClick = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  useEffect(() => {
    if (displayedProducts.length === 0) {
      setNoResult(true)
    }
    else {
      setNoResult(false)
    }

  }, [displayedProducts]);
  function HandleShow() {
    if (displayedProducts.length - ShowCount > 0) {
      setButtContent("مشاهده بیشتر ...")
      setShowCount(ShowCount - 9)
    }
    if (0 >= displayedProducts.length - ShowCount) {
      setButtContent("محصولات به پایان رسیدند ...")
    }
    else {
      // setShowCount(ShowCount + 9)
      // setButtContent("مشاهده کمتر ...")
    }
  }


  return (
    <>
      {IsLoading ? <Loading /> : null}
      <div class="col-md-12 col-12 d-flex justify-content-center fontr row m-0 p-3">
        <div class="col-10 col-md-10 ">
          {content}
        </div>
      </div>

      <div class="d-flex justify-content-center col-md-12">
        <span class="h1 fontr border-bottom border-4 border-danger p-3">
          محصولات
        </span>
      </div>
      <div class="col-md-12 row m-0  d-flex justify-content-center pt-5 " dir="ltr">
        <div class="col-md-9 col-12 row m-0 d-flex justify-content-center fontr">
          {NoResult ?
            <>
              <div class="col-md-12 d-flex justify-content-center">
                <span class="text-dark h1 pb-2 ">!محصولی یافت نشد</span>
              </div>
            </>
            : null}
          {displayedProducts?.slice(displayedProducts.length - ShowCount, displayedProducts.length).map((c) => (
            <div className={`col-md-3 col-4 col-sm-4 m-3 product-card Anim ${c.count === 0 ? 'out-of-stock' : ''}`}>
              <div class="row m-0">
                {c.discount != 0 && c.count != 0 ? <div class="discountDisplay"><span class="">{c.discount}%</span></div> : null}
                <div class="d-flex justify-content-center ">
                  <img
                    src={c.pic}
                    class="Img col-md-11"
                  />
                </div>
                <div class="d-flex justify-content-center pt-3">
                  <span class="h5 fontr ">{c.name}</span>
                </div>
                <div class="d-flex justify-content-center ">
                  <span class=" fontr pt-1 " dir="rtl">
                    {c.price} هزار تومن
                  </span>
                </div>
              </div>
              <a class="hrefb align-self-center" href={"pi?id=" + c.id}>
                <div className="hover-details col-md-12 ">
                  <div
                    class="d-flex justify-content-center bp"
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
          ))}
          <div class="col-md-12 pt-5 pb-5">
            <button class="btn btn-dark hover rounded-0 col-md-12" dir="rtl" onClick={HandleShow} disabled={ButtDisable}>{ButtContent}
            </button>
          </div>
        </div>
        <div class="col-md-3 col-9 remove pb-3 justify-content-center">
          <Filter onFilterChange={handleFilterChange} />
        </div>
      </div>
    </>
  );
}

export default Products;
