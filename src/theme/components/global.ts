import { baseTheme } from '../baseTheme';

const { typography } = baseTheme;

export default {
  styleOverrides: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      ...typography.body2,
    },
  },
};
