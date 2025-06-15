import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';    
const Navbar = () => {
    return (
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <AppBar position="static" sx={{width: '100%'}} color="transparent" elevation={0} disableGutters>
                <Toolbar>
                    <Link to="/">
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Flags-App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;