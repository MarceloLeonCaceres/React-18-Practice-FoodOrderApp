import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

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
      {loadedMeals.map((mealItem) => 
        <MealItem key={mealItem.id} meal={mealItem} />
      )}
    </ul>
  );
}
