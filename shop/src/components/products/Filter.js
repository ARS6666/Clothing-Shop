import React, { useState ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/products/Filter.css';
import url from "../../config.json";

const Filter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleApplyFilter = () => {
    onFilterChange({
      searchTerm,
      minPrice,
      maxPrice,
      category,

    });
  };

  const handleClearFilter = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setCategory('');
    onFilterChange({
      searchTerm: '',
      minPrice: '',
      maxPrice: '',
      category: ''
    });
  };

  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("X-CSRFToken", "oWF4BYWZ2asUOabk8VBGC7SJcARquNg0HPyW3byriP71zUPgj0cYctxVFZRPwB6m");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url.baseUrl}/api/products/category/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setCategories(result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="col-md-12  fontr d-flex justify-content-end " dir='rtl'>
      <div class="rounded fix col-md-12 col-12">
        <div class="p-1">
          <div className="filter-header ">فیلتر محصولات</div>
          <div className="filter-input">
            <label className="filter-label">جستجو</label>
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  handleApplyFilter();
              }}
              type="text"
              className="form-control"
              placeholder="کلمه مورد نظر را وارد نمایید"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-input">
            <label className="filter-label"> قیمت (تومان)</label>
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  handleApplyFilter();
              }}
              type="number"
              className="form-control"
              placeholder="کمترین قیمت مد نظر"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  handleApplyFilter();
              }}
              type="number"
              className="form-control mt-2"
              placeholder="بیشترین قیمت مد نظر"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <div className="filter-inpu fontv">
            <label className="filter-label ">دسته بندی</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">انتخاب دسته بندی</option>
              {Categories.map((c) => (<option value={c.name}>{c.name}</option>))}
            </select>
          </div>
          <button className="btn btn-primary w-100 mt-3" onClick={handleApplyFilter}>
            اعمال فیلتر
          </button>
          <button className="btn btn-danger w-100 mt-2" onClick={handleClearFilter}>
            حذف فیلترها
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
