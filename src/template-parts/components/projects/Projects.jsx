import { NavLink, Link } from "react-router-dom";
import img1 from "../../../images/projects/project_1.jpg";
import img2 from "../../../images/projects/project_2.jpg";
import img3 from "../../../images/projects/project_3.jpg";
import arrow from "../../../images/projects/arrow.svg";
import "./projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__head">
          <h2>View our projects</h2>
          <Link to="/projects" className="projects__link">
            View More{" "}
            <svg
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5303 6.05377C24.8232 5.76087 24.8232 5.286 24.5303 4.99311L19.7574 0.220137C19.4645 -0.0727568 18.9896 -0.0727568 18.6967 0.220137C18.4038 0.51303 18.4038 0.987904 18.6967 1.2808L22.9393 5.52344L18.6967 9.76608C18.4038 10.059 18.4038 10.5338 18.6967 10.8267C18.9896 11.1196 19.4645 11.1196 19.7574 10.8267L24.5303 6.05377ZM0 6.27344H24V4.77344H0V6.27344Z"
                fill="#282938"
              />
            </svg>
          </Link>
        </div>
        <div className="projects__items">
          <Link to="/project_1" className="projects__item projects__item-big">
            <img src={img1} alt="Project preview" draggable="false" />
            <div className="projects__item-info">
              <p className="projects__item-info-title">
                Workhub office Webflow Webflow Design
              </p>
              <p className="projects__item-info-subtitle">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam{" "}
              </p>
              <Link to="/project_1" className="projects__item-link">
                View project <img src={arrow} alt="Arrow" className="projects__icon" />
              </Link>
            </div>
          </Link>
          <Link to="/project_2" className="projects__item">
            <img src={img2} alt="Project preview" draggable="false" />
            <div className="projects__item-info">
              <p className="projects__item-info-title">Unisaas Website Design</p>
              <Link to="/project_2" className="projects__item-link">
                View project <img src={arrow} alt="Arrow" className="projects__icon" />
              </Link>
            </div>
          </Link>
          <Link to="/project_3" className="projects__item">
            <img src={img3} alt="Project preview" draggable="false" />
            <div className="projects__item-info">
              <p className="projects__item-info-title">Project title</p>
              <Link to="/project_3" className="projects__item-link">
                View project <img src={arrow} alt="Arrow" className="projects__icon" />
              </Link>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
