import { Routes, Route, Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import PostDetail from "../pages/PostDetails"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
    return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="posts/:postId" element={<PostDetail />} />        
        <Route path="/*" element={<NotFound />} />
      </Routes>
    )
}
export default AppRoutes