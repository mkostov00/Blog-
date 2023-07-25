import { ReactNode, createContext, useState } from "react";

export interface IPost {
  _id: number;
  picture?: File | null;
  title: string;
  description: string;
}
export interface IComments {
  id: number
  author: string,
  comment: string 
}

export interface IBlogPostContext {
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
  const [singleComment, setSingleComment] = useState<IComments>({id: 0, author: "", comment: ""})
  const [comments, setComments] = useState<IComments[]>([])
  const [isCommentsModalOpened, setIsCommentsModalOpened] = useState<boolean>(false)

  const value = {
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
