import { Link } from "react-router-dom";
import { works } from "../../../data/works";
import "./works.scss";

const Works = () => {
  const sortedWorks = [...works].sort((a, b) => b.id - a.id);

  return (
    <section className="works">
      <div className="works__container">
        <div className="works__grid">
          {sortedWorks.map((work) => (
            <div key={work.id} className="works__item">
              <Link to={`/work/${work.id}`} className="works__image-link">
                <img
                  src={work.image}
                  alt={work.title}
                  className="works__image"
                  draggable="false"
                />
              </Link>
              <div className="works__content">
                <h3 className="works__item-title">
                  <Link to={`/work/${work.id}`}>{work.title}</Link>
                </h3>
                <p className="works__item-description">{work.description}</p>
                <Link to={`/work/${work.id}`} className="works__item-link">
                  View portfolio →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
