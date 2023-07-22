import './sass/Register.scss';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { signUp } from '../../utils/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Register = function () {
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  // const [message, setMessage] = useState('');
  const [customError, setCustomError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const submitForm = async function (data) {
    // Check if passwords match
    if (data.password !== data.confirmPassword) {
      return setError('passwordError', {
        type: 'custom',
        message: 'Passwords do not match',
      });
    }

    try {
      setCustomError(null);
      setLoading(true);

      // await signUp(data.email, data.password);
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) throw new Error(error.message);

      // setMessage(
      //   'Account Created Succesfully. An email has been sent to you, kindly verify your mail and login access your account'
      // );
      navigate('/', { replace: true });
    } catch (error) {
      setCustomError(error.message);
    }

    setLoading(false);
  };

  return (
    <section className="registration">
      <h2>CREATE AN ACCOUNT</h2>

      <form onSubmit={handleSubmit(submitForm)} className="registration-form">
        {customError && <div className="alert failed">{customError}</div>}
        {/* {message && <div className="alert success">{message}</div>} */}

        <aside>
          <label>Email Address:</label>
          <input type="text" {...register('email')} />
          {errors.email && <span>{errors.email?.message}</span>}
        </aside>

        <aside>
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <span>{errors.password?.message}</span>}
          {errors.passwordError && <span>{errors.passwordError?.message}</span>}
        </aside>

        <aside>
          <label>Confirm Password</label>
          <input type="password" {...register('confirmPassword')} />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword?.message}</span>
          )}
        </aside>

        <Button loading={isLoading} disabled={isLoading} type="submit">
          Sign Up
        </Button>
      </form>

      {/* <p>Forgot your password?</p> */}

      <Link to="/login">Already have an account? Sign In</Link>
    </section>
  );
};

export default Register;
