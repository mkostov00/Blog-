import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#880e4f'
        },
        secondary: {
            main: green['A400'],
        },
        success: {
            main: '#009688',
        }
        
    }
})
export default theme