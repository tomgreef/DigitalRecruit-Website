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
