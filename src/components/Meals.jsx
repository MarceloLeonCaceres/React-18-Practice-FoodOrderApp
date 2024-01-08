import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if(error){
    return <Error title="Failed to fetch the menu" message={error}/>
  }
  // if(!loadedMeals ){
  //   return <p>No meals found.</p>
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((mealItem) => (
        <MealItem key={mealItem.id} meal={mealItem} />
      ))}
    </ul>
  );
}
