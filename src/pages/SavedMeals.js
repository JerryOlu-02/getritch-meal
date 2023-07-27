import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSaves } from '../store';
import { useSession } from '@supabase/auth-helpers-react';
import { createSelector } from '@reduxjs/toolkit';
import MealCard from '../components/CategoriesPageContent/CategoriesContent/MealCard';
import Loader from '../components/Loader/Loader';
import '../sass/SavedMeals.scss';

export default function SavedMeals() {
  const session = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSaves(session.user.id));
  }, [dispatch, session]);

  const savesSlice = useSelector(({ saves }) => saves);

  const getIsLoading = (state) => state.isLoading;
  const getIsError = (state) => state.isError;
  const getSaves = (state) => state.savedMeals;

  const getData = createSelector(
    [getIsLoading, getIsError, getSaves],
    (isLoading, isError, saves) => {
      return {
        isLoading,
        isError,
        saves,
      };
    }
  );

  const { isLoading, isError, saves } = getData(savesSlice);

  if (isLoading)
    return (
      <section className="saved-meals">
        <Loader big />
      </section>
    );

  if (isError)
    return (
      <section className="saved-meals">
        <p className="error-message">Could Not fetch Meals</p>
      </section>
    );

  const savedMeals =
    saves &&
    saves.map((meal) => (
      <MealCard key={meal['saved-meal'].idMeal} meal={meal['saved-meal']} />
    ));

  return <section className="saved-meals">{savedMeals}</section>;
}
