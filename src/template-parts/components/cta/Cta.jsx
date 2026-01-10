import bg from "../../../images/cta/background.jpg";
import "./cta.scss";

const Cta = () => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">
            Building stellar websites for early startups
          </h2>
          <p className="cta__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
          <img src={bg} alt="Cta background image" draggable="false" />
        </div>
        <div className="cta__form">
          <h3 className="cta__form-title">Send inquiry</h3>
          <p className="cta__form-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <form className="cta__form-body">
            <div className="cta__field">
              <input
                type="text"
                className="cta__input"
                placeholder="Your Name"
              />
            </div>
            <div className="cta__field">
              <input type="email" className="cta__input" placeholder="Email" />
            </div>
            <div className="cta__field">
              <input
                type="url"
                className="cta__input"
                placeholder="Paste your Figma design URL"
              />
            </div>
            <button type="submit" className="cta__button button button--yellow">
              Send an Inquiry
            </button>
          </form>
          <button className="button button--arrow">
            Get in touch with us
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
    </section>
  );
};

export default Cta;
