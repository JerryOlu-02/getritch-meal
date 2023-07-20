import { useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import '../sass/Profile.scss';
import { logOut } from '../utils/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = function () {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const user = useSelector(({ user: { currentUser } }) => currentUser);

  const handleLogout = async function () {
    try {
      await logOut();

      navigate('/login', { replace: true });
    } catch (error) {
      console.log(error);
      setError('Failed to Log-Out');
    }
  };

  return (
    <section className="profile">
      <div>
        {error && <p>{error}</p>}

        <h2>Hi There, {user.email}</h2>

        <Button>Update Profile</Button>
      </div>

      <p onClick={handleLogout}>Log Out</p>
    </section>
  );
};

export default Profile;
