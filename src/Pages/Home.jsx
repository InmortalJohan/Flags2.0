import { useState, useEffect } from "react";
import { Box, Grid, Stack,Container } from "@mui/material";
import SearchInput from "../Components/SearchInput";
import DropdownSelect from "../Components/DropdownSelect";
import CountryCard from "../Components/CountryCard";
import LoadingLayout from "../Layouts/LoadingLayout";

export default function SearchCountry() {
  const url = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
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

  if (loading) return <LoadingLayout type="card" count={8} />;

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ justifyContent: "center", alignItems: "center", marginTop: "16px" }}
    >
      <Container maxWidth="lg" spacing={6}
        sx={{display:"flex", justifyContent:"space-between",alignItems:"center", flexDirection:{xs:"column", sm:"row"}}}
      >
        <SearchInput query={query} setQuery={setQuery} />
        <DropdownSelect region={region} setRegion={setRegion} />
      </Container>
      <Grid
        maxWidth="lg"
        
        size={12}
        container
        spacing={8}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((country, index) => (
            <CountryCard size={3} key={index} country={country} />
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </Grid>
    </Stack>
  );
}
