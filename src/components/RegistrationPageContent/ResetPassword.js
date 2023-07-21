import './sass/Register.scss';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { resetPassword } from '../../utils/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = function () {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const submitForm = async function (data) {
    try {
      setError('');
      setMessage('');

      setLoading(true);

      await resetPassword(data.email, data.email);

      setMessage('A link has been sent to your email to reset password');
    } catch (error) {
      setError(error.message);
    }

    reset();
    setLoading(false);
  };

  return (
    <section className="registration">
      <h2>RESET YOUR PASSWORD</h2>

      <form onSubmit={handleSubmit(submitForm)} className="registration-form">
        {error && <div className="alert failed">{error}</div>}
        {message && <div className="alert success">{message}</div>}

        <aside>
          <label>Email Address:</label>
          <input type="text" {...register('email')} />
          {errors.email && <span>{errors.email?.message}</span>}
        </aside>

        <Button loading={isLoading} disabled={isLoading} type="submit">
          Reset Password
        </Button>
      </form>

      <Link to="/login">Login </Link>

      <Link to="/sign-up">Don't have an account? Sign Up</Link>
    </section>
  );
};

export default ResetPassword;
