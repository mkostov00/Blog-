import { Box, Button, Container, FormControl, FormLabel, List, ListItem, Modal, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BasicModal from "../components/EditModal";
import ImgMediaCard from "../components/CardComponent";
import EditModal from "../components/EditModal";
import { BlogContext, IPost } from "../context/BlogPostProvider";

const path = process.env.PUBLIC_URL;
const image = "BelugaWhale.jpg";
const image2 = "TheEarthWP.jpeg";
const image3 = "westCoastGta.jpg";

const Blog = () => {
    const {posts, setPosts, singlePost, setSinglePost} = useContext(BlogContext)
    
    const [isCreatePostModalOpenned, setIsCreatePostModalOpenned] = useState<boolean>(false)
    // const [file, setFile] = useState<string | null>(null);

    const handleChange = (e: any) => {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];  // setFile(URL.createObjectURL(selectedFile));
        setSinglePost((prev: IPost) => ({
          ...prev,
          picture: selectedFile,
        }));
      }
    };

    
    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        setIsCreatePostModalOpenned(false)
        // setFile(null)

        const titleValue = e.currentTarget.title.value
        const descriptionValue = e.currentTarget.description.value

        setSinglePost((prev: IPost) => ({...prev,
          id: prev.id + 1,
          title: titleValue,
          description: descriptionValue
        }))
        setPosts((prev: any) => [...prev, singlePost])         
        console.log(posts);
      }
      
      const handleDeletePost = (post: any) => {
        const updatedPosts = posts.filter((prev) => prev.id !== post.id)
        setPosts(updatedPosts)
      }

    const handleModalOnClose = () => setIsCreatePostModalOpenned(false)

    const listItems = posts.map((post) => (
      <ListItem sx={{marginBottom: "50px", maxWidth:"87%"}}
       key={post.id}>
        <Link to={""}>
          <ImgMediaCard currentPost={post} />
        </Link>
        <Container sx={{display: "flex", flexDirection: 'column'}}>
          <EditModal currentPost={post} />
          <Button onClick={() => {handleDeletePost(post)}} variant="contained" color="primary" sx={{marginLeft: "-15px", maxWidth: "70px", width: "70px"}}>Delete</Button>
        </Container>
      </ListItem>
    ));


    //-------------THE RETURN STARTS FROM HERE------------- 

    return (
      <Container>
        <Container sx={{marginTop: "20px", marginLeft: "125px"}}>
          <Typography variant="h4" sx={{marginBottom: "12.5px"}}>Blog Page</Typography>
          <Button disableRipple color="secondary" variant="outlined" onClick={() => setIsCreatePostModalOpenned(true)}>Add a new Post</Button>
        </Container>
        <Modal open={isCreatePostModalOpenned} onClose={handleModalOnClose}>
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
              <Typography variant="h5" sx={{marginBottom: '20px'}}>Create a new post</Typography>
              <FormControl component={'form'} onSubmit={handleFormSubmit} >
                <FormLabel sx={{marginBottom: "10px"}}>Enter title</FormLabel>
                <TextField type="text" name="title" label="Title" required onChange={(e) => setSinglePost((prev: IPost) => ({...prev, title: e.target.value}))} sx={{marginBottom: "10px"}}/>
                <FormLabel sx={{marginBottom: "10px"}}>Enter description</FormLabel>
                <TextField type="text" name="description" label="Description" multiline rows={2} required onChange={(e) => setSinglePost((prev: IPost) => ({...prev, description: e.target.value}))} sx={{marginBottom: "10px"}}/>
                <FormLabel sx={{marginBottom: "10px"}}>Insert an image</FormLabel>
                <TextField type="file" required onChange={handleChange} sx={{marginBottom: "25px"}}/>
                <Stack direction="row" spacing={1} sx={{marginTop: "5px"}}>
                  <Button variant="contained" type="submit" sx={{width: "13vh"}}>Submit</Button>
                  <Button sx={{width: "13vh"}} onClick={handleModalOnClose}>Close</Button>
                </Stack>
              </FormControl>
            </Box>
        </Modal>        
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
          <List>
            {listItems}
          </List>
        </Container>
            {/* <li><Link to="/posts/1"><ImgMediaCard source={path + image} title={"The Beluga whale"} description={"The Belugas are from the dolphin family. They can mimic human voices and are 6m-8m in length."}/></Link></li>
            <li><Link to="/posts/1"><ImgMediaCard source={path + image2} title={"Paris"} description={"The city called Paris is located in the northern part of France it is also the capital. Has been siegied multiple times throughout the history."}/></Link></li>
            <li><Link to="/posts/1"><ImgMediaCard source={path + image3} title={"The Beluga whale"} description={"The Belugas are from the dolphin family. They can mimic human voices and are 6m-8m in length."}/></Link></li>
            <li><Link to="/posts/1">Post: About Tigers</Link></li>
            <li><Link to="/posts/2"><ImgMediaCard source={image2} title={"The Earth today"} description={"The Earth is the third planet in the solar system. It is inhabitated by more than bilion creatures"}/></Link></li>
            <li><Link to="/posts/3"><ImgMediaCard source={image3} title={"The West coast"} description={"The west coast people are really often forgetting to wipe their asses after they poop"}/></Link></li>
            <li><Link to="/posts/4">Post 4</Link></li>
            Add more posts here
            </ul> */}
      </Container>
    );
};
export default Blog