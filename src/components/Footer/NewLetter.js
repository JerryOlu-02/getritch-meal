import { ReactComponent as Key } from '../../assets/key.svg';
import Button from '../Button/Button';
import './sass/NewsLetter.scss';

const NewsLetter = function () {
  return (
    <div className="newsletter">
      <p className="news">Newsletter</p>

      <Key />

      <p className="subsribe">Subscribe to Our Newsletter</p>

      <p className="updates">And never miss latest Updates!</p>

      <form>
        <input type="text" placeholder="Email Address" />

        <Button>Subscribe</Button>
      </form>
    </div>
  );
};

export default NewsLetter;
