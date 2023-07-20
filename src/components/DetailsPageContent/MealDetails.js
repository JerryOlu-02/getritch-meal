import { useParams } from 'react-router-dom';
import { useGetMealDetailQuery } from '../../store';
import MealHeader from './MealHeader';
import './sass/MealDetails.scss';
import Loader from '../Loader/Loader';
import Ingridients from './Ingridients';
import Instructions from './Instructions';

const MealDetails = function () {
  const { mealId } = useParams();

  const { isLoading, isError, data } = useGetMealDetailQuery(mealId);

  // console.log(data);

  if (isError) {
    return <p className="error-text">Could not Fetch Meal Details</p>;
  } else if (isLoading) {
    return <Loader big />;
  }

  return (
    <section className="meal-details">
      <h2 className="details-text">MEAL DETAILS</h2>

      <MealHeader meal={data.meals[0]} />

      <Ingridients meal={data.meals[0]} />

      <Instructions meal={data.meals[0]} />
    </section>
  );
};

export default MealDetails;
