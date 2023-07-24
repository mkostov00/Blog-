import { AppBar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    marginLeft: -8,
    marginTop: -8,
    width: "100%",
    [theme.breakpoints.up("lg")]: {
        width: 1490,
    },
    [theme.breakpoints.up("xl")]: {
        width: 1865,
    },
}));
