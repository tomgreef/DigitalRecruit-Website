// import { FormGroup, FormControlLabel, useTheme } from '@mui/material'
import { Link } from 'gatsby'
import React, { FC } from 'react'
// import { Button, Switch } from 'theme-ui'
import { ColorMode } from './Layout'

type NavbarProps = {
  toggleColorMode: () => void
}

const Navbar: FC<NavbarProps> = ({ toggleColorMode }) => {
  // const theme = useTheme();

  return (
    <nav>
      <h1>Digital Recruit</h1>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <FormGroup>
          <FormControlLabel control={<Switch checked={theme.palette.mode === ColorMode.DARK}
            onChange={toggleColorMode} />} label="Dark Mode" />
        </FormGroup>
        <Button onClick={toggleColorMode}></Button> */}
      </div>
    </nav>
  )
}

export default Navbar