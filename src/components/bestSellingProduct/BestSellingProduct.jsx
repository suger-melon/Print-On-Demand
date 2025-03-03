import React from "react";
import './styles.scss'

// images
import bsproduct1 from './../../assets/products/bsproduct1.png'
import love from './../../assets/love.svg'
import view from './../../assets/view.svg'
import fullStar from './../../assets/full-star.svg'
import halfStart from './../../assets/half-star.svg'
import emptyStart from './../../assets/empty-star.svg'

const BestSellingProduct = () => {
    return(
            <>
                <div className="BestSellingProduct">
                    <div className="BestSellingProduct-image">
                        <div className="sproduct">
                            <img src={bsproduct1} alt="game controller" />
                        </div>
                        <div className="w-100 d-flex justify-content-end">
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
                    <div className="BestSellingProduct-text">
                        <h5 className="mt-2">The north coat</h5>
                        <p className="mb-2">
                            <span className="actual-price">$260</span>
                            <span className="text-secondary text-decoration-line-through">$360</span>
                        </p>
                        
                        <div>
                            <img src={fullStar} alt="star" />
                            <img src={fullStar} alt="star" />
                            <img src={fullStar} alt="star" />
                            <img src={fullStar} alt="star" />
                            <img src={fullStar} alt="star" />
                            <span className="ms-2 text-secondary">(65)</span>
                        </div>
                        
                    </div>
                </div>
            </>
        )
}

export default BestSellingProduct;