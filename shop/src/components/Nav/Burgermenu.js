import React, { useState } from 'react';
import '../../assets/css/nav/burger.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    return (
        <div dir="rtl" class="fontr">
            <div className={`overlay ${isOpen ? 'show' : ''}`}></div>
            <button className="btn btn-transparent" onClick={toggleMenu}><i class="fa-solid fa-bars" style={{ fontSize: "1.4 rem" }}></i></button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <div class="col-12 d-flex justify-content-start"><button class="btn btn-transparent " onClick={toggleMenu}><i class="fa-solid fa-xmark" style={{ fontSize: "1.1 rem" }}></i></button></div>
                <ul>
                    <li class="col-12 d-flex justify-content-start"><a class="hrefb" href="/"><span class="col-3 h5 ah">خانه</span></a></li>
                    <li class="col-12 d-flex justify-content-start"><a class="hrefb" href="/products"><span class="col-3 h5 ah">محصولات</span></a></li>
                    <li class="col-12 d-flex justify-content-start"><a class="hrefb" href="/products"><span class="col-3 h5 ah">دسته بندی</span></a></li>
                    <li class="col-12 d-flex justify-content-start"><a class="hrefb" href="/about"><span class="col-3 h5 ah">درباره ما</span></a></li>
                    <li class="col-12 row m-0">
                        <div class="col-9 align-self-center">
                            <input
                                class="form-control fontr"
                                placeholder="جست وجو ..."
                                onChange={(e) => setSearch(e.target.value)}
                                style={{ backgroundColor: "#D9D9D9" }}
                            />
                        </div>
                        <div class="col-1 align-self-center">
                            <a href={`/products?search=${search}`}>
                                <button
                                    class="rounded-circle btn bg-transparent align-self-center"
                                    alt="جست و جو"
                                    style={{ backgroundColor: "#E8E7E7" }}
                                >
                                    <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "1.1 rem" }}></i>
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
