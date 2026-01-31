import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const imageSrc = `/images/blog${post.image}`;

  return (
    <article className="blog-card">
      <Link to={`/post/${post.id}`} className="blog-card__image-link">
        <img
          src={imageSrc}
          alt={post.title}
          className="blog-card__image"
          loading="lazy"
          draggable="false"
        />
      </Link>

      <div className="blog-card__content">
        <span className="blog-card__date">{post.date}</span>

        <h3 className="blog-card__title">
          <Link to={`/post/${post.id}`}>
            {post.title}
          </Link>
        </h3>

        <p className="blog-card__excerpt">
          {post.summary}
        </p>

        <Link
          to={`/post/${post.id}`}
          className="blog-card__link"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
