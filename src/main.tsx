import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { PeopleProvider } from '@/context/PeopleContext';
import { TodosProvider } from '@/context/TodosContext';
import './index.css';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PeopleProvider>
      <TodosProvider>
        <RouterProvider router={router} />
      </TodosProvider>
    </PeopleProvider>
  </StrictMode>,
);
