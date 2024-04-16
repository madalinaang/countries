import React, { useState, useEffect, ChangeEvent } from "react";
import { CountriesData } from "../data/CountriesData";
import Container from "./Container";
import { IonIcon } from "@ionic/react";
import { search, chevronDown } from "ionicons/icons";

interface MainProps {
  darkMode?: boolean;
}

const Main: React.FC<MainProps> = ({ darkMode }) => {
  const [countries, setCountries] = useState<Country[] | null>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [regionValue, setRegionValue] = useState<Region | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const dropdownOptions: Region[] = [
    "africa",
    "america",
    "asia",
    "europe",
    "oceania",
  ];

  useEffect(() => {
    resetCountries();
    setRegionValue(null);
    setDropdownOpen(false);
  }, []);

  const resetCountries = () => {
    CountriesData.fetchAllCountries().then(
      (foundCountries: Country[] | null) => {
        foundCountries && setCountries(foundCountries);
      }
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if (event.target.value !== "") {
      setRegionValue(null);
      setDropdownOpen(false);
      CountriesData.fetchSearchCountries(event.target.value).then(
        (foundCountries: Country[] | null) => {
          foundCountries ? setCountries(foundCountries) : setCountries([]);
        }
      );
    } else resetCountries();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option: Region) => {
    setRegionValue(option);
    setDropdownOpen(false);
    CountriesData.fetchRegionCountries(option).then(
      (foundCountries: Country[] | null) => {
        foundCountries ? setCountries(foundCountries) : setCountries([]);
      }
    );
    setSearchValue("");
  };

  return (
    <main className={"home " + (darkMode && "dark")}>
      <div className="filter">
        <div className={"search-bar " + (darkMode && "dark")}>
          <IonIcon icon={search} className="search-icon" />
          <input
            className={darkMode ? "dark" : ""}
            type="text"
            placeholder="Search for a country..."
            value={searchValue}
            onChange={handleChange}
          />
        </div>
        <div className="dropdown" onClick={toggleDropdown}>
          <button className={darkMode ? "dark" : ""}>
            <p>{regionValue || "Filter by Region"}</p>
            <IonIcon icon={chevronDown} />
          </button>
          {dropdownOpen && (
            <div className={"dropdown-menu " + (darkMode && "dark")}>
              {dropdownOptions.map((option) => (
                <div
                  className={darkMode ? "dark" : ""}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Container countries={countries} darkMode={darkMode} />
    </main>
  );
};

export default Main;
