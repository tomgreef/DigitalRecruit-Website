import { ThemeProvider } from "@emotion/react";
import { useMediaQuery, PaletteMode, createTheme, CssBaseline } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const userDarkModePreference: boolean = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<PaletteMode>(userDarkModePreference ? "dark" : "light");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar colorModeState={[mode, setMode]} />
      {props.children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
