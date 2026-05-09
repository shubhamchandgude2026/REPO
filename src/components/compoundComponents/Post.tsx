import { createContext, useContext } from "react";

interface PostData {
    id: number;
    title: string;
    content: string;
}

interface PostDataProps {
    post: PostData;
    children: React.ReactNode
}

const PostContext = createContext<PostData | undefined>(undefined);


const usePostcontext = () => {
    const context = useContext(PostContext)
    if(!context){
        throw new Error("useContext must be used with in post provider");
    }
    return context
}

interface PostComponent extends React.FC<PostDataProps> {
    Title: React.FC;
    Body: React.FC;
}

const Post: PostComponent = ({post,children}) => {
  return (
    <PostContext.Provider value={{...post}}>

    <div>
      {children}
    </div>

    </PostContext.Provider>
  )
}
  
export default Post

Post.Title = () => {
  const {title} = usePostcontext();
    return (
        <h2>{title}</h2>
    )
}   

Post.Body = () => {
  const {content} = usePostcontext();
    return (
        <p>{content}</p>
    )
}