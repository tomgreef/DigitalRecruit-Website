import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";

const SERVICES = [
  { title: "Struggling with specific roles?", description: "Some roles are more difficult to fill, such as tech, executive, etc. This calls for a specialised recruiter or a headhunter." },
  { title: "Lack of time? Too much work?", description: "Feeling overwhelmed with recruiting or HR tasks? Pay by the hour or per project and get extra help." },
  { title: "Hiring abroad? Need market insight?", description: "Hiring in another region or opening a new office is much easier with the help & know-how from a local recruiter." },
];

const Services = () => {
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Container component="main" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h1">We deliver HR outsorcing service</Typography>
        <Typography variant="h3">These are the features that make our templates stand-out</Typography>
        <Grid container spacing={1} justifyContent="space-evenly">
          {SERVICES.map((service) => (
            <Grid item xs={12 / SERVICES.length}>
              <Card sx={{ minWidth: 275, height: 500 }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Typography variant="h2">{service.title}</Typography>
                  <Typography>{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
