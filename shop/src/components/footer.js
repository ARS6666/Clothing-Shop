import React from "react";
import logo from "../assets/media/logo.png";
import eight from "../assets/media/85.png";
import eighto from "../assets/media/86.PNG";
import "../assets/css/href.css";
import "../assets/css/footer.css"
import "https://kit.fontawesome.com/6c2a0de8a3.js";

function Footer() {
  return (
    <div class="container-fluid border-top border-dark pt-3 bg-light" dir="rtl">
      <div class="row m-0">
        <div class="col-lg-8 col-md-9 col-12 row m-0">
          <div class="col-lg-3 col-md-6 col-12 mb-3">
            <div class="pt-4 row m-0">
              <img src={logo} alt="Logo" style={{ height: "45px", width: "auto" }} class="col-12 mb-3" />
              <div>
                <i class="fa fa-telegram h4 p-1" aria-hidden="true"></i>
                <i class="fa-brands fa-facebook-f h4 p-1"></i>
                <i class="fa fa-whatsapp h4 p-1" aria-hidden="true"></i>
                <i class="fa fa-instagram h4 p-1" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-3 fontr">
            <div class="pt-4">
              <h5 class="mb-4 text-dark brand-name">🛒فروشگاه شاپ</h5>
              <p class="mb-3">
                <i class="bi bi-geo-alt-fill"></i> زنجان افغانستان آلمان پلاک 68
              </p>
              <p class="mb-3">
                <i class="bi bi-telephone-fill"></i> 091902312343
              </p>
              <p class="mb-3">
                <i class="bi bi-envelope-at-fill"></i> example@example.com
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-3 fontr">
            <div class="pt-4">
              <h5 class="mb-4 text-dark brand-name">خدمات مشتریان</h5>
              <p class="mb-3">
                <a class="hrefb" href="#about">درباره ی ما</a>
              </p>
              <p class="mb-3">
                <a class="hrefb" href="#faq">پرسش های متداول</a>
              </p>
              <p class="mb-3">
                <a class="hrefb" href="#privacy">حریم خصوصی</a>
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-3 fontr">
            <div class="pt-4">
              <h5 class="mb-4 text-dark brand-name">نمیی دانم</h5>
              <p class="mb-3">
                <a class="hrefb" href="#unknown">نمیدونم</a>
              </p>
              <p class="mb-3">
                <a class="hrefb" href="#ignorant">نادان هستم</a>
              </p>
              <p class="mb-3">
                <a class="hrefb" href="#no-info">اطلاعی ندارم</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-3 col-12 pt-5 d-flex justify-content-end">
          <img class="m-3 border rounded p-2" src={eight} alt="Certification" style={{ height: "100px", width: "auto" }} />
          <img class="m-3 border rounded p-2" src={eighto} alt="Certification" style={{ height: "100px", width: "auto" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
