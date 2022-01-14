import React from "react";
import TextInput from "./Input/input";
import "./search.css";

function Search({ onclick }) {
  return (
    <div className="search">
      <TextInput />
      <button onClick={onclick}>Search</button>
    </div>
  );
}

export default Search;
