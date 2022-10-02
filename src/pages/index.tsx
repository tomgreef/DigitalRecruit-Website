import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { FC } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { theme } from "../theme";
import { StaticImage } from "gatsby-plugin-image";

const Home: FC = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: theme.palette.secondary.main, minHeight: "80vh" }}>
        <Container component="main">
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Typography variant="h2" sx={{ color: theme.palette.background.paper, fontWeight: "lighter" }}>
                WORK BETTER. LIVE BETTER.
              </Typography>
              <Typography variant="h1" sx={{ color: theme.palette.background.paper }}>
                Remote jobs for anyone, anywhere
              </Typography>
              <Typography variant="h3" sx={{ color: theme.palette.background.paper }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, odit ea. Odit, esse unde? Debitis, quis aut. Recusandae, eum harum enim fugiat adipisci alias officiis, officia, quaerat quo non animi!
              </Typography>
              <Button variant="contained">Recruit with us</Button>
            </Grid>
            <Grid item xs={5}>
              {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
              <StaticImage alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair" src="../images/key_points.svg" />
            </Grid>
          </Grid>
        </Container>
      </Box>
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
