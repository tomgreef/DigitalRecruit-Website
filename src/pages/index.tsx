import * as React from "react";
import { graphql, HeadFC } from "gatsby";
import Layout from "../components/Layout";
import { FC } from "react";
import { Container, Box, Typography } from "@mui/material";
import { theme } from "../theme";

const Home: FC = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: theme.palette.secondary.main, minHeight: "50vh" }}>
        <Container component="main">
          <Typography variant="h1" sx={{ color: theme.palette.background.paper }}>
            Digital Recruit
          </Typography>
          <Typography variant="h2" sx={{ color: theme.palette.background.paper }}>
            Digital Recruit
          </Typography>
          <Typography variant="h3" sx={{ color: theme.palette.background.paper }}>
            Digital Recruit
          </Typography>
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
