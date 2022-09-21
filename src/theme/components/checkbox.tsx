import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as CheckboxBlankIcon } from 'src/assets/checkbox-blank.svg';
import { ReactComponent as CheckboxSelectedIcon } from 'src/assets/checkbox-selected.svg';
import { baseTheme } from '../baseTheme';

const { palette } = baseTheme;

export default {
  defaultProps: {
    checkedIcon: <SvgIcon component={CheckboxSelectedIcon} />,
    icon: <SvgIcon component={CheckboxBlankIcon} />,
    size: 'small',
  },
  styleOverrides: {
    root: {
      '&:hover': {
        color: palette.primary.light,
      },
    },
  },
};
