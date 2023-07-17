import './sass/AboutUs.scss';
import { ReactComponent as Key } from '../../../assets/key.svg';
import { ReactComponent as Knife } from '../../../assets/knife.svg';
import { ReactComponent as G } from '../../../assets/G.svg';
import Button from '../../Button/Button';

const AboutUs = function () {
  return (
    <section className="aboutus">
      <aside className="aboutus-left">
        <h3>About Us</h3>
        <Key />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <Button>Know More</Button>
      </aside>

      <div>
        <Knife />
        {/* <img src={KnifeImage} alt="knife__images" /> */}
      </div>

      <aside className="aboutus-right">
        <h3>Our History</h3>
        <Key />
        <p>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <Button>Know More</Button>
      </aside>

      <aside className="gee">
        <G />
      </aside>
    </section>
  );
};

export default AboutUs;
