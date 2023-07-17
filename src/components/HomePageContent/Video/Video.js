import { ReactComponent as Play } from '../../../assets/Play.svg';
import ResturantImage from '../../../assets/resturant.jpg';
import './Video.scss';

const Video = function () {
  return (
    <section className="video">
      <div>
        <img src={ResturantImage} alt="Resturant__Image" />
        <Play />
      </div>
    </section>
  );
};

export default Video;
