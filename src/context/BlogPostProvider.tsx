import { ReactNode, createContext, useState } from "react";

export interface IPost {
  id: number;
  picture: File | null;
  title: string;
  description: string;
}
export interface IComments {
  id: number
  author: string,
  comment: string 
}

export interface IBlogPostContext {
  singlePost: IPost;
  setSinglePost: (value: any) => void;
  posts: IPost[];
  setPosts: (value: any) => void; // Updated type
  singleComment: IComments;
  setSingleComment: React.Dispatch<React.SetStateAction<IComments>>;
  comments: IComments[];
  setComments: (value: any) => void;
  isCommentsModalOpened: boolean;
  setIsCommentsModalOpened: (value: boolean) => void
}

interface IBlogPostProvider {
  children: ReactNode;
}

export const BlogContext = createContext<IBlogPostContext>({} as IBlogPostContext);

const BlogProvider = ({ children }: IBlogPostProvider) => {
  const [singlePost, setSinglePost] = useState<IPost>({ id: 0, picture: null, title: "", description: "", });
  const [posts, setPosts] = useState<IPost[]>([]);
  const [singleComment, setSingleComment] = useState<IComments>({id: 0, author: "", comment: ""})
  const [comments, setComments] = useState<IComments[]>([])
  const [isCommentsModalOpened, setIsCommentsModalOpened] = useState<boolean>(false)

  const value = {
    singlePost,
    setSinglePost,
    posts,
    setPosts,
    singleComment,
    setSingleComment,
    comments,
    setComments,
    isCommentsModalOpened,
    setIsCommentsModalOpened
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogProvider;
