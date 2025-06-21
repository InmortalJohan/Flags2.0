import React, { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import { ThemeContext } from "./ThemeContext";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#f2f2f2", contrastText: "#202C36" },
    secondary: { main: "#f2f2f2" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#202c36", contrastText: "#f2f2f2" },
    secondary: { main: "#2B3844" },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  const [mode, setMode] = useState("dark");
  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));
  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;