import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './layout/MainLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import ListedBooks from './pages/ListedBooks/ListedBooks';
import PagestoRead from './pages/PagestoRead/PagestoRead';
import BookDetails from './pages/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/page-read",
        element: <PagestoRead></PagestoRead>
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: fetch('./books.json')
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
