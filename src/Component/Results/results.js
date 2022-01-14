import React, { useState, useEffect } from "react";
import Forecast from "./Forecast/forecast";
import Today from "./Today/today";

function Results() {
  //   const [weather, setWeather] = useState("");
  //   useEffect(() => {
  //     async function getWeather() {
  //       const response = await fetch(
  //         "https://goweather.herokuapp.com/weather/London"
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setWeather([data]);
  //     }
  //     getWeather();
  //   }, []);

  return (
    <div>
      <Forecast />
      <h1>Hello World</h1>
      <Today />
    </div>
  );
}

export default Results;
