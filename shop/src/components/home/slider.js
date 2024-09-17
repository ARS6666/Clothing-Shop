import React, { useState, useEffect } from "react";
import img from "../../assets/media/vid.mp4"
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
      <video style={{ height:"500px" , width:"100%" ,objectFit:"cover"}} src={img} muted autoPlay loop/>

      {/* <Carousel>
        {SliderPic.map(Pic =>
          <Carousel.Item>
            <img src={Pic.image} style={{ height:"500px" , width:"100%" ,objectFit:"cover"}} />
          </Carousel.Item>
        )}
      </Carousel> */}
    </div>

  </>);
};

export default ImageSlider;