import React from "react";
import './styles.scss'

// components import
import Navbar from './../../components/navbar/Navbar'
import Footer from './../../components/footer/Footer'

// images import
import loginSignup from './../../assets/login-signup.png'

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 p-0 mb-5">
                            <img src={loginSignup} alt="shopping" className="ms-0 img-fluid w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="login-box col-md-5 px-0 d-flex align-items-center justify-content-center">
                            <div className="h-100 d-flex flex-column justify-content-center align-items-start">
                                
                                <div className="fs-2 fw-medium">Log in to Exclusive</div>
                                <div className="details">Enter your details below</div>
                                
                                <div className="input-container">
                                    <input type="email" name="email" id="email" placeholder="Email or Phone Number" />
                                </div>
                                <div className="input-container">
                                    <input type="password" name="password" id="password" placeholder="Password" />
                                </div>
                               
                                <div className="login-submit d-flex flex-wrap text-center w-100">
                                    <button className="login-button btn btn-primary w-100">Log In</button>
                                    <span className="forget-password w-100 mt-2">Forget Password?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>  
        </>
    )
}

export default Login;