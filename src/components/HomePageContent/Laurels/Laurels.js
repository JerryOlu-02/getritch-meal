import './sass/Laurels.scss';
import { ReactComponent as Key } from '../../../assets/key.svg';
import { ReactComponent as G } from '../../../assets/G.svg';
import LaurelsImage from '../../../assets/laurels-image.jpg';
import { laurelOptionOne, laurelOptionTwo } from '../../../utils/objects';
import ShowLaurel from './ShowLaurel';

const Laurels = function () {
  const renderedOptionOne = laurelOptionOne.map((laurel) => (
    <ShowLaurel key={laurel.header} laurel={laurel} />
  ));

  const renderedOptionTwo = laurelOptionTwo.map((laurel) => (
    <ShowLaurel key={laurel.header} laurel={laurel} />
  ));

  return (
    <section className="laurels">
      <aside className="laurels-left">
        <div className="laurels-left-header">
          <p>Awards & Recognition</p>
          <Key />
          <h3>Our Laurels</h3>
        </div>

        <ul className="laurels-left-content">{renderedOptionOne}</ul>

        <ul className="laurels-left-content">{renderedOptionTwo}</ul>
      </aside>

      <aside className="laurels-right">
        <img src={LaurelsImage} alt="Laurels__egg__image" />
        <G />
      </aside>
    </section>
  );
};

export default Laurels;
