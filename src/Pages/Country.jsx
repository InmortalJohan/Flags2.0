import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  Button,
  Stack,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import NotFound from "./NotFound";
// import CountryDetailSkeleton from "../Components/CountryDetailSkeleton";

const Country = () => {
  const { id } = useParams(); // id = landets kod, ex: "SWE"
  const [country, setCountry] = useState(null);
  const [neighbors, setNeighbors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(true);
      setError(null);

      try {
        // Always use the full API URL
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (!res.ok) throw new Error("Landet kunde inte hämtas");
        const data = await res.json();
        const countryData = Array.isArray(data) ? data[0] : data;
        setCountry(countryData);

        // Defensive: Only fetch borders if it's a non-empty array
        if (
          Array.isArray(countryData.borders) &&
          countryData.borders.length > 0
        ) {
          const bordersRes = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(
              ","
            )}`
          );
          if (!bordersRes.ok) {
            setNeighbors([]);
          } else {
            const bordersData = await bordersRes.json();
            setNeighbors(Array.isArray(bordersData) ? bordersData : []);
          }
        } else {
          setNeighbors([]);
        }
      } catch (err) {
        setError(err.message);
        setCountry(null);
        setNeighbors([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  return (
    <Container
      className="countryWrapper"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Box className="backDiv" sx={{ paddingTop: 8 }}>
        <Button
          sx={{ margin: 0, p: 0 }}
          component={Link}
          to="/"
          variant="text"
          color="palette.contrastText"
        >
          {mode === "light" ? ArrowDark : ArrowLeft}{" "}
          <Typography sx={{ marginLeft: "16px", fontWeight: "700" }}>
            {" "}
            Back{" "}
          </Typography>
        </Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 8, md: 16 }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            width={{ xs: "300px", md: "550px" }}
            sx={{
              height: { xs: "200px", md: "350px "},
              boxShadow: 6,
              borderRadius: "12px",
            }}
          />
        ) : (
          <Grid
            size={{ xs: 10, md: 6 }}
            sx={{
              height: { xs: 200, md: 350 },
              boxShadow: 6,
              objectFit: "cover",
              borderRadius: "12px",
            }}
            component="img"
            src={country.flags?.svg}
            alt={country.name?.common}
          />
        )}

        <Grid
          className="infoContainer"
          size={{ xs: 10, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" marginBottom={4} paddingLeft="12px">
            {isLoading ? (
              <Skeleton variant="text" width="70%" />
            ) : (
              country?.name?.common
            )}
          </Typography>

          <Grid
            className="listContainer"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Grid
              size={{ xs: 12, md: 8 }}
              component={List}
              className="listOne"
              fontSize={{ xs: 12, md: 14 }}
            >
              <ListItem>
                <Typography variant="body2">
                  {" "}
                  Region: {"  "}
                  {isLoading ? (
                    <Skeleton variant="text" width="60%" />
                  ) : (
                    country?.region
                  )}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  Capital:{"  "}
                  {isLoading ? (
                    <Skeleton variant="text" width="60%" />
                  ) : (
                    country?.capital?.[0]
                  )}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  Population:{"  "}
                  {isLoading ? (
                    <Skeleton variant="text" width="60%" />
                  ) : (
                    `${country?.population?.toLocaleString()}`
                  )}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Languages:{"  "}
                  {isLoading ? (
                    <Skeleton variant="text" width="60%" />
                  ) : (
                    Object.values(country.languages || {}).join(", ")
                  )}
                </Typography>
              </ListItem>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} component={List} className="listTwo">
              <ListItem>
                <Typography variant="body2">
                  Currencies:{"  "}
                  {isLoading ? (
                    <Skeleton variant="text" width="60%" />
                  ) : (
                    country.currencies?.[Object.keys(country.currencies)[0]]
                      ?.name
                  )}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  Native name:{"  "}
                  {isLoading ? (
                    <Skeleton variant="text" width="60%" />
                  ) : (
                    country.name.nativeName?.[
                      Object.keys(country.name.nativeName)[0]
                    ].common
                  )}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  Top Level Domain :{"  "}
                  {isLoading ? (
                    <Skeleton variant="text" width="60%" />
                  ) : (
                    country.tld?.[0]
                  )}{" "}
                </Typography>
              </ListItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "32px",
        }}
      >
        <Typography component="h5" variant="h5" sx={{ marginBottom: "12px" }}>
          Border Countries:{" "}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "12px",
            display: "flex",

            gap: "4px",
          }}
        >
          {isLoading ? (
            <>
              <Skeleton variant="rounded" width={80} height={36} />
              <Skeleton variant="rounded" width={80} height={36} />
              <Skeleton variant="rounded" width={80} height={36} />
            </>
          ) : neighbors.length > 0 ? (
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
            <Typography variant="p">No Border Countries</Typography>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default Country;
