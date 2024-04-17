/// <reference types="react-scripts" />

interface Country {
  name: {
    common: string;
    nativeName: { [key: string]: { official: string } };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: { [key: string]: { name: string } };
  languages: { [key: string]: string };
  borders: string[];
  flags: { svg : string, alt: string };
  cca2: string;
}


type Region = "africa" | "america" | "asia" | "europe" | "oceania";