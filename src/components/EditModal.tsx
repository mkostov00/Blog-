import { Box, Button, FormControl, FormLabel, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import { editBlogPost } from "../api/blogPosts";

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
  currentPost: any
}

const EditModal = ({currentPost}: IEditModalProps) =>  {
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  const editBlogPostMutation: UseMutationResult<any, any, any, any> = useMutation({
    mutationFn: editBlogPost,
    onSuccess: (data: any) => {
      queryClient.setQueryData(["blogPosts", data.id], data);
      queryClient.invalidateQueries(["blogPosts"], { exact: true });
    },
  })

  const handleEditModalSubmit = (event: any) => {
    event.preventDefault()
    setOpen(false);
    editBlogPostMutation.mutate({
      title: event.currentTarget.title.value,
      description: event.currentTarget.description.value,
      id: currentPost._id
    });
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
                sx={{paddingTop: "5px", paddingBottom: "15px", width: "50%"}}
              />
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
        </Box>
      </>
    </Modal>
    </>
  );
}

export default EditModal