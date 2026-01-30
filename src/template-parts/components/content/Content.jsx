import "./content.scss";

const Content = ({ rows = [], className = "", reverse = false }) => {
    return (
        <div className={`content ${className}`}>
            <div className="content__container">
                {rows.map((row, index) => {
                    const {
                        rowClass = "",
                        image,
                        label,
                        title,
                        text,
                    } = row;

                    const isReverse = reverse || row.reverse;

                    return (
                        <div
                            key={row.id ?? index}
                            className={`content__row ${rowClass}`}
                        >
                            {!isReverse && (
                                <div className="content__col">
                                    <p className="content__label">{label}</p>
                                    <h2 className="content__title">{title}</h2>
                                    <p className="content__text">{text}</p>
                                </div>
                            )}

                            <img
                                src={image.src}
                                alt={image.alt || "Content image"}
                                draggable="false"
                                className="content__image"
                            />

                            {isReverse && (
                                <div className="content__col">
                                    <p className="content__label">{label}</p>
                                    <h2 className="content__title">{title}</h2>
                                    <p className="content__text">{text}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default Content;
