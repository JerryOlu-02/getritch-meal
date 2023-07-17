import NewsLetter from './NewLetter';
import Logo from '../NavBar/Logo';
import './sass/Footer.scss';
import { ReactComponent as Key } from '../../assets/key.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Insta } from '../../assets/insta.svg';
import { ReactComponent as Line } from '../../assets/Line-Yellow.svg';
import { forwardRef } from 'react';

const Footer = forwardRef(function ({ onClick }, ref) {
  return (
    <section ref={ref} className="footer-section">
      <NewsLetter />

      <div onClick={() => onClick()} className="scroll">
        <Line />
        <p>TOP</p>
      </div>

      <footer className="footer">
        <div className="footer-div">
          <p className="header">Contact Us</p>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>
            +1 212-344-1230 <br />
            +1 212-555-1230
          </p>
        </div>

        <div className="footer-div">
          <Logo yellow />
          <p>
            "The best way to find yourself <br /> is to lose yourself in the{' '}
            <br />
            service of others.”
          </p>
          <Key />

          <div className="social-div">
            <Facebook />
            <Twitter />
            <Insta />
          </div>
        </div>

        <div className="footer-div">
          <p className="header">Working Hours</p>
          <p>
            Monday-Friday: <br />
            08:00 am -12:00 am
          </p>

          <p>
            Saturday-Sunday: <br />
            07:00am -11:00 pm
          </p>
        </div>
      </footer>

      <p className="rights">2021 Gerícht. All Rights reserved.</p>
    </section>
  );
});

export default Footer;
