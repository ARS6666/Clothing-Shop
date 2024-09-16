import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';


function ImageSlider() {
  const [SliderPic, setSliderPic] = useState([])

  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("X-CSRFToken", "j5ZawuIYv02cEII2cAOXj5FJlg9fLusxsbIGi8EEyVrDMtygZ4f2tXNFg79O3y1F");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sliders/slider/", requestOptions)
      .then((response) => response.json())
      .then((result) => setSliderPic(result))
      .catch((error) => console.error(error));
  }, []);



  return (<>

    <div class="col-md-12 ">
      <Carousel>
        {SliderPic.map(Pic =>
          <Carousel.Item>
            <img className="d-block w-100" src={Pic.image} />
          </Carousel.Item>
        )}
      </Carousel>
    </div>

  </>);
};

export default ImageSlider;