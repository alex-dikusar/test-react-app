import { baseTheme } from '../baseTheme';

const { palette, spacing, typography } = baseTheme;

export default {
  MuiList: {
    defaultProps: {
      disablePadding: true,
    },
    styleOverrides: {
      root: {
        maxHeight: spacing(55),
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        ...typography.body2,
        padding: spacing(1, 1.6),
        overflowX: 'hidden',
        whiteSpace: 'normal',
        '&.Mui-selected:not(:hover)': {
          backgroundColor: palette.primary.main,
        },
        '+.MuiDivider-root': {
          margin: 0,
        },
      },
    },
  },
};
