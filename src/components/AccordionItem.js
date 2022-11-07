import './AccordionItem.css'
import React from "react";

const AccordionItem = ({id, question, answer, toggle, opened}) => {
    return (
        <div className="item" onClick={() => toggle(id)}>
            <div className="item__number">0{id}</div>
            <div className="item__content">
                <div className="item-heading">
                    <h2 className="item__title">
                        {question}
                    </h2>
                    <img src="img/svg/+.svg" alt="+" className="item__cross-icon"/>
                </div>
                <div className={(opened === id ? "show " : "") + "item__answer"}>
                    {answer}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;