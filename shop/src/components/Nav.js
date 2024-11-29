import { useState, React, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/font/font.css";
import "../assets/css/href.css";
import logo from "../assets/media/logo.png";
import "https://kit.fontawesome.com/6c2a0de8a3.js"
import Prdctlist from "./Features/PrdctList";
import "../assets/css/buttonn.css"
import url from "../config.json"


const CustomNavbar = () => {
  const [CartItems, setCartItem] = useState([])
  const [Collapse, setCollapse] = useState(false)
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const [Logo, setLogo] = useState([])
  const [Image, setI] = useState([])
  const [Login, setlogin] = useState(true)
  const [isVisible, setIsVisible] = useState(true);
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token && token.length !== 0) {
      setlogin(false)
    }
  }, [])


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

  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("X-CSRFToken", "7x82a1WNLT9ulCcznShlrJoy85HoXsYTKKfGEX6LQRAUtZa24a2oD9O5GHsjvut3");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  useEffect(() => {
    fetch(`${url.baseUrl}/navbar/logo/1`, requestOptions)
      .then((response) => response.json())
      .then((result) => setLogo(result))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    if (Logo.length > 0) {
      setI(Logo[0].image);

    }
  }, [Logo]);
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

  }, []);
  function HandleNav() {
    setCollapse(!Collapse)
  }

  return (
    <>
      {isVisible ? <div class="col-md-12 col-sm-12 fontr row m-0 "style={{backgroundColor : "#c68346"}} dir="rtl">
        <div class="col-md-7 col-sm-7 row m-0">
          <div class="col-md-3 col-sm-3 pt-1">
            <img style={{ height: "35px" }} src={logo} class="col" />
          </div>
          <div class="col-md-8 col-sm-8 align-self-center d-flex justify-content-between">
            <a class="hrefb " href="/"><span class="col-md-3 col-sm-3 h5 ah">خانه </span></a>
            <a class="hrefb" href="/products"><span class="col-md-3 col-sm-3 h5  ah">محصولات </span></a>
            <a className="hrefb"><Prdctlist /></a>
            <a class="hrefb" href="/about"><span class="col-md-3 h5 col-sm-3 ah">درباره ما </span></a>
          </div >
        </div>

        <div class="col-md-5 col-sm-5 row m-0">
          <div class="col-md-5 col-sm-5 align-self-center">
            <input
              class="form-control fontr"
              placeholder="جست وجو ..."
              onChange={(e) => setSearch(e.target.value)}
              style={{ backgroundColor: "#D9D9D9" }}
            />
          </div>
          <div class="col-md-1 col-sm-1 align-self-center ">
            <a href={"/products?search=" + search}>
              <button
                class="rounded-circle btn bg-transparent align-self-center"
                alt="جست و جو"
                style={{ backgroundColor: "#E8E7E7" }}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </a>
          </div>
          <div class="col-md-2 col-sm-2 h5 mt-2 d-flex justify-content-center align-self-center">
          </div>

          <div class="col-md-4 col-sm-4 align-self-center">
            <span>
              {Login ? (
                <>
                  <a href="/login" class="hrefb h5 ah">
                    ورود
                  </a>
                  <span>{" "}|{" "}</span>
                </>
              ) :
                null
              }
              <a href="/account" class="hrefb h5 ah">
                حساب کاربری
              </a>
              {Login ? (
                null
              ) : <>
                <button class="btn border-0 bg-transparent" onClick={logout} ><i class="fas fa-sign-out-alt ah"></i></button>
                <span>{" "}|{" "}</span>
                <button class="btn border-0 bg-transparent cart-icon"><a class="hrefb" href="/cart"><i class="fa-solid fa-cart-shopping ah"></i><span class="cart-count text-dark">{CartItems?.length}</span></a></button>
              </>
              }
            </span>
          </div>
        </div>
      </div> : null}
      <div class="col-12 row m-0 add fontr pb-3 pt-3" dir="rtl">
        <div class="col-12 m-0 d-flex">
          <div class="col-6 d-flex justify-content-start">
            <button class="btn bg-transparent rounded-3 p-2" onClick={HandleNav}>
              <i class={` ${Collapse ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}></i>
            </button>
            {Collapse ? (
              <div class="burger-menu">
                <div class="col-12 border-top border-bottom d-flex justify-content-center p-3  align-self-center">
                  <div><a class="hrefb h5 p-3 align-self-center" href="/" >خانه</a></div>
                  <div><a class="hrefb h5 p-3 align-self-center" href="/products" >محصولات</a></div>
                  <div><a class="hrefb h5 p-3 align-self-center" href="/about" >درباره ی ما</a></div>
                  <div class="col-4 align-self-center">
                    <input
                      class="form-control fontr"
                      placeholder="جست وجو ..."
                      onChange={(e) => setSearch(e.target.value)}
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                  <div class="col-1 align-self-center ">
                    <a href={"/products?search=" + search}>
                      <button
                        class="rounded-circle btn bg-transparent align-self-center"
                        alt="جست و جو"
                        style={{ backgroundColor: "#E8E7E7" }}
                      >
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div class="col-6 d-flex justify-content-end">
            <span>
              {Login ? (
                <>
                  <a href="/login" class="hrefb h5 ah">
                    ورود
                  </a>
                  <span>{" "}|{" "}</span>
                </>
              ) : null}
              <a href="/account" class="hrefb h5 ah">
                حساب کاربری
              </a>
              {Login ? (
                null
              ) : (<>
                <button class="btn border-0 bg-transparent" onClick={logout}><i class="fas fa-sign-out-alt ah"></i></button>
                <span>{" "}|{" "}</span>
                <button class="btn border-0 bg-transparent cart-icon">
                  <a class="hrefb" href="/cart">
                    <i class="fa-solid fa-cart-shopping ah"></i>
                    <span class="cart-count text-dark">{CartItems?.length}</span>
                  </a>
                </button>
              </>)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomNavbar;