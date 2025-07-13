import { useState, useEffect } from "react";
import { Box, Grid, Stack, Container } from "@mui/material";
import SearchInput from "../Components/SearchInput";
import DropdownSelect from "../Components/DropdownSelect";
import CountryCard from "../Components/CountryCard";
import LoadingLayout from "../Layouts/LoadingLayout";

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
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

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
        }}
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
