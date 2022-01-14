import React, {useEffect, useState} from "react";
// import Forecast from "./Forecast/forecast";
// import Today from "./Today/today";

function Results() {
    const [temp, setTemp] = useState("");
    const [desc, setDesc] = useState("");
    const [wind, setWind] = useState("");
    const [fore, setFore] = useState([]);
    useEffect(() => {
      async function getWeather() {
        const response = await fetch(
          "https://goweather.herokuapp.com/weather/London"
        );
        const data = await response.json();
        console.log(data.forecast[0]);
        setTemp(data.temperature);
        setDesc(data.description);
        setWind(data.wind);
        setFore(data.forecast);
      }
      getWeather();
    },  []);

  return (
      <div>
          <p>{temp}</p>
          <p>{desc}</p>
          <p>{wind}</p>
          <p>{fore}</p>
      </div>
  );
}

export default Results;
