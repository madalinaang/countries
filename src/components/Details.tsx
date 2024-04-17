import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountriesData } from "../data/CountriesData";
import CountryDetails from "./CountryDetails";
import { IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

interface DetailsProps {
  darkMode?: boolean;
}

const Details: React.FC<DetailsProps> = ({ darkMode }) => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    countryCode &&
      CountriesData.fetchCountryByCode(countryCode).then(
        (foundCountry: Country | null) => {
          foundCountry && setCountry(foundCountry);
        }
      );
  }, [countryCode]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <main className={"details " + (darkMode && "dark")}>
      <section className="navigation">
        <button onClick={handleClick} className={darkMode ? "dark" : ""}>
          <IonIcon icon={arrowBack} className="arrow-back" />
          <p>Back</p>
        </button>
      </section>
      {country && <CountryDetails country={country} darkMode={darkMode} />}
    </main>
  );
};

export default Details;
