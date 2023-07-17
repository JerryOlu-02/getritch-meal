const ShowLaurel = function ({ laurel }) {
  return (
    <li>
      <>{laurel.svg}</>

      <aside>
        <h4>{laurel.header}</h4>
        <p>{laurel.content}</p>
      </aside>
    </li>
  );
};

export default ShowLaurel;
