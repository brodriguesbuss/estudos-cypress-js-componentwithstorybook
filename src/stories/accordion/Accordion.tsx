import { props } from "cypress/types/bluebird"
import React from "react"
import { AccordionItem } from "./AccordionItem"

interface AccordionProps {

    items: {
        title: string
        content: string
    }[]
}

const Accordion: React.FC<AccordionProps> = (props) => {

    const { items } = props;
    // export const Accordion = ({ items, className}: AccordionProps ) => {
    return (
        <ul>
            {items?.map(({ title, content }) => (
                <AccordionItem
                    title={title}
                    children={content}
                />
            ))}
        </ul>
    );

};

export default Accordion