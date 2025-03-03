import React from "react";
import "./styles.scss";

// Components import
import NavbarHome from "../../components/navbarHome/navbarHome";
import Footer from "../../components/footer/Footer";
import SaleProduct from "../../components/saleProduct/SaleProduct";
// import CartProduct from "../../components/cartProduct/CartProduct";

// Assets import
import rightArrow from "./../../assets/mini-right-arrow.svg";
import apple from "./../../assets/apple.svg";
import rightArrowSign from "./../../assets/right-sign-arrow.svg";
import iphone from "./../../assets/iphone.png";
import singleLeftArrow from './../../assets/single-left-arrow.svg'
import singleRightArrow from './../../assets/single-right-arrow.svg'
import phone from './../../assets/category/phone.svg'
import computer from './../../assets/category/computer.svg'
import smartWatch from './../../assets/category/watch.svg'
import camera from './../../assets/category/camera.svg'
import headphone from './../../assets/category/headphone.svg'
import gaming from './../../assets/category/gaming.svg'

const Home = () => {
    return (
        <>
            <NavbarHome />
            <div className="home">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-3 sidebar mt-2">
                            <ul className="home-top-sidebar">
                                <div className="d-flex justify-content-between">
                                    <li>Woman’s Fashion</li>
                                    <img src={rightArrow} alt="right arrow" />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <li>Men’s Fashion</li>
                                    <img src={rightArrow} alt="right arrow" />
                                </div>
                                <li>Electronics</li>
                                <li>Home & Lifestyle</li>
                                <li>Medicine</li>
                                <li>Sports & Outdoor</li>
                                <li>Baby’s & Toys</li>
                                <li>Groceries & Pets</li>
                                <li>Health & Beauty</li>
                            </ul>
                        </div>


                        <div className="col-md-9 main-carousel-parent">
                            <div className="main-carousel">
                                <div className="row align-items-center">

                                    <div className="col-md-6 left-part">
                                        <div className="product-name-logo d-flex align-items-center gap-3">
                                            <img src={apple} alt="apple" />
                                            <p className="m-0">iPhone 14 Series</p>
                                        </div>
                                        <div className="voucher">Up to 10% off Voucher</div>
                                        <div className="shop-now">
                                            <p className="m-0">Shop Now</p>
                                            <img src={rightArrowSign} alt="right arrow sign" />
                                        </div>
                                    </div>


                                    <div className="col-md-6 right-part">
                                        <img src={iphone} alt="iPhone" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="carousel-indicators">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot active"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flash-sale">
                        <div className="status">
                            <div className="mark"></div>
                            <h6 className="status-text mb-0">Today’s</h6>
                        </div> 

                        <div className="sale-title">
                            <h2 className="title mb-0">
                                Flash Sales
                            </h2>
                            <div className="sale-timmer">
                                <div>
                                    <p className="timmer small">Days</p>
                                    <h2 className="timmer">03</h2>
                                </div>
                                <div className="double-dotts">
                                    <span></span>
                                    <span></span>
                                </div>
                                <div>
                                    <p className="timmer small">Hours</p>
                                    <h2 className="timmer">23</h2>
                                </div>
                                <div className="double-dotts">
                                    <span></span>
                                    <span></span>
                                </div>
                                <div>
                                    <p className="timmer small">Minutes</p>
                                    <h2 className="timmer">19</h2>
                                </div>
                                <div className="double-dotts">
                                    <span></span>
                                    <span></span>
                                </div>
                                <div>
                                    <p className="timmer small">Seconds</p>
                                    <h2 className="timmer">56</h2>
                                </div>
                            </div>
                        </div>    

                        <div className="d-flex gap-5 justify-content-center flex-wrap sale-product-que">
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                        </div>

                        <div>
                            <button className="after-sale-product">View All Products</button>
                        </div>
                    </div>
                    <hr />

                    <div className="category">
                        <div className="status">
                            <div className="mark"></div>
                            <h6 className="status-text mb-0">Categories</h6>
                        </div> 
                        <div className="category-title d-flex justify-content-between">
                            <h2>Browse By Category</h2>
                            <span>
                                <span className="d-flex gap-2">
                                    <span className="arrow-parent">
                                        <img src={singleLeftArrow} alt="left arrow" />
                                    </span>
                                    <span className="arrow-parent">
                                        <img src={singleRightArrow} alt="right arrow" />
                                    </span>
                                </span>
                            </span>
                        </div>

                        <div className="category-icons">
                            <div className="category-icon">
                                <img src={phone} alt="mobile" />
                                <p className="mb-0">Phones</p>
                            </div>
                            <div className="category-icon">
                                <img src={computer} alt="computer" />
                                <p className="mb-0">Computers</p>
                            </div>
                            <div className="category-icon">
                                <img src={smartWatch} alt="smart watch" />
                                <p className="mb-0">SmartWatch</p>
                            </div>
                            <div className="category-icon selected-icon">
                                <img src={camera} alt="camera" />
                                <p className="mb-0">Camera</p>
                            </div>
                            <div className="category-icon">
                                <img src={headphone} alt="headphone" />
                                <p className="mb-0">HeadPhones</p>
                            </div>
                            <div className="category-icon">
                                <img src={gaming} alt="gaming" />
                                <p className="mb-0">Gaming</p>
                            </div>
                        </div>

                    </div>
    
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
