import { useDispatch, useSelector } from 'react-redux';
import './Pagination.scss';
import { useEffect } from 'react';
import { setCurrentPage } from '../../store';

const Pagination = function ({ onClick, arrayLength, contentPerPage }) {
  const dispatch = useDispatch();

  // GET current selected page from state
  const currentPage = useSelector(({ app: { currentPage } }) => currentPage);

  // Pages
  const newArr = [];

  for (let i = 0; i < Math.ceil(arrayLength / contentPerPage); i++) {
    newArr.push(i + 1);
  }

  useEffect(() => {
    const noOfPages = Math.ceil(arrayLength / contentPerPage);

    // Check if the current selected page is in the pages Array
    if (currentPage > noOfPages) {
      dispatch(setCurrentPage(1));
    }
  }, [dispatch, arrayLength, currentPage, contentPerPage]);

  const handleClick = function (currentPage) {
    // set currentPage State to clicked page
    onClick(currentPage);
  };

  return (
    <section className="pagination">
      {newArr.map((page) => (
        <div
          className={currentPage === page ? 'active' : ''}
          onClick={() => handleClick(page)}
          key={page}
        >
          {page}
        </div>
      ))}
    </section>
  );
};

export default Pagination;
