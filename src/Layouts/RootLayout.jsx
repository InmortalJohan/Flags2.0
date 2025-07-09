import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const RootLayout = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
      <Navbar mode={mode} toggleTheme={toggleTheme} />
      <Container
        disableGutters
        maxWidth="lg"
        sx={{
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
         
        }}
      >
        <Box mode={mode} toggleTheme={toggleTheme}>
          <Outlet mode={mode} toggleTheme={toggleTheme} />
        </Box>
      </Container>
    </Box>
  );
};

export default RootLayout;
