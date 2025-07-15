import { Box, Button, Container, Grid,Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import BasicCard from "../Components/BasicCard";

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
  const [isLoading, setIsLoading]=useState(true)
  return (
    <>
      <Container maxWidth="sm">TestRoute</Container>
      <Button onClick={()=>setIsLoading(false)}>click</Button>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 8 }}>
            <BasicCard isLoading={isLoading}/>
            
          </Grid>
          </Grid>

      </Container>
    </>
  );
};

export default TestRoute;
