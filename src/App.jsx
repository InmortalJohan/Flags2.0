import React, { useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import CountryLayout from "./Layouts/CountryLayout";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import NotFound from "./Pages/NotFound";
import { ThemeContext } from "./ThemeContext";
import './App.css'
import TestRoute from "./Pages/TestRoute"

const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#f2f2f2",
      contrastText:"202C36"
    },
    secondary: {
      main: "#f2f2f2",
    },
    background: {
      default: "#f2f2f2",
      paper: "#ffffff",
    },
    text: {
      primary: "#111517",
    },
    lightButton:{
      main: "#fff",
      contrastText:"202C36"
    }
  },
  typography: {
    body1: {
      fontSize: 14,
      fontFamily: 'Open Sans',
    },
    button: {
      fontFamily: 'Open Sans',
    },
    body2: {
      fontSize: 16,
      fontFamily: 'Open Sans',
    },
    fontFamily: 'Open Sans',
  },
});

const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#202C36",
      contrastText: "#f2f2f2",
    },
    secondary: {
      main: "#2b3844",
    },
    text: {
      primary: "#f2f2f2",
    },
    background: {
      default: "#202c36",
      paper: "#2b3844",
    },
  },
  typography: {
    body1: {
      fontSize: 14,
      fontFamily: 'Open Sans',
    },
    button: {
      fontFamily: 'Open Sans',
    },
    body2: {
      fontSize: 16,
      fontFamily: 'Open Sans',
    },
    fontFamily: 'Open Sans',
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="test" element={<TestRoute />} /> */}
      <Route path="country/:id" element={<CountryLayout />}>
        <Route index element={<Country />} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);

function App() {
  const [mode, setMode] = useState("dark");

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    document.body.style.color = theme.palette.text.primary;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;