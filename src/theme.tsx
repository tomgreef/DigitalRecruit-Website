import { createTheme, styled } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

export const theme = createTheme({
  palette: {
    background: { default: "white" },
    secondary: { main: "#15227E" },
    primary: { main: "#F27507" },
  },
  typography: {
    fontSize: 16,
    fontFamily: ["Roboto", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 24,
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
        },
      },
    },
  },
});

type StyledLinkProps = {
  children: React.ReactNode;
  to: string;
};
export const StyledNavbarLink = styled((props: StyledLinkProps) => <Link {...props} to={props.to} />)`
  color: white;
  text-decoration: none;
`;

export const StyledFooterLink = styled((props: StyledLinkProps) => <Link {...props} to={props.to} />)`
  color: black;
  text-decoration: none;
`;
