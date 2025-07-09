import { TextField } from "@mui/material";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const SearchInput = ({ query, setQuery }) => {
   const { mode} = useContext(ThemeContext);
   return (
    <TextField
      placeholder="Search for a country"
      variant="outlined"
      id="outlined-search"
      label="Search for a country"
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      sx={
        (theme) => ({
          backgroundColor: mode === "light" ? theme.palette.background.paper : theme.palette.background.paper,
          color: mode === "light" ? theme.palette.text.primary : theme.palette.text.primary, 
          minWidth: {xs:200,sm:400},
          p: 0,
          fontSize: "14px",
          borderRadius: "12px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: mode === "light" ? theme.palette.grey[600] : theme.palette.grey[600],
            },
            "&:hover fieldset": {
              borderColor: mode === "light" ? theme.palette.grey[700] : theme.palette.grey[500],
            },
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: mode === "light" ? theme.palette.grey[800] : theme.palette.primary.light,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: mode === "light" ? theme.palette.grey[800] : theme.palette.primary.light,
          },
        })
      }
    />
  );
};

export default SearchInput;
