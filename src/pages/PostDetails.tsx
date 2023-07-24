import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext, IPost } from "../context/BlogPostProvider";

const PostDetail = () => {
  const { posts } = useContext(BlogContext);
  
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState<IPost>();

  useEffect(() => {
    const ourPost = posts.find((post) => post.id === Number(postId));
    console.log(typeof(postId));
    
    setCurrentPost(ourPost);

  }, []);

  return (
    <div>
      <h1>{currentPost?.title}</h1>
      <h1>{currentPost?.description}</h1>
      <p>Post ID: {postId}</p>
      {/* Add more post details here */}
    </div>
  );
};

export default PostDetail;
