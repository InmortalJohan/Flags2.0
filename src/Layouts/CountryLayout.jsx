import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const CountryLayout = () => {
  return (
    <Container
      
      maxWidth= "lg"
      sx={{
        padding: 0,
        margin: 0,
      }}
    >
      <Outlet />
    </Container>
  );
};

export default CountryLayout;
