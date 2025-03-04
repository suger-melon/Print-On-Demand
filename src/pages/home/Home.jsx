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
import jbl from './../../assets/jbl.png'
import ps5Image from './../../assets/arrival/ps5.png'
import women from './../../assets/arrival/women.png'
import amazonEcho from './../../assets/arrival/amazon-echo.png'
import perfume from './../../assets/arrival/perfume.png'
import delivery from './../../assets/delivery.svg'
import headphoneLast from './../../assets/headphone.svg'
import garuntee from './../../assets/security.svg'
import upArrow from './../../assets/up-arrow.svg'

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
                            {/* <SaleProduct /> */}
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
                        <hr />
                    </div>

                    <div className="this-month">
                        <div className="status">
                            <div className="mark"></div>
                            <h6 className="status-text mb-0">This Month</h6>
                        </div>

                        <div className="category-title d-flex justify-content-between">
                            <h2>Best Selling Products</h2>
                            <button className="this-month-view-all">View All</button>
                        </div>

                        <div className="d-flex gap-5 justify-content-center flex-wrap">
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                            {/* <SaleProduct /> */}
                        </div>
                    </div>

                    <div className="flex-banner">
                        <div className="row h-100 align-items-center">
                            <div className="col-md-6 left-content">
                                <div className="text-content">
                                    <div className="title-category">
                                        Categories
                                    </div>
                                    <div className="title-content fs-1">
                                        Enhance Your Music Experience
                                    </div>
                                    <div className="countdown">
                                        <div className="countdown-item">
                                            <div className="fw-bold fs-5 countdown-fonts">23</div>
                                            <small>Hours</small>
                                        </div>
                                        <div className="countdown-item">
                                            <div className="fw-bold fs-5 countdown-fonts">05</div>
                                            <small>Days</small>
                                        </div>
                                        <div className="countdown-item">
                                            <div className="fw-bold fs-5 countdown-fonts">59</div>
                                            <small>Minutes</small>
                                        </div>
                                        <div className="countdown-item">
                                            <div className="fw-bold fs-5 countdown-fonts">35</div>
                                            <small>Seconds</small>
                                        </div>
                                    </div>

                                    <button className="buy-now">Buy Now!</button>
                                </div>
                            </div>
                            <div className="col-md-6 right-content py-2">
                                <img src={jbl} alt="speaker" />
                            </div>
                        </div>
                    </div>


                    <div className="best-selling-product">
                        <div className="status">
                            <div className="mark"></div>
                            <h6 className="status-text mb-0">Our Products</h6>
                        </div> 
                        
                        <div className="category-title d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">Explore Our Products</h2>
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

                        <div className="d-flex gap-5 justify-content-center flex-wrap">
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                            <SaleProduct />
                            {/* <SaleProduct /> */}
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="after-sale-product">View All Products</button>
                        </div>
                    </div>


                    <div className="new-arrival">
                        <div className="status">
                            <div className="mark"></div>
                            <h6 className="status-text mb-0">Featured</h6>
                        </div> 
                            
                        <div className="category-title d-flex justify-content-between">
                            <h2>New Arrival</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6 left m-0" style={{ backgroundImage: `url(${ps5Image})`}}>
                                <div className="content-wrapper">
                                    <div className="content">
                                        <h4 className="title">PlayStation 5</h4>
                                        <div className="text">Black and White version of the PS5 <br /> coming out on sale.</div>
                                        <div className="link">Shop Now</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 right m-0">
                                <div className="col-md-12">
                                    <div className="grid-item item1" style={{ backgroundImage: `url(${women})`}}>
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <h4 className="title">Women’s Collections</h4>
                                                <div className="text">Featured woman collections that <br /> give you another vibe.</div>
                                                <div className="link">Shop Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-3 pb-0 justify-content-between">
                                    <div className="col-md-6 speaker mt-0" style={{ backgroundImage: `url(${amazonEcho})`}}>
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <h4 className="title">Speakers</h4>
                                                <div className="text">Amazon wireless speakers</div>
                                                <div className="link">Shop Now</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 perfume mt-0" style={{ backgroundImage: `url(${perfume})`}}>
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <h4 className="title">Perfume</h4>
                                                <div className="text">GUCCI INTENSE OUD EDP</div>
                                                <div className="link">Shop Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                          
                    </div>       

                    <div className="bottom-icons">
                        <div className="delivery">
                            <div className="icon">
                                <img src={delivery} alt="delivery" />
                            </div>
                            <div className="title-tag">FREE AND FAST DELIVERY</div>
                            <div className="desc">Free delivery for all orders over $140</div>
                        </div>

                        <div className="service">
                            <div className="icon">
                                <img src={headphoneLast} alt="headphone" />
                            </div>
                            <div className="title-tag">24/7 CUSTOMER SERVICE</div>
                            <div className="desc">Friendly 24/7 customer support</div>
                        </div>

                        <div className="gurantee">
                            <div className="icon">
                                <img src={garuntee} alt="garuntee" />
                            </div>
                            <div className="title-tag">MONEY BACK GUARANTEE</div>
                            <div className="desc">We reurn money within 30 days</div>
                        </div>
                    </div>

                    <div className="up-arrow">
                        <img src={upArrow} alt="up arrow" height={25} width={25} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
