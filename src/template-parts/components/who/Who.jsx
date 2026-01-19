import "./who.scss";
import img from "../../../images/who/who-we-are.jpg";

const Who = () => {
  return (
    <section className="who">
      <div className="who__container">
        <div className="who__content">
          <div className="who__label">Who we are</div>
          <div className="who__row">
            <div className="who__col">
              <h2>Goal focussed</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="who__col">
              <h2>Continuous improvement</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <img src={img} alt="Who we are" draggable="false" className="who__image" />
      </div>
    </section>
  );
};

export default Who;
