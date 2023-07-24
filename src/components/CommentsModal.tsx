import { Box, Button, Container, FormControl, FormLabel, Modal, TextField } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { BlogContext, IComments, IPost } from '../context/BlogPostProvider';


const modalStyle = {
    position: 'absolute',
    top: '15%',
    left: '35%',
    width: 600,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
  };

interface CommentsModalProps{
    isOpen: boolean,
    onClose: (event: any) => void,
    currentPost: IPost,
}

 const CommentsModal = ({isOpen, onClose, currentPost}: CommentsModalProps) => {
    const { comments, setComments, singleComment, setSingleComment, isCommentsModalOpened ,setIsCommentsModalOpened } = useContext(BlogContext)

    const handleCommentSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setComments((prevComments: IComments[]) => [...prevComments, singleComment]);
        console.log(singleComment);

        setSingleComment({ id: singleComment.id + 1, author: '', comment: '' });
        
    }

    useEffect(() => {
        console.log(comments);
        

        
    }, [comments])

    
  return (
    <Modal 
      open={isOpen}
      onClose={onClose}
    >
        <Container sx={modalStyle}>
            <Box>
                <FormLabel>Your name:</FormLabel> <br/>
                <TextField 
                    type="text" 
                    name="author" 
                    label="Author"
                    value={singleComment.author}
                    onChange={e => setSingleComment((prev: IComments) => ({...prev, author: e.target.value}))}
                />
                <FormLabel>
                    Comment what you think:
                </FormLabel> 
                <TextField 
                    type="text" 
                    name="comment" 
                    label="Comment"
                    value={singleComment.comment}
                    onChange={e => setSingleComment((prev: IComments) => ({...prev, comment: e.target.value}))}

                />
                <Button 
                    variant="contained" 
                    onClick={handleCommentSubmit}
                >
                    Add Comment
                </Button>
            </Box>

            <Box sx={{height: "250px", width: "450px", border: "1px dotted black"}}>
                <ul>
                    <li></li>
                </ul>
            </Box>
        </Container> 
    </Modal>
  )
}
export default CommentsModal
