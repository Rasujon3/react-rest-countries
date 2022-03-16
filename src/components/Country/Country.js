import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props);
  console.log(props.country);
  const { area, region, population, name } = props.country;
  return (
    <div className="country">
      <h1>Name : {name.common}</h1>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>
        <small>Area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
