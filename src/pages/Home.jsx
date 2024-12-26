import {
  CounrtyList,
  RegionMenue,
  SearchInput,
  ShowMessage,
} from "../components";
import { UseFetchData } from "../useFetchData";
export function Home() {
  const {
    isError,
    isLoading,
    result,
    setfilteredCountries,
    filteredCountries,
  } = UseFetchData();
  return (
    <>
      {isError && <ShowMessage message={"Somthing went Wrong!"} />}
      {isLoading && <ShowMessage message={"Loading Countries Data...!"} />}
      {!isError && !isLoading && (
        <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
          <SearchInput
            countryList={result}
            filterCountriesList={setfilteredCountries}
          />
          <RegionMenue
            countryList={result}
            filterCountriesList={setfilteredCountries}
          />
        </div>
      )}

      <CounrtyList data={filteredCountries} />
    </>
  );
}
