import "./App.css";
import Search from "../Search/search";
import Results from "../Results/results";

function App() {
  return (
    <div className="App">
      <h1>Local Weather Forecast</h1>
      <h2>by Sunny & Co</h2>
      <h3>Enter your location for an up-to-date weather forecast</h3>
      <Search />
      <Results />
    </div>
  );
}

export default App;
