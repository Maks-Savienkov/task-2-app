import './Card.css'
import React, {Children} from "react";

const Card = ({variant, ico_src, iconAlt, heading, children, name, position}) => {
    if (variant === "block-card") {
        return (
            <div className="block-card">
                <img className="block-card__ico" src={ico_src} alt={iconAlt}/>
                <h4 className="block-card__title">
                    {heading}
                </h4>
                <p className="block-card__desc">
                    {children}
                </p>
            </div>
        )
    }
    else if (variant === "block-card_grey") {
        return (
            <div className="block-card block-card_backcolor-grey">
                <img src={ico_src} alt={iconAlt} className="block-card__ico"/>
                <h4 className="block-card__title">
                    {heading}
                </h4>
                <p className="block-card__desc">
                    {children}
                </p>
            </div>
        )
    }
    else if (variant === "business-card") {
        return (
            <div className="business-card">
                <div className="business-card__ico-block">
                    <img src={ico_src} alt={iconAlt} className="business-card__ico"/>
                </div>
                <h3 className="business-card__name">
                    {name}
                </h3>
                <h4 className="business-card__position">
                    {position}
                </h4>
            </div>
        )
    }
    else {
        return (
            <div className="card">
                <img className="card__pic" src={ico_src} alt={iconAlt}/>
                <h3 className="card__title">
                    {heading}
                </h3>
                <p className="card__desc">
                    {children}
                </p>
            </div>
        )
    }
}

export default Card;