import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
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
        <>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2 , marginBottom: 2}}>
            <SearchInput query={query} setQuery={setQuery}/>
            <DropdownSelect region={region} setRegion={setRegion}/>
        </Box>
        <Box>
            <Grid container spacing={10} sx={{ justifyContent: "center", alignItems: "center", margin: 0 }}>
            {filtered.length > 0 ? (
                filtered.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))
        ) : (
          <p>No countries found.</p>
        )}
            </Grid>
        </Box>
        </>
    )
}
