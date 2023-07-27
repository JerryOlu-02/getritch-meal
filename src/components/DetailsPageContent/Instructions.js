const Instructions = function ({ meal }) {
  const renderedInstructions = meal.strInstructions
    .split('.')
    .map((instruction, index) => {
      if (instruction === '') {
        return null;
      }

      return (
        <p key={index}>
          <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}.</span>
          {instruction}.
        </p>
      );
    });

  return (
    <div className="instructions">
      <h2>INSTRUCTIONS</h2>

      <div className="instructions-content">{renderedInstructions}</div>
    </div>
  );
};

export default Instructions;
