import { Components } from '@mui/material/styles';
import MuiCssBaseline from './global';
import MuiButton from './button';
import MuiCheckbox from './checkbox';
import MuiList from './list';
import MuiTable from './table';

export const components = {
  MuiCssBaseline,
  MuiButton,
  MuiCheckbox,
  ...MuiList,
  ...MuiTable,
} as Partial<Components>;
