import ReusableImage from '../../ReusableImage/ReusableImage';
import ChefImage from '../../../assets/chef.jpg';
import { ReactComponent as Key } from '../../../assets/key.svg';
import { ReactComponent as Quote } from '../../../assets/“quote.svg';
import { ReactComponent as Signature } from '../../../assets/signature.svg';
import './sass/ChefsWord.scss';

const ChefsWord = function () {
  return (
    <section className="chefsword">
      <ReusableImage image={ChefImage} />

      <aside className="chefsword-right">
        <div className="chefsword-right-header">
          <p>Chef's Word</p>
          <Key />
          <h3>What we believe in</h3>
        </div>

        <div className="chefsword-right-content">
          <p>
            <Quote />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
          <p>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>

        <div className="chefsword-right-footer">
          <p>Kevin Luo</p>
          <p>Chef & Founder</p>
        </div>

        <Signature />
      </aside>
    </section>
  );
};

export default ChefsWord;
