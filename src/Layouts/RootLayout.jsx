import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "../Components/Navbar";


const RootLayout = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent:'center', alignItems:'center'}} >
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </Container>
  );
};

export default RootLayout;