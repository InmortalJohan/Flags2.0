import { TextField } from "@mui/material";

  const SearchInput = ({ query, setQuery }) => {
  return <TextField id="outlined-search" label="Search field" type="search" value={query} onChange={(e) => setQuery(e.target.value)} />;
};

export default SearchInput;
