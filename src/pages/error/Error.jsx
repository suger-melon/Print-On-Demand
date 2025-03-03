import React from "react";
import './styles.scss'

// react dom import
import { Link } from "react-router-dom";

// components import
import NavbarAccount from './../../components/navbarAccount/NavbarAccount'
import Footer from './../../components/footer/Footer'

const Error = () => {
    return(
        <>
            <NavbarAccount />
                
            <div className="error">
                <div className="container">
                    <div className="path-top">
                        <span className="path">Home &nbsp; &nbsp; / &nbsp; &nbsp; </span><span>404 Error</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="text-not-found">404 Not Found</div>
                        <div className="sub-text-not-found">Your visited page not found. You may go home page.</div>
                        <Link to='/home' className="error-button-link">
                            <button className="error-button">  Back to home page</button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Error;