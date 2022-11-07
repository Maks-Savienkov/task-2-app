import './Button.css'
import React from "react";

const Button = ({variant, href, children}) => {
    if (href !== undefined) {
        return (
            <a className={getButtonClassName(variant)}  href={href}>
                {children}
            </a>
        )
    }
    else {
        return (
            <button className={getButtonClassName(variant)}>
                {children}
            </button>
        )
    }
}

const ButtonClassNames = {
    outlined: "outlined-button",
    contained: "contained-button",
    text_blue: "text-button text-button_blue",
    text_black: "text-button text-button_black",
    text: "text-button"
}

function getButtonClassName(variant) {
    return `base-button ${ButtonClassNames[variant]}`;
}

export default Button;