import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

export const baseTheme = createTheme({
  palette,
  typography,
  spacing: (factor: number) => `${factor}rem`,
});
