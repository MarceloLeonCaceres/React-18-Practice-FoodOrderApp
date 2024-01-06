import Meal from "./Meal.jsx";
import { fetchAvailableMeals } from "../http.js";
import { useFetch } from "../hooks/useFetch";

import Error from "./Error.jsx";

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
  
  if(error){
    return <Error title={"An error ocurred!"} message={error.message}/>;
  }

  return (
    <>
      {availableMeals.map((meal) => (
        <li key={meal.id}>
          <Meal {...meal} />
        </li>
      ))}
    </>
  );
}
