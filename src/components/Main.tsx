import React, { useState, useEffect } from "react";
import { CountriesData } from "../data/CountriesData";
import Container from "./Container";

interface MainProps {
  darkMode?: boolean;
}

const Main: React.FC<MainProps> = ({ darkMode }) => {
  const [countries, setCountries] = useState<Country[] | null>([]);

  useEffect(() => {
    CountriesData.fetchAllCountries().then((countries: Country[] | null) => {
      countries && setCountries(countries);
    });
  }, []);

  return (
    <main className={"home " + (darkMode && "dark")}>
      <Container countries={countries} darkMode={darkMode} />
    </main>
  );
};

export default Main;
