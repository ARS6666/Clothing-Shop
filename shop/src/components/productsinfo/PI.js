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
  const [selectedColor, setSelectedColor] = useState("#ffffff");
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
    if (token) {
      setAdded(true);

      const dot = document.createElement('div');
      dot.className = 'dot';
      document.body.appendChild(dot);


      const x = event.clientX;
      const y = event.clientY;

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

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
      <div className="container " dir="rtl">
        <div className="row m-0">
          <div className="col-md-6 d-flex flex-column">
            <div className="row m-0">
              <div className="col-md-2 d-flex flex-column align-items-end">
                {IMG.slice(0, 3).map((c) => (
                  <img key={c.image} className="img-fluid m-1" src={c.image} alt="" />
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

          <div className="col-md-6 pt-5">
            <h1 className="text-dark">{product.name}</h1>
            <p className="text-muted">{product.description}</p>
            <h3 className="text-dark">{product.price} هزار تومان</h3>
            
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="fa fa-star checked"></span>
              ))}
              <a href="#reviews" className="ml-2">441 reviews</a>
            </div>

            
            <div className="product-colors mt-4">
              <h4>رنگ‌ها:</h4>
              <div className="d-flex flex-wrap">
                {color.map((color) => (
                  <div
                    key={color.name}
                    className="color-option m-2 rounded-circle"
                    style={{
                      backgroundColor: color.value,
                      width: "30px",
                      height: "30px",
                      border: selectedColor === color.value ? "2px solid black" : "none",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedColor(color.value)}
                  />
                ))}
              </div>
            </div>

            
            <div className="product-sizes mt-4">
              <h4>سایزبندی:</h4>
              <div className="d-flex flex-wrap">
                {Size.map((size) => (
                  <div
                    key={size}
                    className="size-option m-2 rounded"
                    style={{
                      backgroundColor: "#e0e0e0",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: selectedSize === size ? "2px solid black" : "none",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

          
            

<div className="pt-4 d-flex justify-content-between">
  <button 
    className="btn btn-outline-dark rounded-1 w-50" 
    style={{ marginLeft: '6px', height: '50px' }} 
    disabled={buttonDisabled} 
    onClick={(event) => AddItem(product.id, event)}
  >
    {buttonDisabled ?
                  <span class="text-success">به سبد خرید اضافه شد!</span>
                  :
                  <span>افزودن به سبد خرید</span>}
  </button>
  <button 
    className="btn btn-dark rounded-1 w-50" 
    style={{ marginRight: '6px', height: '50px' }}  
  >
    خرید مستقیم
  </button>
</div>

            
            <div className="pt-4">
  <div className="card border-dark border-2 shadow" style={{ height: '230px' }}>
    <div className="card-header text-right" style={{ backgroundColor: '#f8' }}>
      <h4 className="mb-2 mt-2" style={{ color: '#343a40' }}>توضیحات محصول</h4>
    </div>
    <div className="card-body">


      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="h5 font-weight-bold text-dark">جنس:</span>
        <span className="h5 text-secondary">{product.material}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <span className="h5 font-weight-bold text-dark">برند:</span>
        <span className="h5 text-secondary">{product.brand}</span>
      </div>
    </div>
  </div>
</div>




          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
