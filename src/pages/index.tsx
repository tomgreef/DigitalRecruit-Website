import * as React from "react";
import { graphql, HeadFC } from "gatsby";
import Layout from "../components/Layout";
import { FC } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { theme } from "../theme";
import Image from "../images/mindfulness.svg"; // Import using relative path

const Home: FC = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: theme.palette.secondary.main, minHeight: "50vh", backgroundImage: `url(${Image})` }}>
        <Container component="main">
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
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Home - DigitalRecruit</title>;

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
