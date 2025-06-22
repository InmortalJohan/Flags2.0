import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";



const CountryLayout = () => {
    const { mode, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <Navbar mode={mode} toggleTheme={toggleTheme}/>
            <Outlet/>
        </>
    )
}

export default CountryLayout;