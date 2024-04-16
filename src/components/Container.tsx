import React from "react";
import CountryCard from "./CountryCard";

interface ContainerProps {
  countries: Country[] | null;
  darkMode?: boolean;
}

const Container: React.FC<ContainerProps> = ({ countries, darkMode }) => {
  return (
    <section className="container">
      {countries &&
        countries.map((country) => (
          <CountryCard country={country} darkMode={darkMode} />
        ))}
    </section>
  );
};

export default Container;
