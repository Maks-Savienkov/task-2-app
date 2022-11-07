import './Card.css'
import React, {Children} from "react";
import Button from "./Button";

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
                    <div className="business-card__hover">
                        <div className="business-card__socials">
                            <Button variant="text" href="#">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_759_562)">
                                        <path d="M13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 9.74429 2.37694 12.4334 5.48438 12.921V8.37891H3.83398V6.5H5.48438V5.06797C5.48438 3.43891 6.45481 2.53906 7.93952 2.53906C8.65046 2.53906 9.39453 2.66602 9.39453 2.66602V4.26562H8.57492C7.7675 4.26562 7.51563 4.76671 7.51563 5.28125V6.5H9.31836L9.03018 8.37891H7.51563V12.921C10.6231 12.4334 13 9.74429 13 6.5Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_759_562">
                                            <rect width="13" height="13" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Button>
                            <Button variant="text" href="#">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_759_564)">
                                        <path d="M4.33967 11.7816C9.24412 11.7816 11.9274 7.71736 11.9274 4.1939C11.9274 4.07965 11.9249 3.96285 11.9198 3.84859C12.4418 3.47111 12.8922 3.00353 13.25 2.46785C12.7639 2.68414 12.2477 2.8254 11.7192 2.8868C12.2757 2.55322 12.6924 2.02919 12.892 1.41185C12.3685 1.72212 11.7959 1.94098 11.1989 2.05906C10.7967 1.63166 10.2649 1.34867 9.68566 1.25384C9.10646 1.15901 8.51215 1.25763 7.99461 1.53445C7.47707 1.81127 7.06514 2.25086 6.8225 2.78527C6.57986 3.31969 6.52002 3.91915 6.65225 4.49098C5.59218 4.43778 4.55513 4.1624 3.60832 3.6827C2.66151 3.203 1.82608 2.52968 1.15619 1.70639C0.815716 2.2934 0.711531 2.98804 0.864808 3.64911C1.01809 4.31019 1.41733 4.8881 1.98139 5.26539C1.55792 5.25195 1.14374 5.13793 0.773047 4.93277V4.96578C0.772668 5.58181 0.985636 6.17896 1.37575 6.65573C1.76587 7.1325 2.30905 7.45945 2.91297 7.58101C2.5207 7.68834 2.10899 7.70398 1.70971 7.62672C1.88012 8.15651 2.21169 8.61988 2.65813 8.95216C3.10457 9.28444 3.64361 9.46905 4.20002 9.48023C3.2554 10.2222 2.08851 10.6247 0.887305 10.6228C0.674281 10.6225 0.461466 10.6094 0.25 10.5837C1.4703 11.3666 2.88983 11.7824 4.33967 11.7816Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_759_564">
                                            <rect width="13" height="13" fill="white" transform="translate(0.25)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Button>
                            <Button variant="text" href="#">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_759_566)">
                                        <path d="M12.5377 0H1.45977C0.929102 0 0.5 0.418945 0.5 0.936914V12.0605C0.5 12.5785 0.929102 13 1.45977 13H12.5377C13.0684 13 13.5 12.5785 13.5 12.0631V0.936914C13.5 0.418945 13.0684 0 12.5377 0ZM4.35684 11.0779H2.42715V4.87246H4.35684V11.0779ZM3.39199 4.02695C2.77246 4.02695 2.27227 3.52676 2.27227 2.90977C2.27227 2.29277 2.77246 1.79258 3.39199 1.79258C4.00898 1.79258 4.50918 2.29277 4.50918 2.90977C4.50918 3.52422 4.00898 4.02695 3.39199 4.02695ZM11.5779 11.0779H9.65078V8.06152C9.65078 7.34297 9.63809 6.41621 8.64785 6.41621C7.64492 6.41621 7.49258 7.20078 7.49258 8.01074V11.0779H5.56797V4.87246H7.41641V5.72051H7.4418C7.69824 5.23301 8.32793 4.71758 9.26484 4.71758C11.2174 4.71758 11.5779 6.00234 11.5779 7.67305V11.0779Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_759_566">
                                            <rect width="13" height="13" fill="white" transform="translate(0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Button>
                        </div>
                    </div>
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