import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Nav() {
  return (
    <Tabs>
      <Tab component={Link} to="/" label="Home" />
      <Tab component={Link} to="/protected" label="Protected" />
    </Tabs>
  );
}

export default Nav;
