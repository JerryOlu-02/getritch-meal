import { ReactComponent as LongLine } from '../../../assets/Long Line.svg';

const ShowSpecial = function ({ option }) {
  return (
    <div className="showspecial">
      <h4>{option.name}</h4>

      <div className="showspecial-content">
        {option.menu.map((menu) => (
          <div className="showspecial-content-bar" key={menu.meal}>
            <aside>
              <p className="menu-meal">{menu.meal}</p>

              <div className="menu-price">
                <LongLine />
                <p>{menu.price}</p>
              </div>
            </aside>

            <p className="menu-content">{menu.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSpecial;
