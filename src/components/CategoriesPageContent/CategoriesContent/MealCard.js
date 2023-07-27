import { useNavigate } from 'react-router-dom';

export default function MealCard({ meal }) {
  const navigate = useNavigate();

  const goToDetailsPage = function (meal) {
    navigate(`/meal-details/${meal.idMeal}`);
  };

  return (
    <div onClick={() => goToDetailsPage(meal)} className="categoriescontent">
      <img src={meal.strMealThumb} alt="meal__image" />

      <p>{meal.strMeal}</p>
    </div>
  );
}
