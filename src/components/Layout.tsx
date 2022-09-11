// import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export enum ColorMode {
  LIGHT = 'light',
  DARK = 'dark'
}

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  // const userPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // console.log(userPrefersDarkMode)
  // const [mode, setMode] = React.useState<ColorMode>(ColorMode.LIGHT);

  // const toggleColorMode = () => {
  //   setMode((prevMode) => (prevMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT));
  //   return mode
  // }

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //       breakpoints: {
  //         values: {
  //           xs: 0,
  //           sm: 600,
  //           md: 900,
  //           lg: 1200,
  //           xl: 1536,
  //         },
  //       }
  //     }),
  //   [mode],
  // );

  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    <>
      <Navbar toggleColorMode={() => { }} />
      <div className='content'>
        {props.children}
      </div>
      <Footer />
    </>
    // </ThemeProvider>
  )
}

export default Layout