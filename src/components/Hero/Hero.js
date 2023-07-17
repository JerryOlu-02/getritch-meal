import Button from '../Button/Button';
import './sass/Hero.scss';
import HeroImage from '../../assets/hero-image.png';
import { ReactComponent as Key } from '../../assets/key.svg';
import { ReactComponent as Line } from '../../assets/Line-Yellow.svg';
import { ReactComponent as Dash } from '../../assets/dash.svg';
import ReusableImage from '../ReusableImage/ReusableImage';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Hero = function () {
  const footerRef = useSelector(({ app: { ref } }) => {
    return ref;
  });

  // console.log(footerRef);

  const scrollToBottom = function () {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-top-left">
          <p>#Bar</p>
          <p>#Gericht</p>
        </div>

        <div className="hero-content">
          <aside className="hero-content-left">
            <p>Chase the new Flavour</p>

            <Key />

            <h3>The key to Fine dining</h3>

            <p className="hero-content-p">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus
            </p>

            <Button>Explore Menu</Button>
          </aside>

          <ReusableImage image={HeroImage} />
        </div>
      </div>

      <div className="hero-bottom">
        <p>01</p>
        <Dash />
        <p>02</p>
        <p>03</p>
        <p>04</p>
      </div>

      <div onClick={scrollToBottom} className="scroll">
        <Line />
        <p>SCROLL</p>
      </div>
    </section>
  );
};

export default Hero;
