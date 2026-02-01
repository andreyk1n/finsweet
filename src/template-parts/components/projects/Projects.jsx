import { Link } from "react-router-dom";
import { works } from "../../../data/works";
import arrow from "../../../images/projects/arrow.svg";
import "./projects.scss";

const Projects = () => {
  const latestWorks = [...works].slice(-3).reverse();

  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__head">
          <h2>View our projects</h2>
          <Link to="/works" className="projects__link">
            View More
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
          {latestWorks.map((work, index) => (
            <Link
              key={work.id}
              to={`/work/${work.id}`}
              className={`projects__item ${
                index === 0 ? "projects__item-big" : ""
              }`}
            >
              <img
                src={work.image}
                alt={work.title}
                draggable="false"
              />

              <div className="projects__item-info">
                <p className="projects__item-info-title">
                  {work.title}
                </p>

                {index === 0 && (
                  <p className="projects__item-info-subtitle">
                    {work.description}
                  </p>
                )}

                <span className="projects__item-link">
                  View project
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="projects__icon"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
