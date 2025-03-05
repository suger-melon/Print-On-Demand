import React from "react";
import './styles.scss'

// page import
import SaleProduct from "../saleProduct/SaleProduct";

// impages import

// flash sales
import sale1 from "./../../assets/products/sale1.png"
import sale2 from "./../../assets/products/sale2.png"
import sale3 from "./../../assets/products/sale3.png"
import sale4 from "./../../assets/products/sale4.png"

const ProductList = [
    {
        id: 1,
        image: sale1,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        discount: 40,
        rating: 3.5,
        reviews: 88
    }, 
    {
        id: 2,
        image: sale2,
        name: "AK-900 Wired Keyboard",
        price: 960,
        originalPrice: 1160,
        discount: 200,
        rating: 4,
        reviews: 75
    },
    {
        id: 3,
        image: sale3,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        originalPrice: 400,
        discount: 30,
        rating: 5,
        reviews: 99
    },
    {
        id: 4,
        image: sale4,
        name: "S-Series Comfort Chair ",
        price: 375,
        originalPrice: 400,
        discount: 25,
        rating: 4.5,
        reviews: 99
    }
]

const Product = () => {
    return(
        <>
            <div className="product-container">
                {
                    ProductList.map(product => (
                        <SaleProduct key={product.id} product={product}  />
                    ))
                }
            </div>
        </>
    )
}

export default Product;