import React, { ComponentType, useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';

type Props = {
  icon?: ComponentType;
  path: string;
  title?: string;
  open?: boolean;
  selected: boolean;
};

function SidebarNavLink({ icon, path, title, open, selected }: Props) {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <Tooltip
      open={showToolTip}
      onOpen={() => setShowToolTip(!open)}
      onClose={() => setShowToolTip(false)}
      title={title}
      placement="right"
    >
      <ListItemButton key={path} selected={selected}>
        <ListItemIcon>{icon && <SvgIcon component={icon} />}</ListItemIcon>
        {open && <ListItemText primary={title} />}
      </ListItemButton>
    </Tooltip>
  );
}

export default SidebarNavLink;
