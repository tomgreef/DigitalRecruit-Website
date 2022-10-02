import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div>Contact</div>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Contact Us - Digital Recruit</title>
    <meta name="description" content="Your description" />
  </>
);

export default Contact;
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
