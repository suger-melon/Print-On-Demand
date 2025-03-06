import React from "react";
import './styles.scss'

// component imports
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

// image
import ourStory from "./../../assets/about/our-story.png"
import home from "./../../assets/about/home.svg"
import dollar from "./../../assets/about/dollar.svg"
import bag from "./../../assets/about/bag.svg"
import dollarBag from "./../../assets/about/moneybag.svg"
import tom from "./../../assets/about/tom.png"
import emma from "./../../assets/about/emma.png"
import will from "./../../assets/about/will.png"
import twitter from "./../../assets/about/twitter.svg"
import instagram from "./../../assets/about/instagram.svg"
import linkedIn from "./../../assets/about/linkedIn.svg"
import delivery from './../../assets/delivery.svg'
import headphoneLast from './../../assets/headphone.svg'
import garuntee from './../../assets/security.svg'

const About = () => {
    return(
        <>
            <Navbar />
            <div className="about">
                <div className="container mt-0">
                    <div className="path-top">
                        <span className="path">Home &nbsp; &nbsp; / &nbsp; &nbsp; </span><span>About</span>
                    </div>
                </div>
                
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 left-text">
                            <div className="text">
                                <div className="heading">Our Story</div>
                                <div>
                                    <p className="content">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                                    <p className="content">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-end pe-md-0">
                            <div className="image">
                                <img src={ourStory} alt="our story" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="stats">
                        <div className="box house">
                            <div className="image">
                                <img src={home} alt="" />
                            </div>
                            <div className="number">10.5k</div>
                            <div className="data">Sallers active our site</div>
                        </div>
                        <div className="box activate">
                            <div className="image">
                                <img src={dollar} alt="" />
                            </div>
                            <div className="number">33k</div>
                            <div className="data">Mopnthly Produduct Sale</div>
                        </div>
                        <div className="box bag">
                            <div className="image">
                                <img src={bag} alt="" />
                            </div>
                            <div className="number">45.5k</div>
                            <div className="data">Customer active in our site</div>
                        </div>
                        <div className="box moneybag">
                            <div className="image">
                                <img src={dollarBag} alt="" />
                            </div>
                            <div className="number">25k</div>
                            <div className="data">Anual gross sale in our site</div>
                        </div>
                    </div>


                    <div className="person">
                        <div className="single-person">
                            <div className="image-person">
                                <img src={tom} alt="tom person" />
                            </div>
                            <div className="person-content">
                                <div className="person-name">Tom Cruise</div>
                                <div className="person-position">Founder & Chairman</div>
                                <div className="person-social">
                                    <img src={twitter} alt="twitter" />
                                    <img src={instagram} alt="instagram" />
                                    <img src={linkedIn} alt="linkedIn" />
                                </div>
                            </div>
                        </div>
                        <div className="single-person">
                            <div className="image-person">
                                <img src={emma} alt="tom person" />
                            </div>
                            <div className="person-content">
                                <div className="person-name">Emma Watson</div>
                                <div className="person-position">Managing Director</div>
                                <div className="person-social">
                                    <img src={twitter} alt="twitter" />
                                    <img src={instagram} alt="instagram" />
                                    <img src={linkedIn} alt="linkedIn" />
                                </div>
                            </div>
                        </div>
                        <div className="single-person">
                            <div className="image-person">
                                <img src={will} alt="tom person" />
                            </div>
                            <div className="person-content">
                                <div className="person-name">Will Smith</div>
                                <div className="person-position">Product Designer</div>
                                <div className="person-social">
                                    <img src={twitter} alt="twitter" />
                                    <img src={instagram} alt="instagram" />
                                    <img src={linkedIn} alt="linkedIn" />
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


                </div>


                
            </div>
            <Footer />
        </>
    )
}

export default About