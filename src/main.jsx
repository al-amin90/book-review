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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './pages/Store/Store';
import Contact from './pages/Contact/Contact';
import Loader from './pages/Loader/Loader';
import SingIn from './pages/SingIn/SingIn';
import AuthProvider from './routes/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

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
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/page-read",
        element: <PrivateRoute>
          <PagestoRead></PagestoRead>,
        </PrivateRoute>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/buy-book",
        element: <PrivateRoute>
          <Store></Store>,
        </PrivateRoute>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/singIn",
        element: <SingIn></SingIn>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
