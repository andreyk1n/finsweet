import { useState, useRef } from "react";
import "./accordion.scss";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className={`accordion__item ${isActive ? "accordion__item--active" : ""}`}>
      <button className="accordion__header" onClick={onClick}>
        <span className="accordion__title">{title}</span>
        <span className="accordion__arrow">+</span>
      </button>

      <div
        ref={contentRef}
        className="accordion__content"
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0px"
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({
  title = "Frequently asked questions",
  description = "Contact us for more info",
  items = [],
  defaultActiveIndex = 0
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion">
      <div className="accordion__container">
        <div className="accordion__text">
          <h2 className="accordion__title">{title}</h2>
          <p className="accordion__description">{description}</p>
        </div>

        <div className="accordion__items">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isActive={activeIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
