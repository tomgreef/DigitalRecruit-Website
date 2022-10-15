import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { FC } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { theme } from "../theme";
import { StaticImage } from "gatsby-plugin-image";
import Services from "../components/Services";

const Home: FC = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Container component="section">
          <Grid container spacing={2}>
            <Grid item xs={7} display="flex" flexDirection="column" justifyContent="space-between">
              <Typography variant="h2" sx={{ color: theme.palette.background.paper, fontWeight: "lighter" }}>
                WORK BETTER. LIVE BETTER.
              </Typography>
              <Typography variant="h1" sx={{ color: theme.palette.background.paper }}>
                The best job conditions for anyone
              </Typography>
              <Typography variant="h3" sx={{ color: theme.palette.background.paper }}>
                Try out our form to compare your conditions to see if there is any vacancy that could improve your life
              </Typography>
              <Button variant="contained" sx={{ width: 240, height: 56 }}>
                Compare conditions
              </Button>
            </Grid>
            <Grid item xs={5}>
              {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
              <StaticImage alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair" src="../images/key_points.svg" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Services />
    </Layout>
  );
};

export default Home;

export const Head = () => (
  <>
    <title>Home - Digital Recruit</title>
    <meta name="description" content="Your description" />
  </>
);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
