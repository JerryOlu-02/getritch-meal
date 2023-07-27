import Loader from '../../Loader/Loader';
import './sass/CategoriesContent.scss';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import MealCard from './MealCard';

const CategoriesContent = function ({ contentPerPage }) {
  // Returns App State
  const appState = useSelector(({ app }) => app);

  // Returns SearchedMeals state from App State
  const getSearchedMeals = (state) => state.searchedMeals;

  // Returns SearchedStatus state from App State
  const getSearchedStatus = (state) => state.searchedStatus;

  // Returns currentPage state from App State
  const getCurrentPage = (state) => state.currentPage;

  // returns isLoading value from searchedStatus
  const isLoading = createSelector(
    [getSearchedStatus],
    (status) => status.isLoading
  );

  // returns isLoading value from searchedStatus
  const isError = createSelector(
    [getSearchedStatus],
    (status) => status.isError
  );

  // Output selector data
  const getData = createSelector(
    [isError, isLoading, getSearchedMeals, getCurrentPage],
    (error, loading, meals, currentPage) => {
      return {
        error,
        loading,
        meals,
        currentPage,
      };
    }
  );

  const { loading, error, meals, currentPage } = getData(appState);

  // PAGINATION Syntax
  const indexOfLastCountry = currentPage * contentPerPage;
  const indexOfFirstCountry = indexOfLastCountry - contentPerPage;

  let categoryContent;

  if (error) {
    categoryContent = <p className="error-message">Could Not fetch Meals</p>;
  } else if (loading) {
    categoryContent = <Loader big />;
  } else {
    categoryContent =
      meals &&
      meals.length &&
      meals
        .slice(indexOfFirstCountry, indexOfLastCountry)
        .map((meal) => <MealCard key={meal.idMeal} meal={meal} />);
  }

  return <>{categoryContent}</>;
};

export default CategoriesContent;
