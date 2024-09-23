import { useState, React } from "react";
import { Navbar, Nav, Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/font/font.css";
import "../assets/css/href.css";
import "../assets/css/hide.css";
import logo from "../assets/media/logo.png";
import "https://kit.fontawesome.com/6c2a0de8a3.js"
import Prdctlist from "./Features/PrdctList";
import "../assets/css/buttonn.css"

const CustomNavbar = () => {
  const [search, setSearch] = useState();

  return (
    <>
      <Navbar dir="rtl" >
        <div class="col-md-12 fontr  row m-0">
          <div class="col-md-7 row m-0">
            <div class="col-md-3 ">
              <img style={{ height: "45px" }} src={logo} class="col" />
            </div>
            <Nav class="col-md-8 align-self-center d-flex justify-content-between">
              <Nav.Link class="hrefb " href="/"><span class="col-md-3 h5 ah">خانه </span></Nav.Link>
              <Nav.Link class="hrefb" href="/products"><span class="col-md-3 h5  ah">محصولات </span></Nav.Link>
              <Nav.Link className="hrefb"><Prdctlist /></Nav.Link>
              <Nav.Link class="hrefb" href="/about"><span class="col-md-3 h5  ah">درباره ما </span></Nav.Link>
            </Nav >
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
                <a href="/login" class="hrefb h5 ah">
                  ورود
                </a>
                {" "}|{" "}
                <a href="/account" class="hrefb h5 ah">
                  حساب کاربری
                </a>
              </span>
            </div>
          </div>
        </div>
      </Navbar >
    </>
  );
};
export default CustomNavbar;
