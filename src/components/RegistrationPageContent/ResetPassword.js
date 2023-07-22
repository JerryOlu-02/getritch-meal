import './sass/Register.scss';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { resetPassword } from '../../utils/auth';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { reducer } from '../../utils/helperFunc';

const ResetPassword = function () {
  const supabase = useSupabaseClient();
  const [state, dispatch] = useReducer(reducer, {
    message: '',
    error: '',
    isLoading: false,
  });

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
      dispatch({ type: 'set_error', payload: '' });
      dispatch({ type: 'set_message', payload: '' });
      dispatch({ type: 'set_is_loading', payload: true });

      // await resetPassword(data.email);
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: 'http://localhost:3000/password-reset/',
      });

      if (error) throw new Error(error.message);

      dispatch({
        type: 'set_message',
        payload: 'A link has been sent to your email to reset password',
      });
    } catch (error) {
      dispatch({ type: 'set_error', payload: error.message });
    }

    reset();
    dispatch({ type: 'set_is_loading', payload: false });
  };

  return (
    <section className="registration">
      <h2>RESET YOUR PASSWORD</h2>

      <form onSubmit={handleSubmit(submitForm)} className="registration-form">
        {state.error && <div className="alert failed">{state.error}</div>}
        {state.message && <div className="alert success">{state.message}</div>}

        <aside>
          <label>Email Address:</label>
          <input type="text" {...register('email')} />
          {errors.email && <span>{errors.email?.message}</span>}
        </aside>

        <Button
          loading={state.isLoading}
          disabled={state.isLoading}
          type="submit"
        >
          Reset Password
        </Button>
      </form>

      <Link to="/login">Login </Link>

      <Link to="/sign-up">Don't have an account? Sign Up</Link>
    </section>
  );
};

export default ResetPassword;
