import { baseTheme } from '../baseTheme';

const { palette, spacing, typography } = baseTheme;
const borderWidth = spacing(0.2);

export default {
  defaultProps: {
    color: 'primary',
    disableFocusRipple: true,
    disableRipple: true,
    size: 'large',
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
    endIcon: {
      marginLeft: 0,
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: palette.primary.light,
      },
      '&:active': {
        backgroundColor: palette.primary.dark,
      },
    },
    outlined: {
      borderWidth,
    },
    outlinedPrimary: {
      borderColor: palette.primary.main,
      '&:hover': {
        borderWidth,
        borderColor: palette.primary.light,
        color: palette.primary.light,
      },
      '&:active': {
        borderWidth,
        borderColor: palette.primary.dark,
        color: palette.primary.dark,
      },
      '&.Mui-disabled': {
        borderWidth,
      },
    },
    sizeSmall: {
      fontSize: typography.body2.fontSize,
      minHeight: spacing(3.6),
      paddingInline: spacing(2),
    },
    sizeLarge: {
      fontSize: typography.body2.fontSize,
      minHeight: spacing(4.9),
      paddingInline: spacing(3),
    },
  },
};
