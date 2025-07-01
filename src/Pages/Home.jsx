import { useState, useEffect } from "react";
import { Box, Grid, Stack } from "@mui/material";
import SearchInput from "../Components/SearchInput";
import DropdownSelect from "../Components/DropdownSelect";
import CountryCard from "../Components/CountryCard";

export default function SearchCountry() {
  const url = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {
    return data.filter((item) => {
      const matchesQuery = search_parameters.some((parameter) =>
        item[parameter]?.toString().toLowerCase().includes(query.toLowerCase())
      );
      const matchesRegion =
        region === "" || item.region?.toLowerCase() === region.toLowerCase();

      return matchesQuery && matchesRegion;
    });
  }

  const filtered = search(data);

  return (
    <Stack
    direction='column'
    spacing={4}
    sx={{justifyContent:'center',alignItems:'center',marginTop:'16px'}}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          wrap: "nowrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
          marginBottom: 6,
          width: "100%",
          maxWidth: "1440px",
          padding: '0 42px'
        }}
      >
        <SearchInput query={query} setQuery={setQuery} />
        <DropdownSelect region={region} setRegion={setRegion} />
      </Box>
      <Grid
        disableGutters
        size={10}
        container
        spacing={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          margin: 0,
          width: "100%",
          maxWidth: "1440px",
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((country, index) => (
            <CountryCard itemsize={2} key={index} country={country} />
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </Grid>
    </Stack>
  );
}
