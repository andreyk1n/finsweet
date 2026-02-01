import { Link } from "react-router-dom";
import { works } from "../../../data/works";
import "./works.scss";

const Works = () => {
  const sortedWorks = [...works].sort((a, b) => b.id - a.id);

  return (
    <section className="works">
      <div className="works__container">
        <h1 className="works__title">Our Work</h1>

        <div className="works__grid">
          {sortedWorks.map((work) => (
            <Link key={work.id} to={`/work/${work.id}`} className="works__item">
              <div className="works__image-wrapper">
                <img
                  src={work.image}
                  alt={work.title}
                  className="works__image"
                  draggable="false"
                />
              </div>

              <div className="works__content">
                <h3 className="works__item-title">{work.title}</h3>
                <p className="works__item-description">{work.description}</p>

                <span className="works__item-link">View portfolio →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
