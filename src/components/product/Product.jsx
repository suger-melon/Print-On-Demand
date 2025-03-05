import React from "react";
import './styles.scss'

// page import
import SaleProduct from "../saleProduct/SaleProduct";
import BestSellingProduct from "../bestSellingProduct/BestSellingProduct";
import CartProduct from "../cartProduct/CartProduct";

// impages import

// flash sales
import sale1 from "./../../assets/products/sale1.png"
import sale2 from "./../../assets/products/sale2.png"
import sale3 from "./../../assets/products/sale3.png"
import sale4 from "./../../assets/products/sale4.png"

// best selling product
import bs1 from "./../../assets/products/bsproduct1.png"
import bs2 from "./../../assets/products/bsproduct2.png"
import bs3 from "./../../assets/products/bsproduct3.png"
import bs4 from "./../../assets/products/bsproduct4.png"

// explore our products
import product1 from './../../assets/products/product1.png'
import product2 from './../../assets/products/product2.png'
import product3 from './../../assets/products/product3.png'
import product4 from './../../assets/products/product4.png'
import product5 from './../../assets/products/product5.png'
import product6 from './../../assets/products/product6.png'
import product7 from './../../assets/products/product7.png'
import product8 from './../../assets/products/product8.png'

const FlashSales = [
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

const BestSellingProducts = [
    {
        id: 1,
        image: bs1,
        name: "The north coat",
        price: 260,
        originalPrice: 360,
        rating: 5,
        reviews: 65
    }, 
    {
        id: 2,
        image: bs2,
        name: "Gucci duffle bag",
        price: 960,
        originalPrice: 1160,
        rating: 4.5,
        reviews: 65
    },
    {
        id: 3,
        image: bs3,
        name: "RGB liquid CPU Cooler",
        price: 160,
        originalPrice: 170,
        rating: 4.5,
        reviews: 65
    },
    {
        id: 4,
        image: bs4,
        name: "Small BookSelf",
        price: 360,
        originalPrice: 400,
        rating: 5,
        reviews: 65
    } 
]


const ExploreOurProducts = [
    {
        id: 1,
        image: product1,
        name: "Breed Dry Dog Food",
        price: 100,
        originalPrice: 220,
        discount: 120,
        rating: 3,
        reviews: 35
    }, 
    {
        id: 2,
        image: product2,
        name: "CANON EOS DSLR Camera",
        price: 360,
        originalPrice: 400,
        discount: 40,
        rating: 4,
        reviews: 95
    },
    {
        id: 3,
        image: product3,
        name: "ASUS FHD Gaming Laptop",
        price: 700,
        originalPrice: 750,
        discount: 50,
        rating: 5,
        reviews: 325
    },
    {
        id: 4,
        image: product4,
        name: "Curology Product Set ",
        price: 500,
        originalPrice: 520,
        discount: 20,
        rating: 4,
        reviews: 145
    },
    {
        id: 5,
        image: product5,
        name: "Kids Electric Car",
        price: 960,
        originalPrice: 1000,
        discount: 40,
        rating: 5,
        reviews: 65
    }, 
    {
        id: 6,
        image: product6,
        name: "Jr. Zoom Soccer Cleats",
        price: 1160,
        originalPrice: 1360,
        discount: 200,
        rating: 5,
        reviews: 35
    },
    {
        id: 7,
        image: product7,
        name: "GP11 Shooter USB Gamepad",
        price: 660,
        originalPrice: 710,
        discount: 70,
        rating: 4.5,
        reviews: 55
    },
    {
        id: 8,
        image: product8,
        name: "Quilted Satin Jacket",
        price: 660,
        originalPrice: 710,
        discount: 70,
        rating: 4.5,
        reviews: 55
    } 
]

export const FlashSalesProduct = () => {
    return(
        <>
            {/* <div className="product-container"> */}
                {
                    FlashSales.map(product => (
                        <SaleProduct key={product.id} product={product}  />
                    ))
                }
            {/* </div> */}
        </>
    )
}


export const BestSellingProductsProducts = () => {
    return(
        <>
            {/* <div className="product-container"> */}
                {
                    BestSellingProducts.map(product => (
                        <BestSellingProduct key={product.id} product={product}  />
                    ))
                }
            {/* </div> */}
        </>
    )
}


export const ExploreOurProductsProducts = () => {
    return(
        <>
            {/* <div className="product-container"> */}
                {
                    ExploreOurProducts.map(product => (
                        <CartProduct key={product.id} product={product}  />
                    ))
                }
            {/* </div> */}
        </>
    )
}

const Product = () => {
    return(
        <>
            {/* <div className="product-container"> */}
                {
                    ExploreOurProducts.map(product => (
                        <CartProduct key={product.id} product={product}  />
                    ))
                }
            {/* </div> */}
        </>
    )
}

export default Product;