import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { StyledFooterLink, theme } from "../theme";

// TODO: Add pages to missing links

export type Route = {
  label: string;
  to: string;
};

const COMPANY_ROUTES: Route[] = [
  { label: "Vacancies", to: "/about" },
  { label: "WhoWeAre", to: "/about" },
  { label: "HirePeople", to: "/about" },
  { label: "Contacto", to: "/contact" },
];

const SOCIAL_ROUTES: Route[] = [
  { label: "LinkedIn", to: "/" },
  { label: "Facebook", to: "/" },
];

const LEGAL_ROUTES: Route[] = [
  { label: "TermsAndConditions", to: "/" },
  { label: "PrivacyPolicy", to: "/" },
];

const Footer: FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <Box>
      <Container component="footer">
        <Grid container>
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item sx={category}>
                {t("Company")}
              </Grid>
              {COMPANY_ROUTES.map((route) => (
                <Grid item key={route.label}>
                  <StyledFooterLink to={route.to}>{t(route.label)}</StyledFooterLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Grid container direction="column" sx={isMobile ? { alignContent: "flex-end", textAlign: "right" } : undefined}>
              <Grid item sx={category}>
                {t("Social")}
              </Grid>
              {SOCIAL_ROUTES.map((route) => (
                <Grid item key={route.label}>
                  <StyledFooterLink to={route.to}>{route.label}</StyledFooterLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="column" sx={isMobile ? { paddingTop: theme.spacing(4), alignContent: "center" } : undefined}>
              <Grid item sx={category}>
                {t("Legal")}
              </Grid>
              {LEGAL_ROUTES.map((route) => (
                <Grid item key={route.label}>
                  <StyledFooterLink to={route.to}>{t(route.label)}</StyledFooterLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const category = { marginBottom: theme.spacing(2), fontWeight: "bold" };

export default Footer;
