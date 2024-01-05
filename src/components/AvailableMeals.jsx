import Meal from "./Meal.jsx";
import { fetchAvailableMeals } from "../http.js";
import { useFetch } from "../hooks/useFetch";

async function traeMenu() {
  const availableMeals = await fetchAvailableMeals();
  return new Promise((resolve) => {
    resolve(availableMeals);
  });
}

export default function AvailableMeals() {
  const {
    isFetching,
    error,
    fetchedData: availableMeals,
  } = useFetch(traeMenu, []);
  console.log(availableMeals);
  return (
    <ul id="meals">
      {availableMeals.map((meal) => (
        <li key={meal.id}>
          <Meal {...meal} />
        </li>
      ))}
    </ul>
  );
}
