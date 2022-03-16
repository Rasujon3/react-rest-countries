import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props);
  //   console.log(props.country);
  const { area, region, population, name, flags } = props.country;
  return (
    <div className="country bg-info">
      <h1>Name : {name.common}</h1>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>
        <small>Area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
