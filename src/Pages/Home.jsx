import { useState, useEffect } from "react";
import { Box, Grid, Stack, Container } from "@mui/material";
import SearchInput from "../Components/SearchInput";
import DropdownSelect from "../Components/DropdownSelect";
import CountryCard from "../Components/CountryCard";


export default function SearchCountry() {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,capital,population,languages,currencies,tld";
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch countries");
        return res.json();
      })
      .then((d) => {
        setData(Array.isArray(d) ? d : []);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const search_parameters =
    Array.isArray(data) && data.length > 0
      ? Object.keys(Object.assign({}, ...data))
      : [];

  function search(data) {
    return data.filter((item) => {
      // Check name.common and name.official specifically
      const nameMatch = (
        item.name?.common?.toLowerCase().includes(query.toLowerCase()) ||
        item.name?.official?.toLowerCase().includes(query.toLowerCase())
      );
      // Check other fields as before
      const otherMatch = search_parameters.some((parameter) => {
        // Skip 'name' since we already checked it
        if (parameter === "name") return false;
        return item[parameter]?.toString().toLowerCase().includes(query.toLowerCase());
      });
      const matchesQuery = nameMatch || otherMatch;
      const matchesRegion =
        region === "" || item.region?.toLowerCase() === region.toLowerCase();

      return matchesQuery && matchesRegion;
    });
  }

  const filtered = search(data);

  if (loading) {
    return (
      <Stack
        direction="column"
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "center", marginTop: "16px" }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            p: 0,
            gap: "12px"
          }}
        >
          <SearchInput query={query} setQuery={setQuery} />
          <DropdownSelect region={region} setRegion={setRegion} />
        </Container>
        <Grid
          maxWidth="lg"
          size={12}
          container
          spacing={4}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 3,
            paddingRight: 3,
            margin: 0,
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <CountryCard isLoading={true} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  }
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ justifyContent: "center", alignItems: "stretch", marginTop: "16px" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent:"space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          p: 0,
          gap:"12px" 
        }}
      >
        <SearchInput query={query} setQuery={setQuery} />
        <DropdownSelect region={region} setRegion={setRegion} />
      </Container>
      <Grid
        container
        spacing={8}
        sx={{
          justifyContent:"flex-start",
          alignItems: "center",
          paddingLeft: 3,
          paddingRight: 3,
          margin: 0,
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((country, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CountryCard country={country} />
            </Grid>
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </Grid>
    </Stack>
  );
}
