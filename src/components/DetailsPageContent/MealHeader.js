import Button from '../Button/Button';
import { useState } from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import { supabase } from '../../supabaseClient';
import { getBookmarkId } from '../../utils/helperFunc';

const MealHeader = function ({ meal, isBookmarked, onRemove, onAdd }) {
  const session = useSession();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // prettier-ignore
  const mealData = {
    'idMeal': meal.idMeal,
    'strMeal': meal.strMeal,
    'strMealThumb': meal.strMealThumb,
  };

  // ADD BOOKMARK
  const handleAddBookmark = async function () {
    if (!session?.user) return alert(`You're not signed in`);

    setLoading(true);

    try {
      const { error } = await supabase
        .from('meals')
        .insert([{ 'saved-meal': { ...mealData }, client_id: session.user.id }])
        .select();

      if (error) throw new Error(error.message);

      onAdd();
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  // REMOVE BOOKMARK
  const handleRemoveBookmark = async function () {
    // FIND BookMarked ID
    setLoading(true);

    try {
      const bookmarkedData = await getBookmarkId(session.user.id);

      if (!bookmarkedData) return;

      const bookmarkedEl = bookmarkedData.find(
        (arr) => arr['saved-meal'].idMeal === meal.idMeal
      );

      if (!bookmarkedEl) return;

      const { error } = await supabase
        .from('meals')
        .delete()
        .eq('id', bookmarkedEl.id);

      if (error) throw new Error(error);

      // Set idBookMarked to false
      onRemove();
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

          {isBookmarked ? (
            <Button
              disabled={loading}
              loading={loading}
              onClick={handleRemoveBookmark}
            >
              Remove Meal
            </Button>
          ) : (
            <Button
              disabled={loading}
              loading={loading}
              onClick={handleAddBookmark}
            >
              Save Meal
            </Button>
          )}
        </div>
      </aside>
    </div>
  );
};

export default MealHeader;
