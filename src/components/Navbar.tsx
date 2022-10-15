import { Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { graphql, Link, navigate } from "gatsby";
import { TFunction, useTranslation } from "gatsby-plugin-react-i18next";
import React, { FC, useState } from "react";
import Logo from "../images/svg/logo";
import { StyledNavbarLink, theme } from "../theme";
import { Route } from "./Footer";
import Img from "gatsby-image";
import LanguageSelector from "./LanguageSelector";

const WEBSITE_ROUTES: Route[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];
/* <Logo width={130} height={70} /> */
const Navbar: FC = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery(useTheme().breakpoints.up("md"));

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Container component="nav" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: isDesktop ? theme.spacing(3) : theme.spacing(1) }}>
        {isDesktop ? (
          <>
            {/* <Img fluid={} /> */}
            {/* <Logo width={130} height={70} /> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {WEBSITE_ROUTES.map((route) => (
                <StyledNavbarLink to={route.to} key={route.label}>
                  {t(route.label)}
                </StyledNavbarLink>
              ))}
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
          </>
        ) : (
          <MobileDrawer t={t} />
        )}
      </Container>
    </Box>
  );
};

export default Navbar;

interface MobileDrawerProps {
  t: TFunction<"translation", undefined>;
}

const MobileDrawer: FC<MobileDrawerProps> = ({ t }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: theme.palette.background.paper }} />
      </IconButton>

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} sx={{ width: "50vw", justifyContent: "space-between" }}>
        <Box sx={{ width: "60vw", cursor: "pointer" }}>
          <List component="nav">
            {WEBSITE_ROUTES.map((route) => (
              <ListItem
                key={route.label}
                onClick={() => {
                  setOpenDrawer(false);
                  navigate(route.to);
                }}
              >
                <ListItemText primary={t(route.label)} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            padding: theme.spacing(2),
          }}
        >
          <LanguageSelector />
          <Button variant="contained" onClick={() => navigate("/contact")} fullWidth>
            {t("Contact")}
          </Button>
          <Button variant="contained" fullWidth>
            {t("Job Board")}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
