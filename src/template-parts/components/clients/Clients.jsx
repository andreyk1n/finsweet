import { useState } from "react";
import img1 from "../../../images/cards/1.svg";
import img2 from "../../../images/cards/2.svg";
import img3 from "../../../images/cards/3.svg";
import "./clients.scss";

const slides = [
  {
    text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    name: "Jenny Wilson",
    role: "Vice President",
    img: img1,
  },
  {
    text: "A truly outstanding experience. The team delivered everything on time and exceeded our expectations.",
    name: "Robert Fox",
    role: "CTO",
    img: img2,
  },
  {
    text: "Professional, creative, and very responsive. Highly recommend working with them.",
    name: "Leslie Alexander",
    role: "Product Manager",
    img: img3,
  },
];

const Clients = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (direction) => {
    setFade(false);

    setTimeout(() => {
      setIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % slides.length;
        }
        return (prev - 1 + slides.length) % slides.length;
      });
      setFade(true);
    }, 200);
  };

  const current = slides[index];

  return (
    <section className="clients">
      <div className="clients__container">
        <div className="clients__text">
          <h2>What our clients say about us</h2>
          <p className="clients__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>

        <div className="clients__slider">
          <div className={`clients__slide ${fade ? "is-visible" : ""}`}>
            <p>"{current.text}"</p>

            <div className="clients__slide-info">
              <img
                src={current.img}
                alt={current.name}
                className="clients__slide-avatar"
              />
              <div>
                <span>{current.name}</span>
                {current.role}
              </div>
            </div>
          </div>
        </div>

        <div className="clients__buttons">
          <button onClick={() => changeSlide("prev")}>prev</button>
          <button onClick={() => changeSlide("next")}>next</button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
