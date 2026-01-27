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

        <div className="price__items">
          <div className="price__card price__card--light">
            <div className="price__card-header">
              <span className="price__card-price">$299</span>
              <span className="price__card-period">Per Design</span>
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
              <button className="price__card-button">Get started</button>
            </div>
          </div>

          <div className="price__card price__card--featured">
            <div className="price__card-header">
              <span className="price__card-price">$399</span>
              <span className="price__card-period">Multi Design</span>
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
              <button className="price__card-button price__card-button--accent">
                Get started
              </button>
            </div>
          </div>

          <div className="price__card price__card--light">
            <div className="price__card-header">
              <span className="price__card-price">$499+</span>
              <span className="price__card-period">Per Design</span>
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
              <button className="price__card-button">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
