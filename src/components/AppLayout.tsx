import React, { ReactNode } from 'react';
import Container from '@mui/material/Container';
import Stack, { StackProps } from '@mui/material/Stack';
import Header from './Header';

type Props = {
  children?: ReactNode;
};

const contentStyle: StackProps = {
  direction: 'row',
  flex: 1,
  height: '100%',
  overflow: 'hidden',
};

function AppLayout({ children, ...rest }: Props) {
  return (
    <Stack height="100%" {...rest}>
      <Header />
      <Stack {...contentStyle}>
        <Container>{children}</Container>
      </Stack>
    </Stack>
  );
}

export default AppLayout;
