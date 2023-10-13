import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { SIDEBAR_CLOSED_SIZE, SIDEBAR_OPEN_SIZE } from './constants';
import SidebarFooter from './SidebarFooter';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const width = isOpen ? SIDEBAR_OPEN_SIZE : SIDEBAR_CLOSED_SIZE;

  return (
    <Drawer sx={{ width }}>
      <SidebarFooter open={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
    </Drawer>
  );
}

export default Sidebar;
