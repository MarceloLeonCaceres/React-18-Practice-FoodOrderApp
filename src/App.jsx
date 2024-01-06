import Header from "./components/Header";
import Shop from "./components/Shop.jsx";

import OrderContextProvider from "./store/order-context.jsx";
import AvailableMeals from "./components/AvailableMeals";

function App() {
  return (
    <>
      <OrderContextProvider>
        <Header />
        <Shop>
          <AvailableMeals />
        </Shop>
      </OrderContextProvider>
    </>
  );
}

export default App;
