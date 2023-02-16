import React, { useState } from "react";
import './accordion.css'

interface AccordionProps {
  title: string;
  children: string;
  className?: string
}

export const AccordionItem = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button className="accordion__header" onClick={handleToggle}>
        {props.title}
      </button>
      {isOpen && (
        <div className="accordion__body">{props.children}</div>
      )}
    </div>
  );
};
