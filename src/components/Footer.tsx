import { Box, Container, Grid } from "@mui/material";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { StyledFooterLink, theme } from "../theme";

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
  const { t } = useTranslation();

  return (
    <Box>
      <Container component="footer" sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Grid container direction="column" gap={theme.spacing(2)}>
          <Grid item sx={category}>
            {t("Company")}
          </Grid>
          {COMPANY_ROUTES.map((route) => (
            <Grid item>
              <StyledFooterLink to={route.to}>{t(route.label)}</StyledFooterLink>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" gap={theme.spacing(2)}>
          <Grid item sx={category}>
            {t("Social")}
          </Grid>
          {SOCIAL_ROUTES.map((route) => (
            <Grid item>
              <StyledFooterLink to={route.to}>{route.label}</StyledFooterLink>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" gap={theme.spacing(2)}>
          <Grid item sx={category}>
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

const category = { marginBottom: 8, fontWeight: "bold" };

export default Footer;
