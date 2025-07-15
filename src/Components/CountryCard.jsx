import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box, Grid, Skeleton } from "@mui/material";
const CountryCard = ({ country, isLoading }) => {
  return (
    <Grid>
      <Paper
        component={isLoading ? "div" : Link}
        to={isLoading ? undefined : `/country/${country.cca3}`}
        elevation={3}
        sx={{
          width: "300px",
          textDecoration: "none",
          paddingBottom: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "8px",
          borderRadius: "12px 12px 0px 0px",
          textAlign: "left",
        }}
      >
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            sx={{
              width: "100%",
              height: 150,
              borderRadius: "12px 12px 0 0",
              margin: 0,
              p: 0,
            }}
          />
        ) : (
          <Box
            component="img"
            src={country.flags.png}
            alt={country.name.common}
            sx={{
              p: 0,
              margin: 0,
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "12px 12px 0px 0px",
            }}
          />
        )}

        {/* Name */}
        <Typography paddingLeft={1} variant="h6" component="h2" fontFamily="Open sans" sx={{width:"100%"}}>
          {isLoading ? (
            <Skeleton variant="text" width="70%"/>
          ) : (
            country?.name?.common
          )}
        </Typography>

        {/* Region */}
        <Typography paddingLeft={1} variant="body1" component="p">
          Region:{" "}
          {isLoading ? (
            <Skeleton variant="text" sx={{ width: 80, display: "inline-block" }} />
          ) : (
            country?.region
          )}
        </Typography>

        {/* Capital */}
        <Typography paddingLeft={1} variant="body1" component="p">
          Capital:{" "}
          {isLoading ? (
            <Skeleton variant="text" sx={{ width: 60, display: "inline-block" }} />
          ) : (
            country?.capital
          )}
        </Typography>

        {/* Population */}
        <Typography paddingLeft={1} variant="body1" component="p">
          Population:{" "}
          {isLoading ? (
            <Skeleton variant="text" sx={{ width: 100, display: "inline-block" }} />
          ) : (
            `${country?.population?.toLocaleString()} people`
          )}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default CountryCard;