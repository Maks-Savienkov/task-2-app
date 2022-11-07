import './TwoSideSection.css'
import React from "react";

const TwoSideSection = (props) => {
    return <section className={props.className}>
        <div className="two-side-section-container wrapper">
            {props.children}
        </div>
    </section>
}

export default TwoSideSection;