import FeaturedPost from "./FeaturedPost";
import BlogCard from "./BlogCard";
import "./blog.scss";

const BlogSection = ({ posts }) => {
  if (!posts || !posts.length) return null;

  const [featured, ...rest] = posts;

  return (
    <section className="blog">
      <div className="blog__container">
        <FeaturedPost post={featured} />
        <h2 className="blog__title">Our Blog</h2>

        <div className="blog__grid">
          {rest.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
