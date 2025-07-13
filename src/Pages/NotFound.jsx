import { Typography, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const NotFound = () => {
  return (
    <Grid
      container
      spacing={8}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2"> 404 - error Page not found</Typography>
      <Typography variant="body1" maxWidth={{ xs: 300, md: 500 }}>
        Sorry but the page that you where looking for could not be found, you
        can press the Link below to get back to the homepage and try again. If
        you still get error messages try to restart your web browser and se if
        that will help you. Is it still not working as you want to then pleas
        contact someone who cares. Have a nice day!
      </Typography>
      <MuiLink
        component={RouterLink}
        to="/"
        color="inherit"
        underline="hover"
        sx={{ cursor: "pointer" }}
      >
        Get back to the Homepage
      </MuiLink>
    </Grid>
  );
};

export default NotFound;
