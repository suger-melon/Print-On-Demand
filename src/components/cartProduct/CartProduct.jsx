import React from "react";
import './styles.scss'

// images
import bsproduct2 from './../../assets/products/bsproduct2.png'
import love from './../../assets/dustbin.svg'
import cart from './../../assets/cart-white.svg'
import fullStar from './../../assets/full-star.svg'
import halfStart from './../../assets/half-star.svg'
import emptyStart from './../../assets/empty-star.svg'

const CartProduct = () => {
    return(
            <>
                <div className="CartProduct">
                    <div className="CartProduct-image">
                        <div>
                            <div className="sproduct">
                                <img src={bsproduct2} alt="game controller" />
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-end image-content">
                            <div className="d-flex justify-content-between h-100 p-2">
                                <div className="percentage">
                                    - 35%
                                </div>
                                <div className="image-icon-parent">
                                    <div className="image-icon">
                                        <img src={love} alt="love" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-cart">
                                <img src={cart} alt="cart" />
                                <p className="m-0">Add To Cart</p>
                            </div>
                        </div>
                    </div>
                    <div className="CartProduct-text">
                        <h5 className="mt-2">Gucci duffle bag</h5>
                        <p className="mb-2">
                            <span className="actual-price">$960</span>
                            <span className="text-secondary text-decoration-line-through">$1160</span>
                        </p>
                         
                    </div>
                </div>
            </>
        )
}

export default CartProduct;