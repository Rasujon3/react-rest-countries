import React from "react";
import "./Country.css";

const Country = ({ name, population, area }) => {
  //   console.log(props);
  console.log(area);
  return (
    <div className="country">
      <h1>Name : {name}</h1>
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
