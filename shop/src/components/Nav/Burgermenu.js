import React, { useState } from 'react';
import '../../assets/css/nav/burger.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    return (
        <div dir="rtl" className="fontr">
            <div className={`overlayy ${isOpen ? 'show' : ''}`}></div>
            <button className="btn btn-transparent" onClick={toggleMenu} aria-label="Toggle Menu">
                <i className="fa-solid fa-bars" style={{ fontSize: "1.4rem" }}></i>
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <div className="col-12 d-flex justify-content-start">
                    <button className="btn btn-transparent" onClick={toggleMenu} aria-label="Close Menu">
                        <i className="fa-solid fa-xmark" style={{ fontSize: "1.1rem" }}></i>
                    </button>
                </div>
                <ul>
                    <li className="col-12 d-flex justify-content-start">
                        <a className="hrefb" href="/">
                            <span className="col-3 h5 ah">خانه</span>
                        </a>
                    </li>
                    <li className="col-12 d-flex justify-content-start">
                        <a className="hrefb" href="/products">
                            <span className="col-3 h5 ah">محصولات</span>
                        </a>
                    </li>
                    <li className="col-12 d-flex justify-content-start">
                        <a className="hrefb" href="/categories">
                            <span className="col-3 h5 ah">دسته بندی</span>
                        </a>
                    </li>
                    <li className="col-12 d-flex justify-content-start">
                        <a className="hrefb" href="/about">
                            <span className="col-3 h5 ah">درباره ما</span>
                        </a>
                    </li>
                    <li className="col-12 row m-0">
                        <div className="col-9 align-self-center">
                            <input
                                className="form-control fontr"
                                placeholder="جست وجو ..."
                                onChange={(e) => setSearch(e.target.value)}
                                style={{ backgroundColor: "#D9D9D9" }}
                                aria-label="Search"
                            />
                        </div>
                        <div className="col-1 align-self-center">
                            <a href={`/products?search=${search}`}>
                                <button
                                    className="rounded-circle btn bg-transparent align-self-center"
                                    aria-label="Search Button"
                                    style={{ backgroundColor: "#E8E7E7" }}
                                >
                                    <i className="fa-solid fa-magnifying-glass" style={{ fontSize: "1.1rem" }}></i>
                                </button>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;
