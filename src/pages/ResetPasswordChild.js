import Modal from '../components/Modal';
import Button from '../components/Button/Button';
import { useReducer, useEffect } from 'react';
import { reducer } from '../utils/helperFunc';
import { supabase } from '../supabaseClient';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';

export default function ResetPasswordChild() {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, {
    message: '',
    error: '',
    isLoading: false,
    showModal: false,
  });
  console.log(state);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        dispatch({ type: 'set_show_modal', payload: true });

        // const newPassword = prompt(
        //   'What would you like your new password to be?'
        // );
        // const { data, error } = await supabase.auth.updateUser({
        //   password: newPassword,
        // });
        // if (data) alert('Password updated successfully!');
        // if (error) alert('There was an error updating your password.');
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const closeModal = function () {
    dispatch({ type: 'set_show_modal', payload: false });
  };

  const validationSchema = yup.object().shape({
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const submitForm = async function (data) {
    if (data.password !== data.confirmPassword)
      setError('passwordError', {
        type: 'custom',
        message: 'Passwords do not match',
      });

    try {
      dispatch({ type: 'set_error', payload: '' });
      dispatch({ type: 'set_message', payload: '' });
      dispatch({ type: 'set_is_loading', payload: true });

      const { error } = await supabase.auth.updateUser({
        password: data.password,
      });

      if (error) throw new Error(error.message);

      // Navigate to profile if Successful
      navigate('/profile');
      closeModal();
    } catch (error) {
      dispatch({ type: 'set_error', payload: error.message });
    }

    reset();
    dispatch({ type: 'set_is_loading', payload: false });
  };

  return (
    <section>
      <Modal classes={state.showModal && 'show'} onClose={closeModal}>
        {state.showModal && (
          <form onSubmit={handleSubmit(submitForm)}>
            <aside>
              <label>Password</label>
              <input type="text" {...register('password')} />
              {errors.email && <span>{errors.password?.message}</span>}
            </aside>
            <aside>
              <label>Confirm Password</label>
              <input type="text" {...register('confirmPassword')} />
              {errors.email && <span>{errors.confirmPassword?.message}</span>}
            </aside>
            <Button
              loading={state.isLoading}
              disabled={state.isLoading}
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </Modal>
    </section>
  );
}
