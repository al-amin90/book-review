import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './layout/MainLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
