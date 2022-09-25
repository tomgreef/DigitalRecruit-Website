import { Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { StyledFooterLink } from "../theme";

// TODO: Add pages to missing links

const COMPANY_ROUTES = [
  { label: "Vacancies", to: "/about" },
  { label: "WhoWeAre", to: "/about" },
  { label: "HirePeople", to: "/about" },
  { label: "Contacto", to: "/contact" },
];

const SOCIAL_ROUTES = [
  { label: "LinkedIn", to: "/" },
  { label: "Facebook", to: "/" },
];

const LEGAL_ROUTES = [
  { label: "TermsAndConditions", to: "/" },
  { label: "PrivacyPolicy", to: "/" },
];

const Footer: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box>
      <Container component="footer" sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Grid container className={classes.column} component="nav">
          <Grid item className={classes.category}>
            {t("Company")}
          </Grid>
          {COMPANY_ROUTES.map((route) => (
            <Grid item>
              <StyledFooterLink to={route.to}>{t(route.label)}</StyledFooterLink>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.column}>
          <Grid item className={classes.category}>
            {t("Social")}
          </Grid>
          {SOCIAL_ROUTES.map((route) => (
            <Grid item>
              <StyledFooterLink to={route.to}>{route.label}</StyledFooterLink>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.column}>
          <Grid item className={classes.category}>
            {t("Legal")}
          </Grid>
          {LEGAL_ROUTES.map((route) => (
            <Grid item>
              <StyledFooterLink to={route.to}>{t(route.label)}</StyledFooterLink>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
const useStyles = makeStyles({
  category: { marginBottom: 8, fontWeight: "bold" },
  column: { flexDirection: "column", gap: 16 },
});

export default Footer;
