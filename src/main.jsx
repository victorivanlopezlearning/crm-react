import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NewClient, { action as actionNewClient } from './pages/NewClient';
import Home, { loader as clientsLoader} from './pages/Home';
import ErrorBoundary from './pages/ErrorBoundary';
import EditClient, { loader as EditClientLoader, action as EditClientAction } from './pages/EditClient';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: clientsLoader,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: actionNewClient,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/clients/:clientId/edit',
        element: <EditClient />,
        loader: EditClientLoader,
        action: EditClientAction,
        errorElement: <ErrorBoundary />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)