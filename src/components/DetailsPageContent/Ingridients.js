const Ingridients = function ({ meal }) {
  const ingridientsArr = [];
  const noOfIngridients = 20;

  for (let i = 0; i < noOfIngridients; i++) {
    ingridientsArr.push(i + 1);
  }

  const ingridients = ingridientsArr.map((ingridient) => {
    if (meal[`strIngredient${ingridient}`] === '') {
      return null;
    }

    return (
      <div key={ingridient}>
        <p>{meal[`strIngredient${ingridient}`]}</p>
        <p>{meal[`strMeasure${ingridient}`]}</p>
      </div>
    );
  });

  return (
    <div className="meal-ingerdients">
      <h2>INGERDIENTS</h2>

      <div className="ingredients">
        <aside>{ingridients}</aside>
      </div>
    </div>
  );
};

export default Ingridients;
