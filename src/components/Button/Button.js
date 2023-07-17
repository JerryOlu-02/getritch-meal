import Loader from '../Loader/Loader';
import './Button.scss';

const Button = function ({ children, loading, className, ...rest }) {
  const classes = `btn ${className}`;

  return (
    <button className={classes} {...rest}>
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;
