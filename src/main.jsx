import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NewClient, { action as actionNewClient } from './pages/new-client';
import Index, { loader as clientsLoader} from './pages';
import ErrorBoundary from './pages/ErrorBoundary';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/cliente/nuevo',
        element: <NewClient />,
        action: actionNewClient
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)