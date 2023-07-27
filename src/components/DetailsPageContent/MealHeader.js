import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { addSaves } from '../../store/slices/savesSlice';
import { useState } from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import { supabase } from '../../supabaseClient';

const MealHeader = function ({ meal, isBookmarked }) {
  const dispatch = useDispatch();

  const {
    user: { id: clientId },
  } = useSession();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(isBookmarked);

  const handleClick = async function () {
    setLoading(true);

    try {
      const mealData = {
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb,
      };

      const { data, error } = await supabase
        .from('meals')
        .insert([{ 'saved-meal': { ...mealData }, 'client-id': clientId }])
        .select();

      if (error) throw new Error(error.message);

      dispatch(addSaves(data));
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="meal-header">
      <aside className="meal-header-image">
        <img src={meal.strMealThumb} alt="meal__image" />
      </aside>

      <aside className="meal-header-right">
        <div className="meal-header-content">
          <h3>{meal.strMeal}</h3>

          <p>Category: {meal.strCategory}</p>

          {meal.strTags && (
            <div>
              {meal.strTags.split(',').map((tag) => (
                <Button key={tag}>{tag}</Button>
              ))}
            </div>
          )}
        </div>

        <div className="meal-header-button">
          {error && <p>{error}</p>}
          {!isBookmarked && (
            <Button disabled={loading} loading={loading} onClick={handleClick}>
              Save Meal
            </Button>
          )}

          {isBookmarked && (
            <Button disabled={loading} loading={loading} onClick={handleClick}>
              Remove Meal
            </Button>
          )}
        </div>
      </aside>
    </div>
  );
};

export default MealHeader;
