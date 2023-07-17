import './Loader.scss';
import { ImSpinner2 } from 'react-icons/im';

const Loader = function ({ big }) {
  const classes = `loader ${big ? 'big' : ''}`;

  return (
    <div className={classes}>
      <ImSpinner2 />
    </div>
  );
};

export default Loader;
