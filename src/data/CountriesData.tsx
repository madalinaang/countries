import React from "react";
import axios from "axios";

export class CountriesData {
  static fields =
    "name,population,region,subregion,capital,tld,currencies,languages,borders,flags";

  static async fetchAllCountries(): Promise<Country[] | null> {
    try {
      const response = await axios.get<Country[]>(
        "https://restcountries.com/v3.1/all?fields=" + CountriesData.fields
      );

      return response.data;
    } catch (error) {
      console.log("Error fetching countries:", error);
      return null;
    }
  }

  static async fetchSearchCountries(
    searchStr: string
  ): Promise<Country[] | null> {
    try {
      const response = await axios.get<Country[]>(
        `https://restcountries.com/v3.1/name/${searchStr}?fields=` +
          CountriesData.fields
      );
      return response.data;
    } catch (error) {
      console.log("Error fetching countries:", error);
      return null;
    }
  }

  static async fetchRegionCountries(
    regionStr: string
  ): Promise<Country[] | null> {
    try {
      const response = await axios.get<Country[]>(
        `https://restcountries.com/v3.1/region/${regionStr}?fields=` +
          CountriesData.fields
      );
      return response.data;
    } catch (error) {
      console.log("Error fetching countries:", error);
      return null;
    }
  }

  static async fetchCountryByCode(codeStr: string): Promise<Country | null> {
    try {
      const response = await axios.get<Country>(
        `https://restcountries.com/v3.1/alpha/${codeStr}?fields=` +
          CountriesData.fields
      );

      return response.data;
    } catch (error) {
      console.log("Error fetching countries:", error);
      return null;
    }
  }
}
