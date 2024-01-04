export default function Meals({ title, meals }) {
    console.log(title);
    console.log(meals);
  return (
    <div>
      <article>
        <h1>{title}</h1>
        <ul>
          {meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <button></button>
              <img src={meal.image} />
              <h3>{meal.name}</h3>
              <p className="meal-item-description">{meal.description}</p>
              <p className="meal-item-price">{meal.price}</p>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
