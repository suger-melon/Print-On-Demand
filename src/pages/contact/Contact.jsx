import React from "react";
import './styles.scss'

// components import
import NavbarAccount from "../../components/navbarAccount/NavbarAccount";
import Footer from "../../components/footer/Footer";

// icons import
import phone from './../../assets/phone.svg'
import mail from './../../assets/mail.svg'

const Contact = () => {
    return(
        <>
            <NavbarAccount />
            
            <div className="contact">
                <div className="container">
                    <div className="path-top">
                        <span className="path">Home &nbsp; &nbsp; / &nbsp; &nbsp; </span><span>Contact</span>
                    </div>

                    <div className="row g-4 mb-5">
                        <div className="col-md-4">
                            <div className="card p-4 24.3 shadow-sm border-0">
                                <div className="d-flex align-items-center mb-3">
                                    <span className="icon-container">
                                        <img src={phone} alt="phone" />
                                    </span>
                                    <h5 className="m-0">Call To Us</h5>
                                </div>
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +8801611112222</p>
                                <hr />

                                <div className="d-flex align-items-center mb-3">
                                    <span className="icon-container">
                                        <img src={mail} alt="mail" />
                                    </span>
                                    <h5 className="m-0">Write To US</h5>
                                </div>
                                <p>Fill out our form and we will contact you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card p-4 shadow-sm border-0">
                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Your Name *" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" name="email" id="email" className="form-control" placeholder="Your Email *" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone *" />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" id="message" className="form-control" rows={11} placeholder="Your Massage"></textarea>
                                    </div>
                                    <div className="col-12 text-end">
                                        <button className="btn btn-danger px-4">Send Massage</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact;