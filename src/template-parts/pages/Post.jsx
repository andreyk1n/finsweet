import useDocumentMeta from "../components/useDocumentMeta/useDocumentMeta.js";
import Single from "../components/single/Single.jsx";
import { useParams } from "react-router-dom";
import { posts } from "../../data/posts";


const Post = () => {
  const { id } = useParams();

  const post = posts.find(p => p.id === Number(id));

  useDocumentMeta({
    title: post ? `Finsweet | ${post.title}` : "Finsweet | Post",
    description: post?.summary || "Blog post page",
  });

  if (!post) return null;
  return (
    <>
      <Single />
    </>
  );
};

export default Post;
