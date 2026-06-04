import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/AppLayout';
import { PeoplePage } from '@/pages/PeoplePage';
import { TodosPage } from '@/pages/TodosPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/todos" replace /> },
      { path: 'todos', element: <TodosPage /> },
      { path: 'people', element: <PeoplePage /> },
    ],
  },
]);
