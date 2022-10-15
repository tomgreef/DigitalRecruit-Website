import { alpha, createTheme, styled } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

export const theme = createTheme({
  palette: {
    background: { default: "#FDF8F2", paper: "#FFFFFF" },
    secondary: { main: "#273489" },
    primary: { main: "#DF6F13" },
  },
  typography: {
    fontSize: 16,
    fontFamily: ["League Spartan", "sans-serif"].join(","),
    h1: {
      fontSize: 40,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 32,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 24,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 24,
          paddingTop: "5vh",
          paddingBottom: "10vh",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          paddingRight: 24,
          paddingLeft: 24,
          borderRadius: 24,
          fontWeight: "bold",
          whiteSpace: "nowrap",
          color: "black",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },
  },
});

type StyledLinkProps = {
  children: React.ReactNode;
  to: string;
  key?: string;
};
export const StyledNavbarLink = styled((props: StyledLinkProps) => <Link {...props} to={props.to} key={props.key} />)`
  color: white;
  text-decoration: none;
`;

export const StyledFooterLink = styled((props: StyledLinkProps) => <Link {...props} to={props.to} key={props.key} />)`
  color: black;
  text-decoration: none;
`;
