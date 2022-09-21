import React from 'react';
import Box from '@mui/material/Box';
import Nav from './Nav';
import Routes from './Routes';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'secondary.light',
  height: '100vh',
};

function Layout() {
  return (
    <Box data-testid="layout" sx={style}>
      <Nav />
      <Routes />
    </Box>
  );
}

export default Layout;
