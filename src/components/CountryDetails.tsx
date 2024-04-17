import React, { useState, useEffect } from "react";
import { CountriesData } from "../data/CountriesData";
import { useNavigate } from "react-router-dom";

interface CountryDetailsProps {
  country: Country;
  darkMode?: boolean;
}

interface Border {
  code: string;
  name: string;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({
  country,
  darkMode,
}) => {
  const [borders, setBorders] = useState<Border[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBorders([]);
    country.borders.forEach((border) => {
      CountriesData.getNameByCode(border).then((borderName) =>
        setBorders((prevBorders) => [
          ...prevBorders,
          { code: border, name: borderName },
        ])
      );
    });
  }, [country]);

  const navigateToCountry = (code: string) => {
    navigate(`/details/${code}`);
  };

  return (
    <section className={"country-details " + (darkMode && "dark")}>
      <img src={country.flags.svg} alt={country.flags.alt} />
      <div className="info">
        <h1>{country.name.common}</h1>
        <div className="detailed-info">
          <div className="col">
            <div>
              <h5>Native Name:</h5>
              <p>
                {" "}
                {country.name.nativeName &&
                  Object.keys(country.name.nativeName).length > 0 &&
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ] &&
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].official}
              </p>
            </div>
            <div>
              <h5>Population:</h5>
              <p>{country.population.toLocaleString()}</p>
            </div>
            <div>
              <h5>Region:</h5>
              <p>{country.region}</p>
            </div>
            <div>
              <h5>Sub Region:</h5>
              <p>{country.subregion}</p>
            </div>
            <div>
              <h5>Capital:</h5>
              <p>{country.capital.join(", ")}</p>
            </div>
          </div>
          <div className="col">
            <div>
              <h5>Top Level Domain:</h5>
              <p>{country.tld.join(", ")}</p>
            </div>
            <div>
              <h5>Currencies:</h5>
              <p>
                {Object.keys(country.currencies)
                  .map((currency) => country.currencies[currency].name)
                  .join(", ")}
              </p>
            </div>
            <div>
              <h5>Languages:</h5>
              <p>
                {Object.keys(country.languages)
                  .map((language) => country.languages[language])
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
        {borders.length !== 0 && (
          <div className="borders">
            <h5>Border coutries:</h5>
            <div className="border-countries">
              {borders.map((country) => (
                <button
                  onClick={() => navigateToCountry(country.code)}
                  className={darkMode ? "dark" : ""}
                >
                  {country.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryDetails;
