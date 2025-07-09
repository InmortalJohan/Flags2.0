import { Box, Container, Grid,Paper } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
const TestRoute = () => {
  return (
    <>
      <Container maxWidth="sm">TestRoute</Container>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item>xs=6 md=8</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TestRoute;
