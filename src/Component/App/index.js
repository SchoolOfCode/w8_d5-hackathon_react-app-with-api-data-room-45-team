import "./App.css";
import Search from "../Search/search";
import Results from "../Results/results";

function App() {
  function handleClick() {
    console.log("HELLO");
  }

  return (
    <div className="App">
      <h1>Local Weather Forecast</h1>
      <h2>by Sunny & Co</h2>
      <h3>Enter your location for an up-to-date weather forecast</h3>
      <Search onclick={handleClick} />
      <Results />
    </div>
  );
}

export default App;
