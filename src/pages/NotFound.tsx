import { Box, Typography } from "@mui/material";

const notFoundStyle = {
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "75vh",
}

const NotFound = () => {
  return (
    <Box sx={notFoundStyle}>
      <Typography variant="h4">Error 404: Not Found</Typography>
    </Box>
  );
};

export default NotFound;
