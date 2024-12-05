import { useState, React, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/font/font.css";
import "../assets/css/href.css";
import logo from "../assets/media/logo.jpg";
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

  function HandleNav() {
    setCollapse(!Collapse)
  }

  return (
    <>
      {isVisible ? (
        <div className="col-12 fontr row m-0" dir="rtl">
          <div className="col-7 row m-0">
            <div className="col-3 pt-1">
              <a className="hrefb" href="/"><img style={{ height: "35px", marginRight: "30px" }} src={logo} alt="logo" className="col" /></a>
            </div>
            <div className="col-8 align-self-center d-flex justify-content-between">
              <a className="hrefb" href="/"><span className="col-3 h5 ah">خانه</span></a>
              <a className="hrefb" href="/products"><span className="col-3 h5 ah">محصولات</span></a>
              <a className="hrefb" href="/products"><span className="col-3 h5 ah">دسته بندی</span></a>
              <a className="hrefb" href="/about"><span className="col-3 h5 ah">درباره ما</span></a>
            </div>
          </div>

          <div className="col-5 row m-0">
            <div className="col-5 align-self-center">
              <input
                className="form-control fontr"
                placeholder="جست وجو ..."
                onChange={(e) => setSearch(e.target.value)}
                style={{ backgroundColor: "#D9D9D9" }}
              />
            </div>
            <div className="col-1 align-self-center">
              <a href={`/products?search=${search}`}>
                <button
                  className="rounded-circle btn bg-transparent align-self-center"
                  alt="جست و جو"
                  style={{ backgroundColor: "#E8E7E7" }}
                >
                  <i className="fa-solid fa-magnifying-glass" style={{ fontSize: "1.1 rem" }}></i>
                </button>
              </a>
            </div>
          <div class="col-1"></div>
            <div className="col-5 align-self-center">
              <span>
                {Login ? (
                  <>
                    <a href="/login" className="hrefb h5 ah">ورود</a>
                    <span>{" "}|{" "}</span>
                  </>
                ) : null}
                <a href="/account" className="hrefb h5 ah">حساب کاربری</a>
                {!Login && (
                  <>
                    <button className="btn border-0 bg-transparent" onClick={logout}><i className="fas fa-sign-out-alt ah"></i></button>
                    <span>{" "}|{" "}</span>
                    <button className="btn border-0 bg-transparent cart-icon">
                      <a className="hrefb" href="/cart">
                        <i className="fa-solid fa-cart-shopping ah" style={{ fontSize: "1.1 rem" }}></i>
                        <span className="cart-count text-dark">{CartItems?.length}</span>
                      </a>
                    </button>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
      <div className="col-12 row m-0 add fontr pb-3 pt-3" dir="rtl">
        <div className="col-12 m-0 d-flex">
          <div className="col-6 d-flex justify-content-start">
            <button className="btn bg-transparent rounded-3 p-2" onClick={HandleNav}>
              <i className={`${Collapse ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`} style={{ fontSize: "1.1 rem" }}></i>
            </button>
            {Collapse && (
              <div className="burger-menu">
                <div className="col-12 border-top border-bottom d-flex justify-content-center p-3 align-self-center">
                  <div><a className="hrefb h5 p-3 align-self-center" href="/">خانه</a></div>
                  <div><a className="hrefb h5 p-3 align-self-center" href="/products">محصولات</a></div>
                  <div className="col-4 align-self-center">
                    <input
                      className="form-control fontr"
                      placeholder="جست وجو ..."
                      onChange={(e) => setSearch(e.target.value)}
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                  <div className="col-1 align-self-center">
                    <a href={`/products?search=${search}`}>
                      <button
                        className="rounded-circle btn bg-transparent align-self-center"
                        alt="جست و جو"
                        style={{ backgroundColor: "#E8E7E7" }}
                      >
                        <i className="fa-solid fa-magnifying-glass" style={{ fontSize: "1.1 rem" }}></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-6 d-flex justify-content-center">
            <span>
              {Login ? (
                <>
                  <a href="/login" className="hrefb h5 ah">ورود</a>
                  <span>{" "}|{" "}</span>
                </>
              ) : null}
              <a href="/account" className="hrefb h5 ah">حساب کاربری</a>
              {!Login && (
                <>
                  <button className="btn border-0 bg-transparent" onClick={logout}><i className="fas fa-sign-out-alt ah"></i></button>
                  <span>{" "}|{" "}</span>
                  <button className="btn border-0 bg-transparent cart-icon">
                    <a className="hrefb" href="/cart">
                      <i className="fa-solid fa-cart-shopping ah" style={{ fontSize: "1.1 rem" }}></i>
                      <span className="cart-count text-dark">{CartItems?.length}</span>
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