import React from "react";
import './styles.scss'

// react router dom imports
import { Link } from "react-router-dom";

// components import
import Navbar from './../../components/navbar/Navbar'
import Footer from './../../components/footer/Footer'

// images import
import loginSignup from './../../assets/login-signup.png'
import google from './../../assets/google.svg'



const Signup = () => {
    return(
        <>
            <Navbar />

            <div className="signup">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 p-0 mb-5">
                            <img src={loginSignup} alt="shopping" className="ms-0 img-fluid w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="signup-box col-md-5 px-0 d-flex align-items-center justify-content-center">
                            <div className="h-100 d-flex flex-column justify-content-center align-items-start">
                                
                                <div className="fs-2 fw-medium">Create an account</div>
                                <div className="details">Enter your details below</div>
                                
                                <div className="input-container">
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                </div>
                                <div className="input-container">
                                    <input type="email" name="email" id="email" placeholder="Email or Phone Number" />
                                </div>
                                <div className="input-container">
                                    <input type="password" name="password" id="password" placeholder="Password" />
                                </div>
                                
                                <div className="login-submit d-flex flex-wrap text-center w-100">
                                    <button className="signup-button btn btn-primary w-100">Create Account</button>
                                    <button className="google-button btn btn-primary w-100"> <img src={google} alt="google" className="me-2" /> Sign up with Google</button>
                                    <div className="w-100">
                                        <span className="forget-password mt-2">Already have account?</span>
                                        <span className="signup-login mt-2">
                                            <Link to='/login'>Log in</Link>
                                        </span>
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

export default Signup;