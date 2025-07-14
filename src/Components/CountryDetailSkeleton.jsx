import { Container, Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

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

const CountryDetailSkeleton = () => {
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
          disabled
        >
          {ArrowLeft}
          <Typography sx={{ marginLeft: "16px", fontWeight: "700" }}>
            Back
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
          marginTop: "40px"
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: { xs: 200, md: 350 },
            boxShadow: 6,
            objectFit: "cover",
            borderRadius: "12px",
            width: '100%',
            maxWidth: 400,
            margin: '0 auto',
          }}
        >
          <div className="skeleton" style={{ width: '100%', height: '100%', minHeight: 200, borderRadius: 12 }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="infoContainer"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: '100%',
            maxWidth: 500,
            margin: '0 auto',
          }}
        >
          <Typography variant="h4" marginBottom={4} paddingLeft="12px" >
            <div className="skeleton" style={{ width: '60%', height: 40, borderRadius: 8 }} />
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
            <Grid item xs={12} md={8} sx={{ minWidth: 120 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontWeight: 500, marginRight: 6 }}>Region:</span>
                <div className="skeleton" style={{ width: 80, height: 18 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontWeight: 500, marginRight: 6 }}>Capital:</span>
                <div className="skeleton" style={{ width: 80, height: 18 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontWeight: 500, marginRight: 6 }}>Population:</span>
                <div className="skeleton" style={{ width: 100, height: 18 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontWeight: 500, marginRight: 6 }}>Languages:</span>
                <div className="skeleton" style={{ width: 120, height: 18 }} />
              </div>
            </Grid>
            <Grid item xs={12} md={8} sx={{ minWidth: 120 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontWeight: 500, marginRight: 6 }}>Currencies:</span>
                <div className="skeleton" style={{ width: 80, height: 18 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontWeight: 500, marginRight: 6 }}>Native name:</span>
                <div className="skeleton" style={{ width: 100, height: 18 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontWeight: 500, marginRight: 6 }}>Top Level Domain:</span>
                <div className="skeleton" style={{ width: 60, height: 18 }} />
              </div>
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
          Border Countries:
        </Typography>
        <Grid container spacing={1} sx={{ flexWrap: 'wrap', alignItems: 'center', marginBottom: '12px', gap: '4px' }}>
          {[1,2,3].map((i) => (
            <Grid item key={i}>
              <div className="skeleton" style={{ width: 80, height: 32, borderRadius: 8 }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CountryDetailSkeleton;