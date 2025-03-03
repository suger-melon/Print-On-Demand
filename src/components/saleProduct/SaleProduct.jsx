import React from "react";
import './styles.scss'

// images
import sale1 from './../../assets/products/sale1.png'
import love from './../../assets/love.svg'
import view from './../../assets/view.svg'
import fullStar from './../../assets/full-star.svg'
import halfStart from './../../assets/half-star.svg'
import emptyStart from './../../assets/empty-star.svg'

const SaleProduct = () => {
    return(
        <>
            <div className="saleProduct">
                <div className="saleProduct-image">
                    <div className="sproduct">
                        <img src={sale1} alt="game controller" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="percentage">
                            - 40%
                        </div>
                        <div className="image-icon-parent">
                            <div className="image-icon">
                                <img src={love} alt="love" />
                            </div>
                            <div className="image-icon">
                                <img src={view} alt="view"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="saleProduct-text">
                    <h5 className="mt-2">HAVIT HV-G92 Gamepad</h5>
                    <p className="mb-2">
                        <span className="actual-price">$120</span>
                        <span className="text-secondary text-decoration-line-through">$160</span>
                    </p>
                    
                    <div>
                        <img src={fullStar} alt="star" />
                        <img src={fullStar} alt="star" />
                        <img src={fullStar} alt="star" />
                        <img src={halfStart} alt="star" />
                        <img src={emptyStart} alt="star" />
                        <span className="ms-2 text-secondary">(88)</span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default SaleProduct;