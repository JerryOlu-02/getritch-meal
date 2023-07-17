import Button from '../../Button/Button';
import './sass/Gallery.scss';
import { ReactComponent as Key } from '../../../assets/key.svg';
import GalleryOneImage from '../../../assets/gallery-1.jpg';
import GalleryTwoImage from '../../../assets/gallery-2.jpg';
import GalleryThreeImage from '../../../assets/gallery-3.jpg';
import GalleryFourImage from '../../../assets/gallery-4.jpg';
import GalleryFiveImage from '../../../assets/laurels-image.jpg';
import GallerySixImage from '../../../assets/hero-image.png';

const Gallery = function () {
  const imageSrc = [
    GalleryOneImage,
    GalleryTwoImage,
    GalleryThreeImage,
    GalleryFourImage,
    GalleryFiveImage,
    GallerySixImage,
  ];
  const renderedImages = imageSrc.map((image, index) => (
    <div key={index}>
      <img src={image} alt="Image__Gallery" />
    </div>
  ));
  return (
    <section className="gallery">
      <aside className="gallery-left">
        <div>
          <p>Instagram</p>
          <Key />
          <h3>Photo Gallery</h3>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>

        <Button>View More</Button>
      </aside>

      <aside className="gallery-right">{renderedImages}</aside>
    </section>
  );
};

export default Gallery;
