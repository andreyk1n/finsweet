import { useParams } from "react-router-dom";
import { posts } from "../../../data/posts";

import "./single.scss";

const Post = () => {
  const { id } = useParams();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <article className="post">
      <img
        src={`/images/blog${post.image}`}
        alt={post.title}
        className="post__image"
      />

      <h1 className="post__title">{post.title}</h1>

      <div className="post__meta">
        <span>{post.date}</span>
      </div>

      <div className="post__content">
        {post.content
          .split("\n")
          .filter((p) => p.trim() !== "")
          .map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>
    </article>
  );
};

export default Post;
