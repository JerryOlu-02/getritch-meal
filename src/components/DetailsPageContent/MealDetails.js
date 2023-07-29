import { useParams } from 'react-router-dom';
import { useGetMealDetailQuery } from '../../store';
import MealHeader from './MealHeader';
import './sass/MealDetails.scss';
import Loader from '../Loader/Loader';
import Ingridients from './Ingridients';
import Instructions from './Instructions';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useSession } from '@supabase/auth-helpers-react';

const MealDetails = function () {
  const { mealId } = useParams();

  const session = useSession();

  const [isBookmarked, setIsBookMarked] = useState(false);

  // Get meal details from categoryApi
  const { isLoading, isError, data } = useGetMealDetailQuery(mealId);

  // console.log(data);

  // CHECK IF MEAL IS BOOKMARKED
  useEffect(() => {
    async function fetchId() {
      if (!session?.user) return;

      const { data, error } = await supabase
        .from('meals')
        .select('saved-meal')
        .eq('client_id', session.user.id);

      if (error) return;

      data.some((arr) => arr['saved-meal'].idMeal === mealId) &&
        setIsBookMarked(true);
    }

    fetchId();
  }, [session, mealId]);

  // SET BOOKMARKED STATE TO true
  const removeBookmark = () => setIsBookMarked(false);

  // SET BOOKMARK STATE to false
  const addBookmark = () => setIsBookMarked(true);

  if (isError) {
    return (
      <section className="meal-details">
        <p className="error-text">Could not Fetch Meal Details</p>
      </section>
    );
  } else if (isLoading) {
    return (
      <section className="meal-details">
        <Loader big />
      </section>
    );
  }

  return (
    <section className="meal-details">
      <h2 className="details-text">MEAL DETAILS</h2>

      <MealHeader
        onRemove={removeBookmark}
        onAdd={addBookmark}
        isBookmarked={isBookmarked}
        meal={data.meals[0]}
      />

      <Ingridients meal={data.meals[0]} />

      <Instructions meal={data.meals[0]} />
    </section>
  );
};

export default MealDetails;
