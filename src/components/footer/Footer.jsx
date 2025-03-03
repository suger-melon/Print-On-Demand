import React from "react";
import './styles.scss'

// logo imports
import rightArrow from './../../assets/right-arrow.svg'
import qr from './../../assets/qr.png'
import googlePlayStore from './../../assets/google-play-store.png'
import appleAppStore from './../../assets/apple-app-store.png'
import facebook from './../../assets/facebook.svg'
import twitter from './../../assets/twitter.svg'
import instagram from './../../assets/instagram.svg'
import linkedIn from './../../assets/linkedIn.svg'
import copyWrite from './../../assets/copywrite.svg'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row flex-wrap text-center text-md-start">
                        <div className="col-md-2">
                            <div className="first-line">Exclusive</div>
                            <div className="subscribe">Subscribe</div>
                            <div className="mb-5">Get 10% off your first order</div>
                            <div className="d-flex mb-5 justify-content-center">
                                <input type="search" className="footer-search" placeholder="Enter your email" name="footer-email" id="footer-email" />
                                <img src={rightArrow} alt="right arrow" className="rightArrow" />
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="first-line">Support</div>
                            <div className="mb-3">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
                            <div className="mb-3">exclusive@gmail.com</div>
                            <div>+88015-88888-9999</div>
                        </div>

                        <div className="col-md-2">
                            <div className="first-line">Account</div>
                            <div className="d-flex flex-column gap-3">
                                <div>My Account</div>
                                <div>Login / Register</div>
                                <div>Cart</div>
                                <div>Wishlist</div>
                                <div>Shop</div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="first-line">Quick Link</div>
                            <div className="d-flex flex-column gap-3">
                                <div>Privacy Policy</div>
                                <div>Terms Of Use</div>
                                <div>FAQ</div>
                                <div>Contact</div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="first-line">Download App</div>
                            <div className="text-secondary fs-6 mb-3">Save $3 with App New User Only</div>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mb-3">
                                <img src={qr} alt="qr code" />
                                <div className="d-flex flex-column justify-content-around">
                                    <img src={googlePlayStore} alt="google play store" height={30} width={100}/>
                                    <img src={appleAppStore} alt="apply app store" height={30} width={100}/>
                                </div>
                            </div>
                            <div className="d-flex gap-4 justify-content-center">
                                <img src={facebook} alt="facebook" />
                                <img src={twitter} alt="twitter" />
                                <img src={instagram} alt="instagram" />
                                <img src={linkedIn} alt="linkedIn" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                    <div className="text-secondary d-flex justify-content-center pb-3">
                        <img src={copyWrite} alt="copy write" />
                        <span className="ms-2">Copyright Rimel 2022. All right reserved</span>
                    </div>
            </div>
        </>
    )
}

export default Footer;