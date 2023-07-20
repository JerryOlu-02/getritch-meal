import Button from '../Button/Button';

const MealHeader = function ({ meal }) {
  return (
    <div className="meal-header">
      <aside className="meal-header-image">
        <img src={meal.strMealThumb} alt="meal__image" />
      </aside>

      <aside className="meal-header-right">
        <div className="meal-header-content">
          <h3>{meal.strMeal}</h3>

          <p>Category: {meal.strCategory}</p>

          <div>
            {meal.strTags.split(',').map((tag) => (
              <Button key={tag}>{tag}</Button>
            ))}
          </div>
        </div>

        <Button>Save Meal</Button>
      </aside>
    </div>
  );
};

export default MealHeader;
