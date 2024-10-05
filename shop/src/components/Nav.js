import { useState, React, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/font/font.css";
import "../assets/css/href.css";
import "../assets/css/hide.css";
import lgo from "../assets/media/logo.png";
import "https://kit.fontawesome.com/6c2a0de8a3.js"
import Prdctlist from "./Features/PrdctList";
import "../assets/css/buttonn.css"

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const [Logo, setLogo] = useState([])
  const [Image, setI] = useState([])
  const [Login, setlogin] = useState(true)
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

  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("X-CSRFToken", "7x82a1WNLT9ulCcznShlrJoy85HoXsYTKKfGEX6LQRAUtZa24a2oD9O5GHsjvut3");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/navbar/logo/1", requestOptions)
      .then((response) => response.json())
      .then((result) => setLogo(result))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    if (Logo.length > 0) {
      setI(Logo[0].image);

    }
  }, [Logo]);
  return (
    <>
      <div class="col-md-12 fontr row m-0" dir="rtl">
        <div class="col-md-7 row m-0">
          <div class="col-md-3 ">
            <img style={{ height: "45px" }} src={Image} class="col" />
          </div>
          <div class="col-md-8 align-self-center d-flex justify-content-between">
            <a class="hrefb " href="/"><span class="col-md-3 h5 ah">خانه </span></a>
            <a class="hrefb" href="/products"><span class="col-md-3 h5  ah">محصولات </span></a>
            <a className="hrefb"><Prdctlist /></a>
            <a class="hrefb" href="/about"><span class="col-md-3 h5  ah">درباره ما </span></a>
          </div >
        </div>

        <div class="col-md-5  row m-0">
          <div class="col-md-5 align-self-center">
            <input
              class="form-control fontr"
              placeholder="جست وجو ..."
              onChange={(e) => setSearch(e.target.value)}
              style={{ backgroundColor: "#D9D9D9" }}
            />
          </div>
          <div class="col-md-1 align-self-center ">
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
          <div class="col-md-2 h5 mt-2 d-flex justify-content-center align-self-center">
          </div>

          <div class="col-md-4 align-self-center">
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
              ) :
                <button class="btn border-0 bg-transparent" onClick={logout} ><i class="fas fa-sign-out-alt ah"></i></button>
              }

            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomNavbar;
