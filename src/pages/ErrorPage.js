import { useRouteError } from 'react-router-dom';

const ErrorPage = function () {
  const error = useRouteError();
  console.log(error);

  let status;
  let message = 'An Error Occured';

  if (error.status >= 400) {
    status = error.status;
    message = error.data.message;
  }

  if (error.status === 404) {
    status = 404;
    message = 'Could not find route';
  }

  return (
    <section>
      <h3>Error {status}</h3>
      <p>{message}</p>
    </section>
  );
};

export default ErrorPage;
