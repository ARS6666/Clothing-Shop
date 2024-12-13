import { useState, React, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/font/font.css";
import "../../assets/css/href.css";
import BurgerMenu from "./Burgermenu";
import logo from "../../assets/media/logo.jpg";
import "../../assets/css/nav/buttonn.css"
import url from "../../config.json"

const CustomNavbar = () => {
  const [CartItems, setCartItem] = useState([])
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const [Login, setlogin] = useState(true)
  const [isVisible, setIsVisible] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token && token.length !== 0) {
      setlogin(false)
    }
  }, [token])

  const logout = () => {
    localStorage.removeItem('token');
    setlogin(true)
    navigate('/login');
  };

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("X-CSRFToken", "5teHG5lzFJM4CD8QwLdXzrrvjxmRqWl91abWUh2YcbHKJ1NVq5s3g9B3KrcKmR8L");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    fetch(`${url.baseUrl}/cart/cart/`, requestOptions)
      .then((response) => response.json())
      .then((result) => { setCartItem(result.items) })
      .catch((error) => console.error(error));
  }, [token]);



  return (
    <>
      {isVisible ? (
        <div class="col-12 fontr row m-0" dir="rtl">
          <div class="col-7 row m-0">
            <div class="col-3 pt-1">
              <a class="hrefb" href="/"><img style={{ height: "35px", marginRight: "30px" }} src={logo} alt="logo" class="col" /></a>
            </div>
            <div class="col-8 align-self-center d-flex justify-content-between">
              <a class="hrefb" href="/"><span class="col-3 h5 ah">خانه</span></a>
              <a class="hrefb" href="/products"><span class="col-3 h5 ah">محصولات</span></a>
              <a class="hrefb" href="/products"><span class="col-3 h5 ah">دسته بندی</span></a>
              <a class="hrefb" href="/about"><span class="col-3 h5 ah">درباره ما</span></a>
            </div>
          </div>

          <div class="col-5 row m-0">
            <div class="col-5 align-self-center">
              <input
                class="form-control fontr"
                placeholder="جست وجو ..."
                onChange={(e) => setSearch(e.target.value)}
                style={{ backgroundColor: "#D9D9D9" }}
              />
            </div>
            <div class="col-1 align-self-center">
              <a href={`/products?search=${search}`}>
                <button
                  class="rounded-circle btn bg-transparent align-self-center"
                  alt="جست و جو"
                  style={{ backgroundColor: "#E8E7E7" }}
                >
                  <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "1.1 rem" }}></i>
                </button>
              </a>
            </div>
            <div class="col-1"></div>
            <div class="col-5 align-self-center">
              <span>
                {Login ? (
                  <>
                    <a href="/login" class="hrefb h5 ah">ورود</a>
                    <span>{" "}|{" "}</span>
                  </>
                ) : null}
                <a href="/account" class="hrefb h5 ah">حساب کاربری</a>
                {!Login && (
                  <>
                    <button class="btn border-0 bg-transparent" onClick={logout}><i class="fas fa-sign-out-alt ah"></i></button>
                    <span>{" "}|{" "}</span>
                    <button class="btn border-0 bg-transparent cart-icon">
                      <a class="hrefb" href="/cart">
                        <i class="fa-solid fa-cart-shopping ah" style={{ fontSize: "1.1 rem" }}></i>
                        <span class="cart-count text-dark">{CartItems?.length}</span>
                      </a>
                    </button>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
      <div class="col-12 row m-0 add fontr pb-3 pt-3" dir="rtl">
        <div class="col-12 m-0 d-flex">
          <div class="col-6 d-flex justify-content-start">
            <BurgerMenu />
          </div>  
          <div class="col-6 m-0 d-flex justify-content-end">
            <span>
              {Login ? (
                <>
                  <a href="/login" class="hrefb h5 ah">ورود</a>
                  <span>{" "}|{" "}</span>
                </>
              ) : null}
              <a href="/account" class="hrefb h5 ah">حساب کاربری</a>
              {!Login && (
                <>
                  <button class="btn border-0 bg-transparent" onClick={logout}><i class="fas fa-sign-out-alt ah"></i></button>
                  <span>{" "}|{" "}</span>
                  <button class="btn border-0 bg-transparent cart-icon">
                    <a class="hrefb" href="/cart">
                      <i class="fa-solid fa-cart-shopping ah" style={{ fontSize: "1.1 rem" }}></i>
                      <span class="cart-count text-dark">{CartItems?.length}</span>
                    </a>
                  </button>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomNavbar;