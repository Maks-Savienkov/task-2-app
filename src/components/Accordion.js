import './Accordion.css'
import {faqData} from '../data/faq-data'
import AccordionItem from "./AccordionItem";
import {useState} from "react";
import React from "react";

const Accordion = () => {
    const [selected,setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null);
        }
        else {
            setSelected(i);
        }
    }

    return (
        <div className="accordion">
            {faqData.map((item) =>
                <AccordionItem
                    key={item.id}
                    id={item.id + 1}
                    question={item.question}
                    answer={item.answer}
                    toggle={toggle}
                    opened={selected}/>
            )}
        </div>
    )
}

export default Accordion;