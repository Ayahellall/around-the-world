import { useEffect, useState } from "react";

export const UseFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (country) {
      fetchDataFromApi();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);
  const fetchDataFromApi = () => {
    let url = "https://restcountries.com/v3.1/all";
    setIsLoading(true);
    if (country) {
      url = ` https://restcountries.com/v3.1/name/${country}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setResult(data[0]);
        } else {
          setResult(data);
          setfilteredCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setfilteredCountries(data);
    } else {
      fetchDataFromApi();
    }
  };
  return {
    result,
    filteredCountries,
    setfilteredCountries,
    isLoading,
    isError,
  };
};
