import './sass/TodaysSpecial.scss';
import { ReactComponent as Key } from '../../../assets/key.svg';
import BottleImage from '../../../assets/bottle.jpg';
import Button from '../../Button/Button';
import ShowSpecial from './ShowSpecial';
import { optionWine } from '../../../utils/objects';
import { optionCocktail } from '../../../utils/objects';

const TodaysSpecial = function () {
  return (
    <section className="todaysspecial">
      <div className="todaysspecial-header">
        <p>Menu that fits you palatte</p>
        <Key />
        <h3>Today’s Special</h3>
      </div>

      <div className="todaysspecial-content">
        <ShowSpecial option={optionWine} />

        <div className="bottle-div">
          <img src={BottleImage} alt="Bottle__Image" />
        </div>

        <ShowSpecial option={optionCocktail} />
      </div>

      <Button>View More</Button>
    </section>
  );
};

export default TodaysSpecial;
