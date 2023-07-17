import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ErrorPage from './pages/ErrorPage';
// import { loader as categoriesLoader } from './components/CategoriesPageContent/SelectCategories/SelectCategories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'categories',
        element: <CategoriesPage />,
        // loader: categoriesLoader,
      },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
