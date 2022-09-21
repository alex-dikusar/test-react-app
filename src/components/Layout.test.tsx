import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('renders layout', () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>,
  );
  expect(screen.getByTestId('layout')).toBeInTheDocument();
});
