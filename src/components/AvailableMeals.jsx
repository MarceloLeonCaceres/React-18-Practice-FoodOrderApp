import Meals from "./Meals";
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
  return <Meals title="Menu del dia" meals={availableMeals} />;
}
