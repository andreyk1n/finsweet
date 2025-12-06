import image from "../../../images/hero/image.svg";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__col">
          <h1 className="hero__title">
            Building stellar websites for early startups
          </h1>
          <p className="hero__description">
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>
          <div className="hero__buttons">
            <button className="button button--yellow">View our work</button>
            <button className="button button--arrow">
              View Pricing{" "}
              <svg
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5303 6.05377C24.8232 5.76087 24.8232 5.286 24.5303 4.99311L19.7574 0.220137C19.4645 -0.0727568 18.9896 -0.0727568 18.6967 0.220137C18.4038 0.51303 18.4038 0.987904 18.6967 1.2808L22.9393 5.52344L18.6967 9.76608C18.4038 10.059 18.4038 10.5338 18.6967 10.8267C18.9896 11.1196 19.4645 11.1196 19.7574 10.8267L24.5303 6.05377ZM0 6.27344H24V4.77344H0V6.27344Z"
                  fill="#F4F6FC"
                />
              </svg>
            </button>
          </div>
        </div>
        <img src={image} alt="Hero image" draggable="false" />
      </div>
    </section>
  );
};

export default Hero;
