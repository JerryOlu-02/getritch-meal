import { NavLink } from 'react-router-dom';
import { ReactComponent as Line } from '../../assets/Line.svg';
import './sass/Navbar.scss';
import Logo from './Logo';
import { useState, forwardRef } from 'react';
import { useSelector } from 'react-redux';

const Navbar = forwardRef(function (props, ref) {
  const [active, setActive] = useState(false);

  const handleClick = function () {
    setActive((currentlyActive) => {
      return currentlyActive ? false : true;
    });
  };

  const isActive = active && 'active';

  const user = useSelector(({ user: { currentUser } }) => currentUser);

  return (
    <nav ref={ref} className="navbar">
      <ul>
        <Logo />

        <div className={`middle-nav ${isActive}`}>
          <div className="first-nav">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="categories"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Pages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="blog"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="saved-meals"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Saved-Meals
              </NavLink>
            </li>
          </div>

          <div className="last-nav">
            <li>
              {user ? (
                <NavLink
                  to="profile"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  User Profile
                </NavLink>
              ) : (
                <NavLink
                  to="login"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Login/Registration
                </NavLink>
              )}
            </li>

            <Line />

            <li>
              <NavLink
                to="book"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Book Table
              </NavLink>
            </li>
          </div>
        </div>

        <div onClick={handleClick} className={`menu-bar ${isActive}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ul>
    </nav>
  );
});

export default Navbar;
