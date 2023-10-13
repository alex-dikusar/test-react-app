import React from 'react';
import IconButton from '@mui/material/IconButton';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

type Props = {
  open?: boolean;
  toggleOpen: () => void;
};

function SidebarFooter({ open, toggleOpen }: Props) {
  return (
    <IconButton
      onClick={toggleOpen}
      sx={{ alignSelf: 'flex-end', mt: 'auto', mr: 1 }}
    >
      {open ? <ChevronLeftOutlinedIcon /> : <ChevronRightOutlinedIcon />}
    </IconButton>
  );
}

export default SidebarFooter;
