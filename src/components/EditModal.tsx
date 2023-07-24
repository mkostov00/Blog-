import { Box, Button, Container, FormControl, FormLabel, Modal, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { BlogContext, IPost } from "../context/BlogPostProvider";

const boxStyle = {
    position: 'absolute',
    top: '15%',
    left: '35%',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
  };

interface IEditModalProps{
  currentPost: IPost
}

const EditModal = ({currentPost}: IEditModalProps) =>  {
    const { setSinglePost, posts, setPosts } = useContext(BlogContext)
    const [open, setOpen] = useState(false);

    const handleEditModalSubmit = (event: any) => {
        setOpen(false);
        const post = { ...currentPost };

        post.title = event.target.title.value;
        post.description = event.target.description.value;
      
        const allPosts = posts.map((publication) => {
          if (publication.id === post.id) {
            setSinglePost(post)
            return post
          }
          return publication
        }) 
        
        setPosts(allPosts) 
    }

  return (
        <>
        <Button 
          sx={{ marginLeft: "-15px", marginBottom: "10px", maxWidth: "70px", width: "70px" }} 
          variant="contained" 
          color="primary" 
          onClick={() => setOpen(true)}
        >
          Edit
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <>
          <Box sx={boxStyle} >
            {/* <Container sx={{ display:"flex", alignItems: "center"}}> */}
            <Stack spacing={1}>
              <Typography variant="h5">Edit the post</Typography>
              <FormControl component={'form'} onSubmit={handleEditModalSubmit}>
                <FormLabel sx={{marginBottom: "5px", marginTop: "15px"}}>
                  Edit the title
                </FormLabel> 
                <TextField 
                  label="Title" 
                  name="title" 
                  defaultValue={currentPost.title} 
                  variant="filled" color="secondary" 
                  sx={{paddingTop: "5px", paddingBottom: "5px", width: "50%"}}
                />
                <FormLabel sx={{marginBottom: "5px", marginTop: "5px"}}>
                  Edit the description
                </FormLabel>
                <TextField 
                  label="Description" 
                  name="description" 
                  defaultValue={currentPost.description} 
                  multiline 
                  rows={3} 
                  variant="filled" 
                  color="secondary"  
                  sx={{paddingTop: "5px", paddingBottom: "15px", width: "50%"}}/>
                <Stack direction="row" spacing={2} sx={{marginTop: "5px"}}>
                  <Button 
                    variant="contained" 
                    type="submit" 
                    color="primary" 
                    sx={{ width: "80px"}}
                  >
                    Save
                  </Button>
                  <Button color="primary" onClick={() => setOpen(false)}>Close</Button>
                </Stack>
              </FormControl>
            </Stack>
            {/* </Container> */}
          </Box>
        </>
      </Modal>
      </>
    );
  }
export default EditModal