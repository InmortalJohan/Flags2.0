import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {Box, List, ListItem, Typography} from "@mui/material"

const Country = () => {
  const { id } = useParams(); // id = landets kod, ex: "SWE"
  const [country, setCountry] = useState(null);
  const [neighbors, setNeighbors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      setError(null);

      try {
        // Hämta landet med alpha-kod
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (!res.ok) throw new Error("Landet kunde inte hämtas");
        const data = await res.json();
        const countryData = Array.isArray(data) ? data[0] : data;
        setCountry(countryData);

        // Hämta grannländer med deras namn
        if (countryData.borders && countryData.borders.length > 0) {
          const bordersRes = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(
              ","
            )}`
          );
          const bordersData = await bordersRes.json();
          setNeighbors(bordersData);
        } else {
          setNeighbors([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>Fel: {error}</p>;
  if (!country) return <p>Ingen data</p>;

  return (
    <Box className="countryWrapper">
      <Box className="backDiv">
        <Link to="/" className="back-link">
          Tillbaka
        </Link>
      </Box>
      <Box className="contentContainer">
        <Box className="flag">
          <Box component= "img"
            src={country.flags?.svg}
            alt={country.name?.common}
          />
        </Box>
        <Box className="infoContainer">
          <Box className="countryName">
            <Typography component="h1">{country.name.common}</Typography>
          </Box>
          <Box className="listContainer">
            <Box component={List} className="listOne">
              <ListItem>
                <Typography> Region: {country.region}</Typography>
                </ListItem> 
              <p>
                <strong>Huvudstad:</strong> {country.capital?.[0]}
              </p>
              <p>
                <strong>Befolkning:</strong> {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Språk:</strong>{" "}
                  {Object.values(country.languages || {}).join(", ")}
              </p>
            </Box>
            <Box component = {List} className="listTwo">
              <p>
                <strong>Valuta:</strong>
                 {country.currencies?.[Object.keys(country.currencies)[0]].name}</p>
              <p>
                <strong>Ursprungligt namn:</strong>
                 {country.name.nativeName?.[Object.keys(country.name.nativeName)[0]].common}
                 </p>
              <p>
                <strong>Vanligaste domän:</strong>
                 {country.tld?.[0]} </p>
            </Box>
          </Box>
          <Box className="neighbors">
            <h3>Grannländer:</h3>
            {neighbors.length > 0 ? (
              neighbors.map((neighbor) => (
                <Link to={`/country/${neighbor.cca3}`} key={neighbor.cca3}>
                  <button className="neighbor-button">{neighbor.name.common}</button>
                </Link>
              ))
            ) : (
              <p>Inga grannländer</p>
            )}
          </Box>
        </Box>
        </Box>
    </Box>
  );
};

export default Country;