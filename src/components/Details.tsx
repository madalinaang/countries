import React from "react";

const Details: React.FC = () => {
  return (
    <main className="details">
      Details
      {/*      <p>
        {country.name.common},{" "}
        {country.name.nativeName &&
          Object.keys(country.name.nativeName).length > 0 &&
          country.name.nativeName[Object.keys(country.name.nativeName)[0]] &&
          country.name.nativeName[Object.keys(country.name.nativeName)[0]]
            .official}
        , {country.population}, {country.region}, {country.subregion},
        {country.capital.join(", ")}, {country.tld},
        {Object.keys(country.currencies)
          .map((currency) => country.currencies[currency].name)
          .join(", ")}
        ,{" "}
        {Object.keys(country.languages)
          .map((language) => country.languages[language])
          .join(", ")}
        {country.borders.join(", ")}, {country.flags.png}
      </p>*/}
    </main>
  );
};

export default Details;
