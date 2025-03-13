// React DOM imports
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages import
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Error from "../pages/error/Error";
import Contact from "../pages/contact/Contact";
import Footer from "../components/footer/Footer";
import Product from "../components/product/Product";
import About from "../pages/about/About";
import ProductInfo from "../pages/product-info/ProductInfo";

function AppRoute() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/wishlist" element={<Home />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default AppRoute;