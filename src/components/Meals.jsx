import { useEffect, useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadesMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        // ...
      }
      const meals = await response.json();
      setLoadesMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>
          <h1>{meal.name}</h1>
          <p>{meal.description}</p>
          <p>{meal.price}</p>
        </li>
      ))}
    </ul>
  );
}
