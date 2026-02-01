import { Link } from "react-router-dom";
import "./price.scss";

const Price = () => {
  return (
    <div className="price">
      <div className="price__container">
        <h1 className="price__title">Our Pricing Plans</h1>
        <p className="price__description">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>

        <div className="price__cards">
          <div className="price__card price__card--light">
            <div className="price__card-header">
              <div>
                <span className="price__card-price">$299</span>
                <span className="price__card-period">Per Design</span>
              </div>
              <h3 className="price__card-title">Landing Page</h3>
              <p className="price__card-subtitle">
                When you’re ready to go beyond prototyping in Figma,
              </p>
            </div>

            <ul className="price__card-features">
              <li className="price__card-feature price__card-feature--active">
                All limited links
              </li>
              <li className="price__card-feature price__card-feature--active">
                Own analytics platform
              </li>
              <li className="price__card-feature price__card-feature--active">
                Chat support
              </li>
              <li className="price__card-feature">Optimize hashtags</li>
              <li className="price__card-feature">Unlimited users</li>
            </ul>

            <div className="price__card-actions">
              <Link to="/contacts" className="price__card-button button button--black">
                Get started
              </Link>
            </div>
          </div>

          <div className="price__card price__card--featured">
            <div className="price__card-header">
              <div>
                <span className="price__card-price">$399</span>
                <span className="price__card-period">Multi Design</span>
              </div>
              <h3 className="price__card-title">Website Page</h3>
              <p className="price__card-subtitle">
                When you’re ready to go beyond prototyping in Figma, Webflow's
                ready to help.
              </p>
            </div>

            <ul className="price__card-features">
              <li className="price__card-feature price__card-feature--active">
                All limited links
              </li>
              <li className="price__card-feature price__card-feature--active">
                Own analytics platform
              </li>
              <li className="price__card-feature price__card-feature--active">
                Chat support
              </li>
              <li className="price__card-feature price__card-feature--active">
                Optimize hashtags
              </li>
              <li className="price__card-feature price__card-feature--active">
                Unlimited users
              </li>
            </ul>

            <div className="price__card-actions">
              <Link to="/contacts" className="price__card-button button button--yellow">
                Get started
              </Link>
            </div>
          </div>

          <div className="price__card price__card--light">
            <div className="price__card-header">
              <div>
                <span className="price__card-price">$499+</span>
                <span className="price__card-period">Per Design</span>
              </div>
              <h3 className="price__card-title">Complex Project</h3>
              <p className="price__card-subtitle">
                When you’re ready to go beyond prototyping in Figma,
              </p>
            </div>

            <ul className="price__card-features">
              <li className="price__card-feature price__card-feature--active">
                All limited links
              </li>
              <li className="price__card-feature price__card-feature--active">
                Own analytics platform
              </li>
              <li className="price__card-feature price__card-feature--active">
                Chat support
              </li>
              <li className="price__card-feature price__card-feature--active">
                Optimize hashtags
              </li>
              <li className="price__card-feature price__card-feature--active">
                Unlimited users
              </li>
              <li className="price__card-feature price__card-feature--active">
                Assist and Help
              </li>
            </ul>

            <div className="price__card-actions">
              <Link to="/contacts" className="price__card-button button button--black">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
