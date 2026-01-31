import { Link } from "react-router-dom";

const FeaturedPost = ({ post }) => {
  const imageSrc = `/images/blog${post.image}`;

  return (
    <article className="featured">
      <h1 className="featured__title">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h1>
      <p className="featured__meta">
        {post.author} · {post.date}
      </p>

      <Link to={`/post/${post.id}`} className="featured__image-link">
        <img
          src={imageSrc}
          alt={post.title}
          className="featured__image"
          loading="lazy"
        />
      </Link>

      <div className="featured__content">
        <p className="featured__excerpt">{post.summary}</p>

        <Link to={`/post/${post.id}`} className="featured__link">
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default FeaturedPost;
