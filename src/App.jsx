import Header from "./components/Header";
import Shop from "./components/Shop.jsx";

import Meal from "./components/Meal.jsx";
import { DUMMY_PRODUCTS } from "../src/assets/dummy-products.js";

import OrderContextProvider from "./store/order-context.jsx";
import AvailableMeals from "./components/AvailableMeals";

function App() {
  console.log(DUMMY_PRODUCTS);
  return (
    <>
      <OrderContextProvider>
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((meal) => (
            <li key={meal.id}>
              <Meal {...meal} />
            </li>
          ))}
        </Shop>
      </OrderContextProvider>
      <AvailableMeals />
    </>
  );
}

export default App;
