import '../sass/Modal.scss';
import { TfiClose } from 'react-icons/tfi';

const Modal = function ({ children, onClose, classes }) {
  const handleClick = function () {
    onClose();
  };

  return (
    <section className={`modal ${classes}`}>
      <div onClick={handleClick} className="overlay"></div>

      <div className="modal-div">
        <TfiClose onClick={handleClick} className="close-modal" />

        {children}
      </div>
    </section>
  );
};

export default Modal;
