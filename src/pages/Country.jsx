import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseFetchData } from "../useFetchData";
import { ShowMessage } from "./../components/ShowMessage";
export const Country = () => {
  const { country } = useParams();
  const { result, isLoading, isError } = UseFetchData(country);
  console.log({ result });
  return (
    <>
      {" "}
      {isError && <ShowMessage message={"Somthing went Wrong!"} />}
      {isLoading && <ShowMessage message={"Loading Countries Data...!"} />}
      {!isError && !isLoading && (
        <div>
          <Link className="mb-16 inline-block rounded-md p-3 md:mb-20" to={"/"}>
            <svg
              width="70"
              height="68"
              viewBox="0 0 70 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2005_992)">
                <rect
                  className="fill-white dark:fill-gray-800"
                  x="14"
                  y="8"
                  width="42"
                  height="40"
                  rx="6"
                  fill="white"
                />
              </g>
              <path
                className="fill-gray-800 dark:fill-white"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.8927 22.5355L33.0712 23.714L29.1821 27.6031L44.0314 27.6031L44.0314 29.253L29.1821 29.253L33.0712 33.1421L31.8927 34.3206L26.0001 28.4281L31.8927 22.5355Z"
              />
              <defs>
                <filter
                  id="filter0_d_2005_992"
                  x="0"
                  y="0"
                  width="70"
                  height="68"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="7" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2005_992"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2005_992"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img
              className="w-full"
              src={result?.flags?.svg}
              alt={result?.flags?.alt}
            />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {country}
              </h1>
              <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Native Name: </span>
                    <span className="font-light">{result?.name?.common}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Population:</span>
                    <span className="font-light">
                      {parseInt(result.population).toLocaleString()}{" "}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region:</span>
                    <span className="font-light">{result.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region:</span>
                    <span className="font-light">{result.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span>
                    <span className="font-light">{result.capital}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <p>
                    {" "}
                    <span className="font-semibold">Top Level Domain:</span>
                    <span className="font-light">
                      {result?.tld?.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies:</span>
                    <span className="font-light">
                      {result?.currencies &&
                        Object.keys(result.currencies)
                          .map((currency) => result.currencies[currency].name)
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    {" "}
                    <span>Languages:</span>
                    <span>
                      {result?.languages &&
                        Object.values(result.languages)
                          .map((language) => `${language}`)
                          .join(",")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
