import AvailableMeals from "./components/AvailableMeals";
import Header from "./components/Header";

function App() {
  return (
    <>
      <h1>You got this 💪</h1>
      <p>Stuck? Not sure how to proceed?</p>
      <p>Don't worry - we've all been there. Let's build it together!</p>
      <main>
        <Header />
        <AvailableMeals />
      </main>
    </>
  );
}

export default App;
