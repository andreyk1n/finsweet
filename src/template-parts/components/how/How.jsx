import { Link } from "react-router-dom";
import img1 from "../../../images/how/1.svg";
import img2 from "../../../images/how/2.svg";
import img3 from "../../../images/how/3.svg";
import img4 from "../../../images/how/4.svg";
import "./how.scss";

const How = () => {
  return (
    <section className="how">
      <div className="how__container">
        <div className="how__text">
          <h2 className="how__title">How we work</h2>
          <p className="how__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>

          <Link to="/contacts" className="button button--arrow button--violet">
            Get in touch with us{" "}
            <svg
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5303 6.05377C24.8232 5.76087 24.8232 5.286 24.5303 4.99311L19.7574 0.220137C19.4645 -0.0727566 18.9896 -0.0727566 18.6967 0.220137C18.4038 0.51303 18.4038 0.987904 18.6967 1.2808L22.9393 5.52344L18.6967 9.76608C18.4038 10.059 18.4038 10.5338 18.6967 10.8267C18.9896 11.1196 19.4645 11.1196 19.7574 10.8267L24.5303 6.05377ZM0 5.52344V6.27344H24V5.52344V4.77344H0V5.52344Z"
                fill="#2405F2"
              />
            </svg>
          </Link>
        </div>

        <div className="how__items">
          <div className="how__item">
            <img className="how__item-icon" src={img1} alt="Counter item" draggable="false" />
            <p className="how__item-title">Strategy</p>
            <p className="how__item-text">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
            </p>
          </div>
          <div className="how__item">
            <img className="how__item-icon" src={img2} alt="Counter item" draggable="false" />
            <p className="how__item-title">Wireframing</p>
            <p className="how__item-text">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
            </p>
          </div>
          <div className="how__item">
            <img className="how__item-icon" src={img3} alt="Counter item" draggable="false" />
            <p className="how__item-title">Design</p>
            <p className="how__item-text">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
            </p>
          </div>
          <div className="how__item">
            <img className="how__item-icon" src={img4} alt="Counter item" draggable="false" />
            <p className="how__item-title">Development</p>
            <p className="how__item-text">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
