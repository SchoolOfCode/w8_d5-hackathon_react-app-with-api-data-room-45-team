import React from "react";

function Today({ temp, desc, wind }) {
  return (
    <div className="today">
      <p>Today's temerature: <p>{temp}</p> & {desc}</p>
      <p>Wind speeds of {wind}</p>
    </div>
  );
}

export default Today;
