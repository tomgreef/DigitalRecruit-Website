import { Box, Button, Container } from "@mui/material";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { FC } from "react";
import { StyledNavbarLink, theme } from "../theme";
import LanguageSelector from "./LanguageSelector";

const Navbar: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Container component="nav" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <StaticImage src="../images/logo.png" alt="Digital Recruit logo" width={50} height={50} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <StyledNavbarLink to="/">{t("Home")}</StyledNavbarLink>
          <StyledNavbarLink to="/about">{t("About")}</StyledNavbarLink>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button variant="contained" onClick={() => navigate("/contact")}>
            {t("Contact")}
          </Button>
          <Button variant="contained">{t("Job Board")}</Button>
          <LanguageSelector />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
