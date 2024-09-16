import { useState, React } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/home/categories.css";
import "../../assets/css/href.css"

function Categories() {
  // const [Categories, setCategories] = useState();
  const Categories = [
    { Name: "تی شرت", Category: "تی شرت" },
    { Name: "شلوار", Category: "شلوار" },
    { Name: "جوراب", Category: "جوراب" },
    { Name: "کت", Category: "کت" },
    { Name: "کلاه", Category: "کلاه" },
    { Name: "دامن", Category: "پیراهن" },
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
