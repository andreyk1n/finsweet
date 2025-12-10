import { NavLink, Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../../images/footer/logo.svg";
import facebook from "../../../images/footer/facebook.svg";
import twitter from "../../../images/footer/twitter.svg";
import linkedin from "../../../images/footer/linkedin.svg";
import instagram from "../../../images/footer/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__col">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="Logo" />
            </Link>
            <p className="mw-400">
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div className="footer__contacts">
              <div>
                Email me at
                <a href="mailto:contact@website.com">contact@website.com</a>
              </div>
              <div>
                Call us
                <a href="tel:+0000000000000">+0000 0000 00000</a>
              </div>
            </div>
          </div>
          <div className="footer__col footer__description">
            <h2>Lets Talk!</h2>
            <p>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className="footer__socials">
              <a href="#">
                <img src={facebook} alt="Icon" />
              </a>
              <a href="#">
                <img src={twitter} alt="Icon" />
              </a>
              <a href="#">
                <img src={instagram} alt="Icon" />
              </a>
              <a href="#">
                <img src={linkedin} alt="Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__container">
          <p>Copyright 2022, Finsweet.com</p>
          <nav className="footer__nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
