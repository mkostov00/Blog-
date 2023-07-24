import { Box, BoxProps } from "@mui/material";

type ImgProps = {
  src: string;
  alt: string;
  // add more HTML img attributes you need
};

export const Img = (props: BoxProps & ImgProps) => <Box component="img" {...props} />;
