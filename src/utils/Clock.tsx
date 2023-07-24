import { Typography } from "@mui/material"
import { useEffect, useState } from "react";

const Clock = () => {
    const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

    useEffect(
        () => {
          const id = setInterval(() => setLocalTime(new Date().toLocaleTimeString()) ,1000);
          return () => clearInterval(id);},
        []
      );

    return (
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 3 }}>
            {localTime}
        </Typography>
    )
}
export default Clock