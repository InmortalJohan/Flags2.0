import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropdownSelect = ({ region, setRegion }) => {


  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="selectRegion">Filter by Region</InputLabel>
        <Select
          labelId="selectRegion"
          id="selectRegion"
          value={region}
          onChange={handleChange}
        >
          <MenuItem value="">
            All Regions
          </MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownSelect;
