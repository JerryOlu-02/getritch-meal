import { Link } from 'react-router-dom';
import './sass/Navbar.scss';

const Logo = function ({ yellow }) {
  const classes = `logo ${yellow ? 'dim' : ''}`;

  return (
    <li className={classes}>
      <Link to="/">Gerícht</Link>
    </li>
  );
};

export default Logo;
