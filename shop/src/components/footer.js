import React from "react";
import logo from "../assets/media/logo.png";
import eight from "../assets/media/85.png";
import eighto from "../assets/media/86.PNG";
import "../assets/css/href.css";
import "../assets/css/footer.css"
import "https://kit.fontawesome.com/6c2a0de8a3.js";

function Footer() {
  return (
    <div className="container-fluid border-top border-dark pt-3 bg-light" dir="rtl">
      <div className="row m-0">
        <div className="col-lg-8 col-md-9 col-12 row m-0">
          <div className="col-lg-3 col-md-6 col-12 mb-3">
            <div className="pt-4 row m-0">
              <img src={logo} alt="Logo" style={{ height: "45px", width: "auto" }} className="col-12 mb-3" />
              <div>
                <i className="fa fa-telegram h4 p-1" aria-hidden="true"></i>
                <i className="fa-brands fa-facebook-f h4 p-1"></i>
                <i className="fa fa-whatsapp h4 p-1" aria-hidden="true"></i>
                <i className="fa fa-instagram h4 p-1" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3 fontr">
            <div className="pt-4">
              <h5 className="mb-4 text-dark brand-name">🛒فروشگاه شاپ</h5>
              <p className="mb-3">
                <i className="bi bi-geo-alt-fill"></i> زنجان افغانستان آلمان پلاک 68
              </p>
              <p className="mb-3">
                <i className="bi bi-telephone-fill"></i> 091902312343
              </p>
              <p className="mb-3">
                <i className="bi bi-envelope-at-fill"></i> example@example.com
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3 fontr">
            <div className="pt-4">
              <h5 className="mb-4 text-dark brand-name">خدمات مشتریان</h5>
              <p className="mb-3">
                <a className="hrefb" href="#about">درباره ی ما</a>
              </p>
              <p className="mb-3">
                <a className="hrefb" href="#faq">پرسش های متداول</a>
              </p>
              <p className="mb-3">
                <a className="hrefb" href="#privacy">حریم خصوصی</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3 fontr">
            <div className="pt-4">
              <h5 className="mb-4 text-dark brand-name">نمیی دانم</h5>
              <p className="mb-3">
                <a className="hrefb" href="#unknown">نمیدونم</a>
              </p>
              <p className="mb-3">
                <a className="hrefb" href="#ignorant">نادان هستم</a>
              </p>
              <p className="mb-3">
                <a className="hrefb" href="#no-info">اطلاعی ندارم</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-12 pt-5 d-flex justify-content-end">
          <img className="m-3 border rounded p-2" src={eight} alt="Certification" style={{ height: "100px", width: "auto" }} />
          <img className="m-3 border rounded p-2" src={eighto} alt="Certification" style={{ height: "100px", width: "auto" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
