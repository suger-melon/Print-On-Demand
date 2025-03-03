import React from "react";
import './styles.scss'

// images
import product5 from './../../assets/products/product5.png'
import love from './../../assets/love.svg'
import view from './../../assets/view.svg'
import fullStar from './../../assets/full-star.svg'
import halfStart from './../../assets/half-star.svg'
import emptyStart from './../../assets/empty-star.svg'

const NewProduct = () => {
    return(
            <>
                <div className="NewProduct">
                    <div className="NewProduct-image">
                        <div className="sproduct">
                            <img src={product5} alt="car" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="percentage">
                                NEW
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
                    <div className="NewProduct-text">
                        <h5 className="mt-2">Kids Electric Car</h5>
                        <p className="m-0">
                            <span className="actual-price">$960</span>
                            <span>
                                <img src={fullStar} alt="star" />
                                <img src={fullStar} alt="star" />
                                <img src={fullStar} alt="star" />
                                <img src={fullStar} alt="star" />
                                <img src={fullStar} alt="star" />
                                <span className="ms-2 text-secondary">(65)</span>
                            </span>
                        </p>

                        <div className="circle mt-2 d-flex gap-1">
                            <div className="selected-circle"></div>
                            <div className="unselected-circle"></div>
                        </div>
                        
                        
                    </div>
                </div>
            </>
        )
}

export default NewProduct;