import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ErrorPage from './pages/ErrorPage';
import MealDetailsPage from './pages/MealDetailsPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import Profile from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

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
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },

      {
        path: 'categories',
        element: <CategoriesPage />,
      },

      {
        path: 'meal-details',
        // element: <MealDetailsPage />,
        children: [
          {
            path: ':mealId',
            element: <MealDetailsPage />,
          },
        ],
      },

      {
        path: 'sign-up',
        element: <RegistrationPage />,
      },

      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
