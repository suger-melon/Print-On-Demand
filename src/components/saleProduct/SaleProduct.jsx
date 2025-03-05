import React from "react";
import './styles.scss'

// images
import sale1 from './../../assets/products/sale1.png'
import love from './../../assets/love.svg'
import view from './../../assets/view.svg'
import fullStar from './../../assets/full-star.svg'
import halfStart from './../../assets/half-star.svg'
import emptyStart from './../../assets/empty-star.svg'

const SaleProduct = ({ product }) => {
    const { name, image, price, originalPrice, discount, rating, reviews } = product

    const renderStar = (rating) => {
        const star = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0
        const emptyStar = 5 - fullStars - (hasHalfStar? 1: 0)

        for(let i=0; i<fullStars; i++) star.push(<img key={i} src={fullStar} alt="star" />)
        if(hasHalfStar) star.push(<img key="half" src={halfStart} alt="star" />)
        for(let i=0; i<emptyStar; i++) star.push(<img key={`empty-${i}`} src={emptyStart} alt="star" />)

        console.log(name)

        return star
    }

    return(
        <>
            <div className="saleProduct">
                <div className="saleProduct-image">
                    <div className="sproduct">
                        <img src={image} alt="game controller" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="percentage">
                            {discount}
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
                    <h5 className="mt-2">{name}</h5>
                    <p className="mb-2">
                        <span className="actual-price">${price}</span>
                        <span className="text-secondary text-decoration-line-through">${originalPrice}</span>
                    </p>
                    
                    <div>
                        {
                            renderStar(rating)
                        }
                        <span className="ms-2 text-secondary">({reviews})</span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default SaleProduct;