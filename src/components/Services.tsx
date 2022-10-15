import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";

type Services = {
  title: string;
  description: string;
  image: string;
};

const SERVICES: Services[] = [
  { title: "Struggling with specific roles?", description: "Some roles are more difficult to fill, such as tech, executive, etc. This calls for a specialised recruiter or a headhunter.", image: "" },
  { title: "Lack of time? Too much work?", description: "Feeling overwhelmed with recruiting or HR tasks? Pay by the hour or per project and get extra help.", image: "" },
  { title: "Hiring abroad? Need market insight?", description: "Hiring in another region or opening a new office is much easier with the help & know-how from a local recruiter.", image: "" },
];

const Services = () => {
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Container component="main" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h1">We deliver HR outsorcing service</Typography>
        <Typography variant="h3" sx={{ paddingBottom: theme.spacing(4) }}>
          These are the features that make our templates stand-out
        </Typography>
        <Grid container spacing={4} justifyContent="space-evenly">
          {SERVICES.map((service) => (
            <Grid item xs={12} sm={6} md={12 / SERVICES.length} key={service.title}>
              <Card sx={{ height: "50vh" }}>
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
