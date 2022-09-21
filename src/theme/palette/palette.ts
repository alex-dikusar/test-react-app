import { colors } from './colors';

export const palette = {
  primary: {
    dark: colors.blue[700],
    main: colors.blue[500],
    light: colors.blue[400],
    contrastText: colors.grayscale[100],
  },
  secondary: {
    main: colors.grayscale[100],
    contrastText: colors.blue[500],
  },
  success: {
    main: colors.green[500],
  },
  error: {
    main: colors.red[500],
  },
  warning: {
    main: colors.orange[500],
  },
  info: {
    main: colors.blue[500],
  },
  neutral: {
    dark: colors.grayscale[800],
    main: colors.grayscale[500],
    light: colors.grayscale[400],
  },
  brand: {
    main: colors.cyan[500],
  },
  black: colors.grayscale[900],
  white: colors.grayscale[100],
  ...colors,
};
