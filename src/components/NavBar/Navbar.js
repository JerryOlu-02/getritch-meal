import { NavLink } from 'react-router-dom';
import { ReactComponent as Line } from '../../assets/Line.svg';
import './sass/Navbar.scss';
import Logo from './Logo';
import { useState, forwardRef } from 'react';

const Navbar = forwardRef(function (props, ref) {
  const [active, setActive] = useState(false);

  const handleClick = function () {
    setActive((currentlyActive) => {
      return currentlyActive ? false : true;
    });
  };

  const isActive = active && 'active';

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
                to="landing"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Landing
              </NavLink>
            </li>
          </div>

          <div className="last-nav">
            <li>
              <NavLink
                to="login"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Login/Registration
              </NavLink>
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
