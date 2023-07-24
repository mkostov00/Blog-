import { Button, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../themes/Theme";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledAppBar } from "../styled-components/StyledAppBar";
import { useMemo } from "react";
import Clock from "../utils/Clock";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const isOnHomePage = useMemo(() => location.pathname !== "/blog", [location.pathname])
    
    const handleNavigate = () => {
        if (isOnHomePage) {
            navigate('/blog')
        } else {
            navigate('/')
        }
    }
    
    return (
        <div>
            <StyledAppBar position="sticky">
                <Toolbar variant="regular">
                    <IconButton sx={{ marginRight: theme.spacing(2.5) }} edge="start" color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Clock />
                    <Typography variant="h6" color="inherit" sx={{ flexGrow: 3 }}>
                        The Traveller's blog
                    </Typography>
                    <Button variant="text" color="inherit" size="large" disableRipple onClick={handleNavigate}>
                        {isOnHomePage ? 'Go to blog' : 'Go to home'}
                    </Button>
                </Toolbar>
            </StyledAppBar>
        </div>
    );
};

export default Header;
