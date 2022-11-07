import './NewsCard.css';
import React from "react";

const NewsCard = ({img_url, img_alt, date, title, desc, link}) => {
    return (
        <div className="news-card">
            <img src={img_url} alt={img_alt} className="news__image"/>
            <p className="news__date">
                {date}
            </p>
            <h3 className="news__title">
                {title}
           </h3>
            <p className="news__desc">
                {desc}
            </p>
            <a href={link} className="news__link">
                Read More
                <img src="img/svg/arrow-black.svg" alt="Arrow"/>
            </a>
        </div>
    )
}

export default NewsCard;