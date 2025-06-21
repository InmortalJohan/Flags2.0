import { TextField } from "@mui/material";

  const SearchInput = ({ query, setQuery }) => {
  return <TextField variant="filled" id="contained-search" label="Search for a country" type="search" value={query} onChange={(e) => setQuery(e.target.value)} sx={{minWidth:400,backgroundColor: "primary.main", borderRadius: 1,p:0,fontSize:'14px',color:'secondary.main',borderRadius:'12px'}}/>;
};

export default SearchInput;
