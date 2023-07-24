import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from '@mui/icons-material/Comment';
import { Img } from "./Img";
import { useContext, useState } from "react";
import { BlogContext, IPost } from "../context/BlogPostProvider";
import CommentsModal from "./CommentsModal";

interface ImgMediaCardProps{
  currentPost: IPost,
  source?: string | null,
}

//!!!!!!!!!!!!!!   Props - image src; title; description; ;    !!!!!!!!!!!!!!!
const ImgMediaCard = ({source, currentPost}: ImgMediaCardProps) => {
  const { isCommentsModalOpened, setIsCommentsModalOpened } = useContext(BlogContext)

  const [likeCounter, setLikeCounter] = useState<number>(0)

  const backgroundImageStyle = {
    backgroundImage: currentPost.picture ? `url(${URL.createObjectURL(currentPost.picture)})` : '',
  };
  
  

    const preventPropagation = (event: any) => {
        event.preventDefault()
    }

    const handleLikeButton = (event: any) => {
        event.preventDefault()
        setLikeCounter((prev) => prev + 1)
    }

    const handleOpenCommentsModal = (event: any) => {
      event.preventDefault();
      setIsCommentsModalOpened(true)
    }
    const handleCloseCommentsModal = (event: any) => {
      event.preventDefault();
      setIsCommentsModalOpened(false)
    }
    
 //
  return (
    <Card sx={{ display: "flex", width: 750, maxHeight: 150, borderRadius: '10px'}}> {/* flexDirection: "row", */}
      <CardContent sx={{
      margin: "1px",
      paddingBottom: "105px",
      width: "15%",
      height: "10%",
      ...backgroundImageStyle,
      backgroundSize: 'cover',
      borderRadius: '10px'
    }}>
      {/* <Img 
        alt={"Card Image"} 
        src={currentPost.picture ? URL.createObjectURL(currentPost.picture) : ""} 
        sx={{width: "50%", height: "90px", borderRadius: "30px" }}/> */}
      </CardContent>
      <CardContent sx={{ flex: "1", marginLeft: "10px" }}>
        <Typography gutterBottom variant="h5" component="h2">
          {currentPost.title.substring(0, 30)}{currentPost.title.length >= 31 ? '...': ''}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" onClick={preventPropagation}>
          {currentPost.description.substring(0, 137)}{currentPost.description.length >= 140 && '...'}
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton onClick={handleLikeButton} aria-label="add to favorites" sx={{paddingRight: "5px" }}>
          <FavoriteIcon sx={{ color: likeCounter > 0 ? "darkred": "default"}}/>
          {likeCounter}
        </IconButton>
        <IconButton onClick={(event) => handleOpenCommentsModal(event)} aria-label="share" >
          <CommentIcon />
        </IconButton>
      </CardActions>
        <CommentsModal isOpen={isCommentsModalOpened} onClose={(event) => handleCloseCommentsModal(event)} currentPost={currentPost} />
    </Card>
      

  );
}
export default ImgMediaCard