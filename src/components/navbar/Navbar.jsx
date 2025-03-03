import React from "react";
import { useState } from "react";
import './styles.scss'

// react dom imports
import { Link } from "react-router-dom";

// importing logo
import downArrow from '../../assets/down-arrow.svg'
import search from '../../assets/search.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="container-fluid navbar-top">
                <div className="w-100 d-flex flex-wrap justify-content-center text-center mx-sm-2">
                    <p className="p-0 m-0 me-md-2">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <span className="fw-bold text-decoration-underline">ShopNow</span>
                </div>
                <div className="d-flex flex-wrap ms-auto me-5 position-absolute top-2 end-0">
                    <p className="p-0 m-0 me-2">English</p>
                    <img src={downArrow} alt="down arrow" />
                </div>
            </div>
            
            <nav className="navbar navbar-expand-lg bg-white mt-3">
                <div className="container">
                    <a className="navbar-brand fs-3 fw-bold" href="#">
                        Exclusive
                    </a>

                    <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
                    <ul className="navbar-nav mx-auto gap-lg-4 text-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                    </ul>

                    <div className="d-flex search-container">
                        <input 
                        type="text" 
                        className="form-control search-box bg-light border-0" 
                        placeholder="What are you looking for?" 
                        aria-label="Search"
                        />
                        <img src={search} alt="search icon" className="search-icon" />
                    </div>
                </div>
                </div>
            </nav>
            <hr className="mt-0"/>
        </>
    )
}

export default Navbar;