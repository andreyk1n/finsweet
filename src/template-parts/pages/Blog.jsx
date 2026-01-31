import { posts } from "../../data/posts";
import BlogSection from "../components/blog/BlogSection";

const Blog = () => {
    return ( 
        <>
        <BlogSection posts={posts} />
        </>
     );
}
 
export default Blog;