import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Img } from "../components/Img";

// import imageFile from "../assets/TheEarthWP.jpeg"

const Home = () => {
  const navigate = useNavigate();
  const path = process.env.PUBLIC_URL;
  const image = "TheEarthWP.jpeg";
  
  return (
    <>
    <Img alt={"EarthBackground"} src={path + image} sx={{position: "absolute" ,width: "195vh", height: "47.5vw", marginLeft: "-10px", zIndex: "-1", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></Img>
    <Box>
      <Container sx={{position: "relative", marginLeft: "20px" ,marginTop: "125px"}}>
        <Typography variant="h3" color={"transparent"} sx={{WebkitTextStroke: "1px white" ,marginBottom: "20px"}}>Welcome to my <br></br>travelling blog</Typography>
        <Button variant="contained" color="success" onClick={() => navigate('/blog')} >Go to the Blog</Button>
      </Container>
    </Box>
    </>
  );
};

export default Home;

//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   width: '100vw',
//   height: '100vh'