import { TextField } from "@mui/material";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const SearchInput = ({ query, setQuery }) => {
   const { mode} = useContext(ThemeContext);
   return (
    <TextField
      variant="outlined"
      id="outlined-search"
      label="Search for a country"
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      sx={
        (theme) => ({color: mode === "light" ? theme.palette.text.primary : theme.palette.text.primary, 
           minWidth: 400,
           p: 0,
           fontSize: "14px",
           borderRadius: "12px",
      })}
    />
  );
};

export default SearchInput;
