import React, {useEffect, useState} from "react";
// import Forecast from "./Forecast/forecast";
// import Today from "./Today/today";

function Results() {
    const [weather, setWeather] = useState([]);
    useEffect(() => {
      async function getWeather() {
        const response = await fetch(
          "https://goweather.herokuapp.com/weather/London"
        );
        const data = await response.json();
        console.log(data);
        setWeather(data.temperature);
      }
      getWeather();
    },  []);

  return (
      <div>
          <h3>I am results.js/Results</h3>
          <p>{weather}</p>
      </div>
  );
}

export default Results;
