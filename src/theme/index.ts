import { createTheme } from '@mui/material/styles';
import { components } from './components';
import { baseTheme } from './baseTheme';

export default createTheme({
  ...baseTheme,
  components,
});
