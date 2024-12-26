import Select from "react-select";
export const RegionMenue = ({ countryList, filterCountriesList }) => {
  const options = [
    { value: "all regions", label: "All regions" },
    { value: "africa", label: "Africa" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];
  const regionChangeHandler = (event) => {
    const region = event.label;
    const filteredCountries =
      region === "All regions"
        ? countryList
        : countryList.filter((country) => country.region === region);
    filterCountriesList(filteredCountries);
  };

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      onChange={regionChangeHandler}
      classNames={{
        input: () => "dark:text-gray-100 ",
        singleValue: () => "dark:text-gray-100 ",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-2 shadow pr-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500",
        indicatorSeparator: () => "hidden",
        option: () => "hover:text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100 ",
      }}
    />
  );
};
