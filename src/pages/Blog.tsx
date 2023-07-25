import { Box, Button, Container, FormControl, FormLabel, List, ListItem, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ImgMediaCard from "../components/CardComponent";
import EditModal from "../components/EditModal";
import { UseMutationResult, UseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBlogPost, deleteBlogPost, getAllBlogPosts } from "../api/blogPosts";

const Blog = () => {
  const [isCreatePostModalOpened, setIsCreatePostModalOpened] = useState<boolean>(false)

  const blogPostsQuery: UseQueryResult<any, unknown> = useQuery({
    queryKey: ["blogPosts"],
    queryFn: getAllBlogPosts
  })

  const queryClient = useQueryClient();

  const createBlogPostMutation: UseMutationResult<unknown, unknown, any, unknown> = useMutation({
    mutationFn: createBlogPost,
    onSuccess: (data: any) => {
      queryClient.setQueryData(["blogPosts", data.id], data);
      queryClient.invalidateQueries(["blogPosts"], { exact: true });
    },
  })

  const deleteBlogPostMutation: UseMutationResult<unknown, unknown, any, unknown> = useMutation({
    mutationFn: deleteBlogPost,
    onSuccess: (data: any) => {
      queryClient.setQueryData(["blogPosts", data.id], data);
      queryClient.invalidateQueries(["blogPosts"], { exact: true });
    },
  })

  if (blogPostsQuery.isLoading) return <h1>Loading...</h1>;
  if (blogPostsQuery.isError) {
    return <pre>{JSON.stringify(blogPostsQuery.error)}</pre>;
  }
  
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    setIsCreatePostModalOpened(false)
    createBlogPostMutation.mutate({
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
    }) 
  }

  const listItems = blogPostsQuery.data.map((post: any) => (
    <ListItem sx={{marginBottom: "50px", maxWidth:"87%"}}
      key={post._id}>
      <ImgMediaCard currentPost={post} />
      <Container sx={{display: "flex", flexDirection: 'column'}}>
        <EditModal currentPost={post} />
        <Button 
          onClick={() => deleteBlogPostMutation.mutate(post._id)} 
          variant="contained" 
          color="primary" 
          sx={{marginLeft: "-15px", maxWidth: "70px", width: "70px"}}
        >
          Delete
        </Button>
      </Container>
    </ListItem>
  ));

  return (
    <Container>
      {createBlogPostMutation.isError && JSON.stringify(createBlogPostMutation.error)}
      {deleteBlogPostMutation.isError && JSON.stringify(deleteBlogPostMutation.error)}
      <Container sx={{marginTop: "20px", marginLeft: "125px"}}>
        <Typography variant="h4" sx={{marginBottom: "12.5px"}}>Blog Page</Typography>
        <Button 
          disableRipple 
          color="secondary" 
          variant="outlined" 
          onClick={() => setIsCreatePostModalOpened(true)}
        >
          Add a new Post
        </Button>
      </Container>
      <Modal open={isCreatePostModalOpened} onClose={() => setIsCreatePostModalOpened(false)}>
        <Box sx={{
          position: 'absolute',
          top: '15%',
          left: '36%',
          width: 450,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          borderRadius:"10px",
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h5" sx={{marginBottom: '20px'}}>
            Create a new post
          </Typography>
          <FormControl component={'form'} onSubmit={handleFormSubmit} >
            <FormLabel sx={{marginBottom: "10px"}}>
              Enter title
            </FormLabel>
            <TextField 
              name="title" 
              label="Title" 
              required 
              sx={{marginBottom: "10px"}}
            />
            <FormLabel sx={{marginBottom: "10px"}}>
              Enter description
            </FormLabel>
            <TextField 
              name="description" 
              label="Description" 
              multiline 
              rows={2} 
              required 
              sx={{marginBottom: "10px"}}
            />
            <FormLabel sx={{marginBottom: "10px"}}>Insert an image</FormLabel>
            <TextField type="file" name="picture" required sx={{marginBottom: "25px"}}/>
            <Stack direction="row" spacing={1} sx={{marginTop: "5px"}}>
              <Button
                disabled={createBlogPostMutation.isLoading}
                variant="contained" 
                type="submit" 
                sx={{width: "13vh"}}
              >
                {createBlogPostMutation.isLoading ? "Loading..." : "Submit"}
              </Button>
              <Button 
                sx={{width: "13vh"}} 
                onClick={() => setIsCreatePostModalOpened(false)}
              >
                Close
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Modal>        
      <Container sx={{display: 'flex', justifyContent: 'center'}}>
        <List>
          {listItems}
        </List>
      </Container>
    </Container>
  );
};
export default Blog