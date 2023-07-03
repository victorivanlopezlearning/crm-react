import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // createBrowserRouter define un router por medio de objetos

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 className='text-3xl font-bold'>CRM</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)