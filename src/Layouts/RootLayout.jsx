import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const RootLayout = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <Container disableGutters
      maxWidth="1440px"
      sx={{
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
      }}
    >
      <Navbar mode={mode} toggleTheme={toggleTheme} />
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default RootLayout;
