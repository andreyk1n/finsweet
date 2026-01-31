import useDocumentMeta from "../components/useDocumentMeta/useDocumentMeta.js";
import { posts } from "../../data/posts";
import BlogSection from "../components/blog/BlogSection";

const Blog = () => {
  useDocumentMeta({
    title: "Finsweet | Our blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });
  return (
    <>
      <BlogSection posts={posts} />
    </>
  );
};

export default Blog;
