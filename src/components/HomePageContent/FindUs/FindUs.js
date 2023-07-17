import './sass/FindUs.scss';
import FindUsImage from '../../../assets/findus-image.jpg';
import ReusableImage from '../../ReusableImage/ReusableImage';
import Button from '../../Button/Button';
import BackGroundImage from '../../../assets/footer-background.jpg';
import { ReactComponent as Key } from '../../../assets/key.svg';

const FindUs = function () {
  return (
    <section className="findus">
      <aside className="findus-left">
        <div className="findus-left-header">
          <p>Contact</p>
          <Key />
          <h3>Find Us</h3>
        </div>

        <div className="findus-left-cotent">
          <p className="findus-left-cotent-header">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>

          <div>
            <h4>Opening Hours</h4>
            <p>Mon - Fri: 10:00 am - 02:00 am</p>
            <p>Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
        </div>

        <Button>Visit Us</Button>
      </aside>

      <ReusableImage image={FindUsImage} />

      <img src={BackGroundImage} className="bg-image" alt="background__image" />
    </section>
  );
};

export default FindUs;
