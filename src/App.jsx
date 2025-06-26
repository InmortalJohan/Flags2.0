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
import Home from "./Pages/Home";
import CountryLayout from "./Layouts/CountryLayout";
import Country from "./Pages/Country";
import { ThemeContext } from "./ThemeContext";
import './App.css'

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f2f2f2",
    },
    secondary: {
      main: "#9c27b0",
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
});

const darkTheme = createTheme({
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
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="country/:id" element={<CountryLayout />}>
        <Route index element={<Country />} />
      </Route>
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