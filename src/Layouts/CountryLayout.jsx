import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const CountryLayout = () => {
  return (
    <Container
      disableGutters
      maxWidth="1440px"
      sx={{
        padding: 0,
        margin: 0,
        // display: "flex",
        // flexDirection: "column",
        // minHeight: "100vh",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Outlet />
    </Container>
  );
};

export default CountryLayout;
