import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeContext } from "../ThemeContext";

const DropdownSelect = ({ region, setRegion }) => {
  const { mode } = useContext(ThemeContext);

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <>
      <FormControl
        mode={mode}
        variant="outlined"
        sx={(theme) => ({
          color:
            mode === "light"
              ? theme.palette.text.primary
              : theme.palette.text.primary,
          m: 1,
          minWidth: 200,
          borderRadius: 1,
          p: 0,
          fontSize: "14px",
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "secondary.main",
            },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "secondary.main",
          },
        })}
      >
        <InputLabel id="selectRegion">Filter by Region</InputLabel>
        <Select
          labelId="selectRegion"
          id="selectRegion"
          value={region}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value="">All Regions</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default DropdownSelect;
