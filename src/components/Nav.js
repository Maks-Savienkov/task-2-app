import './Nav.css';
import Button from "./Button";
import React from "react";

const Nav = (props) => {
    if (props.className === "navigation_negative")
    {
        return <nav className="navigation_negative">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a href="/home" className="navigation__link_negative">Home</a>
                </li>
                <li className="navigation__item">
                    <a href="/about" className="navigation__link_negative">About us</a>
                </li>
                <li className="navigation__item">
                    <a href="/features" className="navigation__link_negative">Features</a>
                </li>
                <li className="navigation__item">
                    <a href="/pricing" className="navigation__link_negative">Pricing</a>
                </li>
                <li className="navigation__item">
                    <a href="/faq" className="navigation__link_negative">FAQ</a>
                </li>
                <li className="navigation__item">
                    <a href="/blog" className="navigation__link_negative">Blog</a>
                </li>
            </ul>
        </nav>
    }
    else if(props.className === "navigation_with-button")
    {
        return <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a href="/home" className="navigation__link">Home</a>
                </li>
                <li className="navigation__item">
                    <a href="/about" className="navigation__link">About us</a>
                </li>
                <li className="navigation__item">
                    <a href="/features" className="navigation__link">Features</a>
                </li>
                <li className="navigation__item">
                    <a href="/pricing" className="navigation__link">Pricing</a>
                </li>
                <li className="navigation__item">
                    <a href="/faq" className="navigation__link">FAQ</a>
                </li>
                <li className="navigation__item">
                    <a href="/blog" className="navigation__link">Blog</a>
                </li>
                <li className="navigation__item navigation__item_button">
                    <Button variant="outlined" href="#">
                        Contact Us
                    </Button>
                </li>
            </ul>
        </nav>
    }
}

export default Nav;