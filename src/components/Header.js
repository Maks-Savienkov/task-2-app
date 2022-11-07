import Logo from "./Logo";
import Nav from "./Nav";
import './Header.css';
import React from "react";


const Header = (props) => {
    return <header className="header">
        <div className="wrapper header_wrapper">
            <Logo/>
            <Nav className = "navigation_with-button"/>
        </div>
    </header>
}

export default Header;