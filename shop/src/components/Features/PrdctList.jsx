import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/css/prdctl.css'
const Prdctlist = () => {
  const [showMenu, setShowMenu] = useState(false);
  let timer;

  const handleMouseEnter = () => {
    setShowMenu(true);
    clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
        setShowMenu(false);
      }, 300); 
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} dir="rtl">
    <span className="col-md-3 h5">
        دسته بندی کالا ها
    </span>
      {showMenu && (
        <div
          className="mega-menu border p-3"
          style={{
            position: "fixed",
            backgroundColor: "#fff",
            zIndex: 1000,
            width: "100%",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            right: '0',
            left:'0',
            top:'65px'
          }}
        >
          <Container>
            <Row>
              <Col md={3}>
                <h6>زنانه</h6>
                <ul className="list-unstyled">
                  <li>تیشرت</li>
                  <li>پیراهن </li>
                  <li>شلوار</li>
                  <li>ورزشی</li>
                </ul>
              </Col>
              <Col md={3}>
                <h6>مردانه</h6>
                <ul className="list-unstyled">
                  <li>تیشرت </li>
                  <li>شلوار</li>
                  <li>کت</li>
                  <li>ورزشی</li>
                </ul>
              </Col>
              <Col md={3}>
                <h6>بچگانه</h6>
                <ul className="list-unstyled">
                  <li>تیشرت</li>
                  <li>پیراهن</li>
                  <li>شلوارک </li>
                  <li>شلوار</li>
                </ul>
              </Col>
              <Col md={3}>
                <h6>اکسسوری</h6>
                <ul className="list-unstyled">
                  <li>انگشتر</li>
                  <li>کمربند</li>
                  <li>گردنبند</li>
                  <li>ساعت</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Prdctlist;
