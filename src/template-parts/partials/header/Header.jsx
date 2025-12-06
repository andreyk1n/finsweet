import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../../images/header/logo.svg'; 
import './header.scss';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  const width = useWindowWidth();
  const isMobile = width < 992;

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuActive &&
        navRef.current &&
        burgerRef.current &&
        !navRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuActive]);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Header logo" />
        </Link>

        <div
          className={`header__burger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
          ref={burgerRef}
        >
          <span></span>
        </div>

        <nav
          className={`header__nav ${menuActive ? "active" : ""}`}
          ref={navRef}
        >
          <NavLink
            className="header__link"
            to="/about"
            onClick={handleLinkClick}
          >
            About Us
          </NavLink>
          <NavLink
            className="header__link"
            to="/courses"
            onClick={handleLinkClick}
          >
            Courses
          </NavLink>
          <NavLink
            className="header__link"
            to="/events"
            onClick={handleLinkClick}
          >
            Events
          </NavLink>
          <NavLink
            className="header__link"
            to="/blog"
            onClick={handleLinkClick}
          >
            Blog
          </NavLink>
          <NavLink
            className="header__link"
            to="/contacts"
            onClick={handleLinkClick}
          >
            Contacts
          </NavLink>

          {isMobile && (
            <div className="header__buttons">
              <button className="button">
                Contact us
              </button>
            </div>
          )}
        </nav>

        {!isMobile && (
          <div className="header__buttons">
            <button className="button">Contact us</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;