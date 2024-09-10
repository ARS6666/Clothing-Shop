import { useState, React } from "react";
import { Navbar, Nav, Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/font/font.css";
import "../assets/css/href.css";
import logo from "../assets/media/logo.png";
import "https://kit.fontawesome.com/6c2a0de8a3.js";

const CustomNavbar = () => {
  const [search, setSearch] = useState();

  return (
    <>
      <div dir="rtl" class="col-md-12 fontr border-bottom border-dark" style={{ height: "65px" }}>
        <div class="row">
          <div class="col-md-7 row">
            <div class="col-md-3 ">
              <img style={{ height: "60px" }} src={logo} class="col" />
            </div>
            <div class="col-md-9 align-self-center d-flex justify-content-between">
              <a class="hrefb" href="/"><span class="col-md-3 h5">خانه </span></a>
              <a class="hrefb" href="/products"><span class="col-md-3 h5">محصولات </span></a>
              <a class="hrefb" href="/about"><span class="col-md-3 h5">درباره ما </span></a>
            </div>
          </div>
          <div class="col-md-5  row">
            <div class="col-md-5 align-self-center">
              <input
                class="form-control fontr"
                placeholder="جست وجو ..."
                onChange={(e) => setSearch(e.target.value)}
                style={{ backgroundColor: "#D9D9D9" }}
              />
            </div>
            <div class="col-md-1 align-self-center">
              <a href={"/products?search=" + search}>
                <button
                  class="rounded-circle btn"
                  alt="جست و جو"
                  style={{ backgroundColor: "#E8E7E7" }}
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </a>
            </div>
            <div class="col-md-2 h5 mt-2 d-flex justify-content-center align-self-center">
              <a href="/cart" class="hrefb"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div class="col-md-4 align-self-center">
              <span>
                <a href="/login" class="hrefb h5">
                  ورود
                </a>
                |
                <a href="/account" class="hrefb h5">
                  حساب کاربری
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomNavbar;
