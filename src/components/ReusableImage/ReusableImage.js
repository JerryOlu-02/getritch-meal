import './ReUsableImage.scss';

const ReusableImage = function ({ image }) {
  return (
    <aside className="hero-content-right">
      <div className="top"></div>
      <div className="bottom"></div>
      <aside>
        <img src={image} alt="khloe-arledge-ND3edEmzcdQ-unsplash" />
      </aside>
    </aside>
  );
};

export default ReusableImage;
