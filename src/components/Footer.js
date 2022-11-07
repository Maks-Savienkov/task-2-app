import Logo from "./Logo";
import Nav from "./Nav";
import React from "react";

const Footer = (props) => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="wrapper">
                <div className="footer-content__wrap">
                    <div className="logo-container">
                        <div className="footer-logo">
                            <Logo/>
                        </div>
                        <div className="logo__subtitle">
                            We are always open to discuss your project and improve your online presence.
                        </div>
                    </div>
                    <div className="lets-talk">
                        <h3 className="section__title lets-talk__title">
                            Lets talk!
                        </h3>
                        <p className="lets-talk__desc">
                            We are always open to discuss your project, improve your online presence and help with your
                            UX/UI design challenges.
                        </p>
                        <div className="social-media-icons">
                            <div className="social-media-icon">
                                <a href="./index.html" className="social-media-icon__link">
                                    <img className="social-media-icon__ico"
                                         src="img/svg/social-media-icons/Facebook/Negative.svg" alt="Facebook"/>
                                </a>
                            </div>
                            <div className="social-media-icon">
                                <a href="./index.html" className="social-media-icon__link">
                                    <img className="social-media-icon__ico"
                                         src="img/svg/social-media-icons/Twitter/Negative.svg" alt="Twitter"/>
                                </a>
                            </div>
                            <div className="social-media-icon">
                                <a href="https://instagram.com/flumine.li" className="social-media-icon__link">
                                    <img className="social-media-icon__ico"
                                         src="img/svg/social-media-icons/Instagram/Negative.svg" alt="Instagram"/>
                                </a>
                            </div>
                            <div className="social-media-icon">
                                <a href="./index.html" className="social-media-icon__link">
                                    <img className="social-media-icon__ico"
                                         src="img/svg/social-media-icons/LinkedIn/Negative.svg" alt="LinkedIn"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="email-info">
                        <h2 className="contact-info__title">
                            Email me at
                        </h2>
                        <p className="contact-info__subtitle">
                            contact@website.com
                        </p>
                    </div>
                    <div className="call-info">
                        <h2 className="contact-info__title">
                            Call Us
                        </h2>
                        <p className="contact-info__subtitle">
                            0927 6277 28525
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__links">
            <div className="wrapper footer-links__wrap">
                <p className="copyright-info">
                    Copyright 2021, Finsweet.com
                </p>
                <Nav className = "navigation_negative"/>
            </div>
        </div>
    </footer>
}

export default Footer;