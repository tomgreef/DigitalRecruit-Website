import { FormGroup, FormControlLabel, useTheme, Typography, Switch, Box, PaletteMode } from "@mui/material";
import { Link } from "gatsby";
import React, { FC } from "react";

type NavbarProps = {
  colorModeState: [PaletteMode, React.Dispatch<React.SetStateAction<PaletteMode>>];
};

const Navbar: FC<NavbarProps> = ({ colorModeState }) => {
  const theme = useTheme();
  const [colorMode, setColorMode] = colorModeState;

  return (
    <Box component="nav" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography variant="h3" sx={{ fontSize: theme.typography.h4 }}>
        Digital Recruit
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <FormGroup>
          <FormControlLabel control={<Switch checked={colorMode === "dark"} onChange={() => setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"))} />} label="Dark Mode" />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Navbar;
