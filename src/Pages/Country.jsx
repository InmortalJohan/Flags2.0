import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, List, ListItem, Typography, Button, Stack } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "../Pages/Country.css";

const Country = () => {
  const { id } = useParams(); // id = landets kod, ex: "SWE"
  const [country, setCountry] = useState(null);
  const [neighbors, setNeighbors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { mode } = useContext(ThemeContext);

  const ArrowLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32.242"
      height="18.693"
      viewBox="0 0 32.242 18.693"
    >
      <g id="arrow-left" transform="translate(-202.723 -137.717)">
        <path
          id="Path_278"
          d="M16475.775,1222.011l-8.639,8.639,8.639,8.639"
          transform="translate(-16263 -1083.587)"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <line
          id="Line_68"
          x1="30.57"
          transform="translate(204.395 147.155)"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
      </g>
    </svg>
  );

  const ArrowDark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32.242"
      height="18.693"
      viewBox="0 0 32.242 18.693"
    >
      <g
        id="Group_1069"
        dataName="Group 1069"
        transform="translate(-202.723 -137.717)"
      >
        <path
          id="Path_278"
          d="M16475.775,1222.011l-8.639,8.639,8.639,8.639"
          transform="translate(-16263 -1083.587)"
          fill="none"
          stroke="#111517"
          strokeWidth="2"
        />
        <line
          id="Line_68"
          x1="30.57"
          transform="translate(204.395 147.155)"
          fill="none"
          stroke="#111517"
          strokeWidth="2"
        />
      </g>
    </svg>
  );

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
        <Button
          component={Link}
          to="/"
          variant="text"
          color="palette.contrastText"
        >
          {mode === "light" ? ArrowDark : ArrowLeft}{" "}
          <Typography sx={{ marginLeft: "16px" }}> Tillbaka </Typography>
        </Button>
      </Box>
      <Box className="contentContainer">
        <Box className="flag" >
          <Box
            sx={{
              boxShadow:6,
              height: "400px",
              width: "550px",
              objectFit: "cover",
              marginLeft: "80px",
              borderRadius:'24px',
            }}
            component="img"
            src={country.flags?.svg}
            alt={country.name?.common}
          />
        </Box>
        <Box className="infoContainer" sx={{ marginRight: "80px" }}>
          <Box className="countryName">
            <Typography variant="h4" sx={{ textAlign: "center", marginBottom:'20px'}}>
              {country.name.common}
            </Typography>
          </Box>
          <Box
            className="listContainer"
            // sx={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
          >
            <Box component={List} className="listOne">
              <ListItem>
                <Typography variant="body1">
                  {" "}
                  Region:  {"  "}
                    {country.region}
                  </Typography>
                
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Huvudstad:{country.capital?.[0]}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Befolkning:
                 {country.population.toLocaleString()}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Språk:</Typography>
                <Typography>
                  {" "}
                  {Object.values(country.languages || {}).join(", ")}
                </Typography>
              </ListItem>
            </Box>
            <Box component={List} className="listTwo">
              <ListItem>
                <Typography variant="body1">Valuta: 
                
                  {
                    country.currencies?.[Object.keys(country.currencies)[0]]
                      .name
                  }
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Ursprungligt namn: 
                
                  {
                    country.name.nativeName?.[
                      Object.keys(country.name.nativeName)[0]
                    ].common
                  }
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Vanligaste domän : 
                 {country.tld?.[0]} </Typography>
              </ListItem>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop:'40px'
        }}
      >
        <Typography
          component="h5"
          variant="h5"
          sx={{ marginLeft: "80px", marginBottom: "20px" }}
        >
          Grannländer:{" "}
        </Typography>
        <Stack
          direction="row"
          // spacing={2}
          sx={{
            flexWrap: "wrap",
            maxWidth: "500px",
            alignItems: "center",
            justifyContent: "space-evenly",
            display: "flex",
            marginLeft: "80px",
            gap: "8px",
          }}
        >
          {neighbors.length > 0 ? (
            neighbors.map((neighbor) => (
              <Button
                size="medium"
                elevation={2}
                color="secondary"
                component={Link}
                variant="contained"
                to={`/country/${neighbor.cca3}`}
                key={neighbor.cca3}
                className="neighbor-button"
              >
                {neighbor.name.common}
              </Button>
            ))
          ) : (
            <Typography variant="p">Inga grannländer</Typography>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Country;
