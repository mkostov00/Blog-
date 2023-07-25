import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../context/BlogPostProvider";

const PostDetail = () => {
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState<IPost>();

  // useEffect(() => {
  //   const ourPost = posts.find((post) => post._id === Number(postId));
    
  //   setCurrentPost(ourPost);
  // }, []);

  return (
    <div>
      <h1>{currentPost?.title}</h1>
      <h1>{currentPost?.description}</h1>
      <p>Post ID: {postId}</p>
    </div>
  );
};

export default PostDetail;
