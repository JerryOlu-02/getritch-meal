import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchValue,
  setSearchedMeals,
  setSearchedStatus,
  useSearchMealMutation,
} from '../../../store';
import Button from '../../Button/Button';
import { useEffect } from 'react';

const SearchForm = function ({ onSearch }) {
  const dispatch = useDispatch();

  const [searchMeal, results] = useSearchMealMutation();
  // console.log(results);

  useEffect(() => {
    dispatch(
      setSearchedStatus({
        isLoading: results.isLoading,
        isError: results.isError,
      })
    );
    if (results.isSuccess) {
      dispatch(setSearchedMeals(results.data.meals));
    }
  }, [dispatch, results]);
  // console.log(results);

  // Return searchValue from slice
  const searchValue = useSelector(({ app: { searchValue } }) => searchValue);

  const handleChange = function (e) {
    dispatch(setSearchValue(e.target.value));
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    // Seatch meals on submit
    searchMeal(searchValue);

    // Clear active category button
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input onChange={handleChange} value={searchValue} type="text" />
        <Button loading={results.isLoading} type="submit">
          Search
        </Button>
      </div>

      <p>Search Meal By Name or Select Categories from below</p>
    </form>
  );
};

export default SearchForm;
