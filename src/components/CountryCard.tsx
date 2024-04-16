import React, { useState, useEffect } from "react";

interface CountryCardProps {
  country: Country;
  darkMode?: boolean;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, darkMode }) => {
  return (
    <article className={"country-card " + (darkMode && "dark")}>
      <img src={country.flags.svg} alt={country.flags.alt} />
      <div className="description">
        <h3>{country.name.common}</h3>
        <div className="details">
          <div className="detail">
            <h6>Population:</h6>
            <p>{country.population.toLocaleString()}</p>
          </div>
          <div className="detail">
            <h6>Region:</h6>
            <p>{country.region}</p>
          </div>
          <div className="detail">
            <h6>Capital:</h6>
            <p>{country.capital.join(", ")}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CountryCard;
