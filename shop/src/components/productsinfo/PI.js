import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "../../assets/css/productsinfo/PI.css";
import "../../assets/css/hide.css";
import Comment from './CommentBox';
import Loading from "../loading/loading";

function ProductInfo() {
  const navigate = useNavigate();
  const [IsLoading, setisLoading] = useState(true)
  const token = localStorage.getItem('token');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [IMG, setIMG] = useState([]);
  const [added, setAdded] = useState(false);
  const [Size, setSize] = useState([]);
  const [product, setProduct] = useState({ colors: [] });
  const location = useLocation();
  const [id, setId] = useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Default white color
  const [selectedSize, setSelectedSize] = useState();

  const color = [
    { name: "Red", value: "#ff0000" },
    { name: "Green", value: "#00ff00" },
    { name: "Blue", value: "#0000ff" },
    { name: "Yellow", value: "#ffff00" },
    { name: "Purple", value: "#800080" },
  ];


  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
  myHeaders.append("X-CSRFToken", "tc6gv0BlCSEVzaDY2DEUFDyvHxAouuuWnjsAM5wngQp4psjqQKsZfKhJ0eopXCA7");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramId = searchParams.get('id');
    if (paramId) {
      setId(paramId);
    }
  }, [location.search]);

  useEffect(() => {
    if (id) {
      fetch("http://127.0.0.1:8000/api/v1/products/" + id, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setProduct(result); setIMG(result.images); setSize(result.size); setisLoading(false)
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  function AddItem(productId, event) {
    console.log(token)
    if (token) {
      setAdded(true);

      const dot = document.createElement('div');
      dot.className = 'dot';
      document.body.appendChild(dot);

      const buttonRect = event.target.getBoundingClientRect();

      dot.style.left = `${buttonRect.right / 2}px`;
      dot.style.top = `${buttonRect.top + buttonRect.height / 2}px`;

      setTimeout(() => {
        dot.style.transform = 'translate(-50vh , -100vh)';
      }, 10);

      setTimeout(() => {
        document.body.removeChild(dot);
        setAdded(false);
      }, 1900);
      setButtonDisabled(true);
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("X-CSRFToken", "5teHG5lzFJM4CD8QwLdXzrrvjxmRqWl91abWUh2YcbHKJ1NVq5s3g9B3KrcKmR8L");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const raw = JSON.stringify({
        "product_id": productId
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("http://127.0.0.1:8000/cart/add_item/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log())
        .catch((error) => console.error(error));
    } else {
      navigate('/login');;
    }

  }


  return (
    <>
      {IsLoading ? <Loading /> : null}
      <div class="p-4 col-md-12 pt-2" dir="rtl">
        <div class="row m-0">
          <div class="col-md-6 d-flex flex-column">
            <div class="row m-0">
              <div class="col-md-2 remove d-flex flex-column align-items-end romove">
                {IMG.slice(0, 3).map((c) => (
                  <img key={c.image} className="img-fluid m-1 remove" src={c.image} alt="" />
                ))}
              </div>
              <div className="col-md-10">
                <Carousel>
                  {IMG.map((Pic, index) => (
                    <Carousel.Item key={index}>
                      <img className="d-block w-100 Image" src={Pic.image} alt="" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          <div class="col-md-6 fontr pt-5 ">
            <h1 class="text-dark">{product.name}</h1>
            <h3 class="text-dark">{product.price} هزار تومان</h3>

            <div class="pt-3">
              <span class="h4">رنگ ها:</span>
              <div class="d-flex justify-content-end">
                <div className="d-flex flex-wrap">
                  {color.map((color) => (
                    <div
                      key={color.name}
                      className="color-option m-2"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: color.value,
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                        border: selectedColor === color.value ? "2px solid black" : "none",
                      }}
                      onClick={() => setSelectedColor(color.value)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div class="pt-3">
              <span class="h4">سایز بندی:</span>
              <div class="row m-0 d-flex justify-content-start" dir="ltr">
                {Size.map((e) => (
                  <div
                    key={e}
                    className="color-option"
                    style={{
                      height: "40px",
                      width: "40px",
                      backgroundColor: "#D9D9D9",
                      marginRight: "10px",
                      border: selectedSize === e ? "2px solid black" : "none",
                    }}
                    onClick={() => setSelectedSize(e)}
                  >
                    <span className='text-dark text-center   align-self-center' style={{ marginTop: "20px" }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>

            <div class="pt-4">
              <span class="h4">توضیحات:</span>
              <p class="h5">{product.description}</p>
            </div>

            <div class="pt-4">
              <span class="h4">جنس:</span>
              <div class="d-flex justify-content-end">
                <span class="h5">{product.material}</span>
              </div>
            </div>

            <div class="pt-4">
              <span class="h4">برند:</span>
              <div class="d-flex justify-content-end">
                <span class="h5">{product.brand}</span>
              </div>
            </div>

            <div class="pt-5">
              <button class="btn rounded-0 btn-lg btn-outline-dark w-100 add-to-cart" onClick={(event) => AddItem(product.id, event)} disabled={buttonDisabled}>
                {buttonDisabled ?
                  <span class="text-success">به سبد خرید اضافه شد!</span>
                  :
                  <span>افزودن به سبد خرید</span>}</button>
            </div>
          </div>
        </div >
      </div >

    </>
  );
}

export default ProductInfo;
