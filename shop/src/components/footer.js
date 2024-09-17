import { React } from "react";
import logo from "../assets/media/logo.png";
import eight from "../assets/media/85.png";
import eighto from "../assets/media/86.PNG";
import "../assets/css/href.css";
import "https://kit.fontawesome.com/6c2a0de8a3.js";
import "../assets/css/footer.css"

function Footer() {
  return (
    <>
      <div
        class="col-md-12 row border-top border-dark pt-3 pb-5"
        dir="rtl"
      >
        <div class=" col-md-8  row pb-3">
          <div class="col-md-3 ">
            <div class="pt-4 row">
              <img
                src={logo}
                style={{
                  height: "50px", width: "auto",
                  marginBottom: "10px"
                }}
                class="col-md-12"
              />

              <div>
                <i class="fa fa-telegram h4 p-1" aria-hidden="true"></i>
                <i class="fa-brands fa-facebook-f h4 p-1"></i>
                <i class="fa fa-whatsapp h4 p-1" aria-hidden="true"></i>
                <i class="fa fa-instagram h4 p-1" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="col-md-3  fontr">
            <div class="pt-4 row">
              <h5 className="mb-4 text-dark brand-name">🛒فروشگاه شاپ </h5>
              <p className="mb-3">
                <i class="bi bi-geo-alt-fill"></i> زنجان افغانستان آلمان پلاک 68
              </p>
              <p className="mb-3">
                <i class="bi bi-telephone-fill"></i> 091902312343
              </p>
              <p className="mb-3">
                <i class="bi bi-envelope-at-fill "></i> expample@example.com
              </p>
            </div>
          </div>
          <div class="col-md-3 fontr" >
            <div class="pt-4 row">
              <h5 className="mb-4 text-dark brand-name">خدمات مشتریان</h5>
              <p className="mb-3">
                <a class="hrefb"> درباره ی ما </a>
              </p>
              <p className="mb-3">
                <a class="hrefb">پرسش های متداول</a>
              </p>
              <p className="mb-3">
                <a class="hrefb">حریم خصوصی</a>
              </p>
            </div>
          </div>
          <div class="col-md-3  fontr">
            <div class="pt-4 row">
              <h5 className="mb-4 text-dark brand-name">نمیی دانم</h5>
              <p className="mb-3">
                <a class="hrefb">نمیدونم</a>
              </p>
              <p className="mb-3">
                <a class="hrefb">نادان هستم</a>
              </p>
              <p className="mb-3">
                <a class="hrefb">اطلاعی ندارم</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 pt-5 d-flex justify-content-end">
          <img class="m-3 border rounded p-2" src={eight} style={{ height: "100px", width: "auto" }} />
          <img class="m-3 border rounded p-2" src={eighto} style={{ height: "100px", width: "auto" }} />
        </div>
      </div>
    </>
  );
}

export default Footer;
