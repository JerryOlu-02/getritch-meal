import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = function ({ component: Component, ...rest }) {
  const user = useSelector(({ user: { currentUser } }) => currentUser);

  return <>{user ? <Component {...rest} /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
