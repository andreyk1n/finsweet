import img1 from "../../../images/cards/1.svg";
import img2 from "../../../images/cards/2.svg";
import img3 from "../../../images/cards/3.svg";
import img4 from "../../../images/cards/4.svg";
import img5 from "../../../images/cards/5.svg";
import img6 from "../../../images/cards/6.svg";
import "./cards.scss";
const iconsMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
};

const Cards = ({
  className = "",
  label,
  title,
  items = [],
}) => {
  if (!items.length) return null;
  return (
    <section className={`cards ${className}`}>
      <div className="cards__container">
        {label && <span className="cards__label">{label}</span>}
        {title && <h2 className="cards__title">{title}</h2>}
        <div className="cards__items">
          {items.map((item, index) => {
            const iconSrc = iconsMap[item.icon];
            return (
              <div className="cards__item" key={index}>
                {iconSrc && (
                  <img
                    src={iconSrc}
                    alt={item.iconAlt || "Cards item icon"}
                    draggable="false"
                    className="cards__item-icon"
                  />
                )}
                {item.title && (
                  <h3 className="cards__item-title">{item.title}</h3>
                )}
                {item.text && (
                  <p className="cards__item-text">{item.text}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
