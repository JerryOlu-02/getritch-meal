import './sass/Register.scss';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signIn } from '../../utils/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = function () {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const submitForm = async function (data) {
    try {
      setLoading(true);

      await signIn(data.email, data.password);

      navigate('/', { replace: true });
    } catch (error) {
      setIsError(error.message);
    }

    setLoading(false);
  };

  return (
    <section className="registration">
      <h2>SIGN INTO YOUR ACCOUNT</h2>

      <form onSubmit={handleSubmit(submitForm)} className="registration-form">
        {isError && <div className="alert failed">{isError}</div>}

        <aside>
          <label>Email Address:</label>
          <input type="text" {...register('email')} />
          {errors.email && <span>{errors.email?.message}</span>}
        </aside>

        <aside>
          <label>Password</label>
          <input type="text" {...register('password')} />
          {errors.password && <span>{errors.password?.message}</span>}
          {errors.passwordError && <span>{errors.passwordError?.message}</span>}
        </aside>

        <Button loading={isLoading} disabled={isLoading} type="submit">
          Sign In
        </Button>
      </form>

      <p>Forgot your password?</p>

      <Link to="/sign-up">Don't have an account? Sign Up</Link>
    </section>
  );
};

export default Login;
