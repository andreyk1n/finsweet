import "./single-work.scss";

const SingleWork = ({ work }) => {
  return (
    <section className="single-work">
      <div className="single-work__container">
        <h1 className="single-work__title">{work.title}</h1>

        <p className="single-work__description">{work.description}</p>

        <div className="single-work__image-wrapper">
          <img
            src={work.image}
            alt={work.title}
            className="single-work__image"
          />
        </div>

        <div className="single-work__content">
          {work.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleWork;
