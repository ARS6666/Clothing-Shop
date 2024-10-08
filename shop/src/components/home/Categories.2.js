import React, { useState, useEffect } from "react";
import img1 from "../../assets/media/p1.jpg";
import img2 from "../../assets/media/t1.jpg";
import img3 from "../../assets/media/s1.jpg";
import img4 from "../../assets/media/pirahan.jpg";
import img5 from "../../assets/media/t2.jpg";
import img6 from "../../assets/media/s2.jpg";
import "../../assets/css/home/category.css";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [State, setState] = useState(6)
  const [width, setWidth] = useState(window.innerWidth);
  const [width2, setWidth2] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth < 765) {
        setState(3);
      } else {
        setState(6);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });



  const Categories = [
    { Name: "تی شرت", Category: "تی شرت", pic: img2 },
    { Name: "شلوار", Category: "شلوار", pic: img1 },
    { Name: "کفش", Category: "کفش", pic: img3 },
    { Name: "پیراهن", Category: "پیراهن", pic: img4 },
    { Name: "کلاه", Category: "کلاه", pic: img5 },
    { Name: "دامن", Category: "پیراهن", pic: img6 },
  ];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Categories.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };


  return (<>
    <div className="col-md-12 col-12 p-3 pb-3 m-0 ">
      <div className="fontr">
        <div className="col-md-12 row m-0 border-bottom border-2 ">
          <div className="d-flex justify-content-start col-md-6">
            <div class="m-1 fontr">
              <button
                class="btn border-0"
                onClick={nextSlide}
                disabled={currentIndex >= Categories.length - 3}
              >
                {`<`}
              </button>
            </div>
            <div class="m-1 fontr">
              <button
                class="btn border-0"
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                {`>`}
              </button>
            </div>
          </div>
          <div class="align-self-center text-end h3 d-flex justify-content-end col-md-6">دسته بندی ها</div>
        </div>

        <div className="slider-container col-md-12 row m-0 pt-2" dir="rtl">
          <div className="slider" style={{ transform: `translateX(${currentIndex * (100 / State)}%)` }}>
            {Categories.map((c, index) => (
              <div className="col-md-2 col-4" key={index} style={{ minWidth:`(-${(100 / State)}%)` }}>
                <a className="hrefb align-self-center" href={"/products?category=" + c.Category}>
                  <div className="row m-0">
                    <div className="d-flex justify-content-center ">
                      <img src={c.pic} className="d-block col-md-11 p-2 w-100" alt={c.Name} />
                    </div>
                    <div className="d-flex justify-content-center pt-2">
                      <span className="h4 fontr">{c.Name}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  </>
  );
};

export default ProductSlider; 
