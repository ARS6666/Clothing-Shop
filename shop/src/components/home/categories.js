import { useState, React } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/home/categories.css";
import "../../assets/css/href.css"
import tshirtImage from "../../assets/media/tshirt.png";
import pantsImage from "../../assets/media/pants.png";
import socksImage from "../../assets/media/socks.png";
import coatImage from "../../assets/media/coat.png";
import hatImage from "../../assets/media/hat.png";
import skirtImage from "../../assets/media/skirt.png";
function Categories() {
  // const [Categories, setCategories] = useState();
  const Categories = [
    { Name: "تی شرت", Image: tshirtImage, Category: "تی شرت" },
    { Name: "شلوار", Image: pantsImage, Category: "شلوار" },
    { Name: "جوراب", Image: socksImage, Category: "جوراب" },
    { Name: "کت", Image: coatImage, Category: "کت" },
    { Name: "کلاه", Image: hatImage, Category: "شلوارک" },
    { Name: "دامن", Image: skirtImage, Category: "پیراهن" },
  ];

  return (
    <>
      <div class=" d-flex justify-content-center ">
        <div class="p-3 d-flex justify-content-center col-md-10">
          <div class="glassy-bg col-md-12 row" style={{ height: "120px" }}>
            {Categories.map((c) => (
              <a
                class="col d-flex justify-content-center hrefb"
                href={"/products?category=" + c.Category}
              >
                <div class="pt-2">
                  <div
                    class=" rounded d-flex justify-content-center "
                    style={{
                      backgroundColor: "#D9D9D9",
                      height: "100px",
                      width: "100px",
                    }}
                  >
                    <span class="fontr align-self-center">{c.Category}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
