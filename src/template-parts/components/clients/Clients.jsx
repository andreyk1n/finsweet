import { useState } from "react";
import img1 from "../../../images/clients/client1.jpg";
import img2 from "../../../images/clients/client1.jpg";
import img3 from "../../../images/clients/client1.jpg";
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
          <h2 className="mini">What our clients say about us</h2>
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
                draggable="false"
              />
              <div>
                <span>{current.name}</span>
                {current.role}
              </div>
            </div>
          </div>
        </div>

        <div className="clients__buttons">
          <button className="clients__button clients__button--prev" onClick={() => changeSlide("prev")}>
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M11.5859 -1.23626e-07L13 3.21951L3.96947 10.9106L13 18.7805L11.5859 22L9.06922e-07 11.626L1.06329e-06 9.8374L11.5859 -1.23626e-07Z"
                fill=""
              />
            </svg>
          </button>
          <button className="clients__button clients__button--next" onClick={() => changeSlide("next")}>
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41412 22L0 18.7805L9.03053 11.0894L0 3.21951L1.41412 0L13 10.374V12.1626L1.41412 22Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
