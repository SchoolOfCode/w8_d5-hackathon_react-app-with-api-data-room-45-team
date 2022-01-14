import React from "react";
import "../Results.css";

function Forecast({ fore }) {
  console.log(fore);
  return (
    <div className="forecast">
      <p>
        {fore.map((item) => {
          return (
            <div>
              <p>day :{item.day}</p>
              <p>temperature: {item.temperature}</p>
              <p>wind: {item.wind}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default Forecast;
