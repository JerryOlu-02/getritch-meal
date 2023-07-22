import './sass/Register.scss';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { changeEmail, changePassword } from '../../utils/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const UpdateProfile = function () {
  const supabase = useSupabaseClient();
  const navigate = useNavigate();
  const currentUser = useSelector(({ user: { currentUser } }) => currentUser);

  // PASSWORD INPUT STATE
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState('');
  const [customError, setCustomError] = useState(null);

  const [isLoading, setLoading] = useState(false);

  const handleInputChange = function () {
    setShowPassword((currentValue) => {
      return !currentValue;
    });
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string(),
    confirmPassword: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const submitForm = async function (data) {
    // Check if passwords match
    if (data.password !== data.confirmPassword) {
      return setCustomError('Passwords do not match');
    }

    // if (data.email === currentUser.email) {
    //   // promises.push(changeEmail(currentUser, data.email));
    //   return;
    // }
    // if (!data.password) {
    //   // promises.push(changePassword(currentUser, data.password));
    //   return;
    // }

    try {
      setLoading(true);
      setCustomError('');

      if (data.email !== currentUser.email) {
        const { error } = await supabase.auth.updateUser({ email: data.email });

        if (error) throw new Error(error.message);
        setSuccess('An Email has been sent. Kindly confirm new email address');
      }

      if (data.password) {
        const { error } = await supabase.auth.updateUser({
          password: data.password,
        });

        if (error) throw new Error(error.message);

        // Navigate to profile if Succesful
        navigate('/profile');
      }
    } catch (error) {
      setCustomError(error.message);
    }

    setLoading(false);
  };

  return (
    <section className="registration">
      <h2>UPDATE YOUR DETAILS</h2>

      <form onSubmit={handleSubmit(submitForm)} className="registration-form">
        {customError && <div className="alert failed">{customError}</div>}
        {success && <div className="alert success">{success}</div>}

        {!showPassword && (
          <>
            <aside>
              <label>Email Address:</label>
              <input
                defaultValue={currentUser.email}
                type="text"
                {...register('email')}
              />
              {errors.email && <span>{errors.email?.message}</span>}
            </aside>
          </>
        )}

        {showPassword && (
          <>
            <aside>
              <label>Password</label>
              <input
                placeholder="Leave input empty to keep the same"
                type="password"
                {...register('password')}
              />
              {errors.password && <span>{errors.password?.message}</span>}
            </aside>

            <aside>
              <label>Confirm Password</label>
              <input
                placeholder="Leave input empty to keep the same"
                type="password"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <span>{errors.confirmPassword?.message}</span>
              )}
            </aside>
          </>
        )}

        <Button loading={isLoading} disabled={isLoading} type="submit">
          Update Details
        </Button>

        <p onClick={handleInputChange}>
          {showPassword ? 'Change Email' : 'Change Password'}
        </p>
      </form>

      <Link to="/profile">Cancel</Link>
    </section>
  );
};

export default UpdateProfile;
