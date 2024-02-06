import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HeaderUserMenu from './HeaderUserMenu';

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Stack direction="row" alignItems="center" gap={1}>
          Settings
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <HeaderUserMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
