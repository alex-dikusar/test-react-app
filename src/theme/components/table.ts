import { baseTheme } from '../baseTheme';

const { spacing, typography } = baseTheme;

export default {
  MuiTable: {
    styleOverrides: {
      root: {
        borderTopLeftRadius: spacing(0.4),
        borderTopRightRadius: spacing(0.4),
        overflow: 'hidden',
        tableLayout: 'fixed',
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        overflow: 'initial',
        position: 'relative',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        textAlign: 'left',
        verticalAlign: 'center',
        padding: spacing(0.5, 1.5),
        height: spacing(5),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...typography.body2,
      },
    },
  },
};
