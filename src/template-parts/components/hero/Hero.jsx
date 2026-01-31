import "./hero.scss";
import { Link } from "react-router-dom";

const Hero = ({
  className = "",
  label,
  title,
  description,
  image,
  buttons = [],
}) => {
  const hasContent = title || description || image || buttons.length;

  if (!hasContent) return null;

  return (
    <section className={`hero ${className}`}>
      <div className="hero__container">
        {(title || description || buttons.length) && (
          <div className="hero__col">
            {label && <span className="hero__label">{label}</span>}

            {title && <h1 className="hero__title">{title}</h1>}

            {description && <p className="hero__description">{description}</p>}

            {buttons.length > 0 && (
              <div className="hero__buttons">
                {buttons.map((btn, index) => {
                  const classNames = `button ${btn.className || ""}`;

                  return btn.to ? (
                    <Link key={index} to={btn.to} className={classNames}>
                      {btn.label}
                      {btn.icon && btn.icon}
                    </Link>
                  ) : (
                    <button
                      key={index}
                      className={classNames}
                      onClick={btn.onClick}
                      type={btn.type || "button"}
                    >
                      {btn.label}
                      {btn.icon && btn.icon}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {image && (
          <img
            className="hero__image"
            src={image.src}
            alt={image.alt || "Hero image"}
            draggable={false}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
