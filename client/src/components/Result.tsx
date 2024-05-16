import CircularProgressBar from "./CircularProgressBar";

type Props = {
  result: any;
  setResult: Function;
  setIsGetResult: Function;
};

const styleScore =
  "relative h-32 flex flex-col-reverse gap-2 w-full p-3 mx-auto justify-between items-center bg-secondary/40 border-solid border-primary/60 border-4 rounded-xl";
const iconStyle =
  "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-highlight";

function Result({ result, setResult, setIsGetResult }: Props): JSX.Element {
  console.log("result", result);
  return (
    <div className="relative h-full animate-fade w-screen sm:w-3/4 md:max-w-[1200px]">
      <div className="relative mt-16 h-[700px] sm:h-[600px] flex">
        {!Object.keys(result).includes("error") ? (
          <div className="h-full flex sm:mt-0 flex-col sm:flex-row p-4 sm:p-8 gap-4 justify-center items-center w-full rounded-3xl bg-white/70 text-sm leading-6 shadow-lg ring-1 ring-gray-900">
            {/* RESULT MESSAGE */}
            <main className="h-1/2 sm:h-full w-full sm:w-1/2 flex flex-col justify-between items-center">
              <h1 className="w-full sm:w-4/5 h-full sm:aspect-square m-0 min-w-[200px] border-solid border-primary/60 border-8 rounded-2xl flex justify-center items-center bg-secondary/40 shadow-xl text-center">
                <span className="p-0 m-0 font-extrabold text-3xl">
                  {result.message}
                </span>
              </h1>
              <article className="grid grid-cols-3 sm:grid-cols-1 w-full sm:w-4/5 mt-5">
                <h3 className="font-semibold text-xl w-fit">
                  {result.clothes}
                </h3>
                <p className="w-fit">
                  {result.actualWeatherData.location.country},{" "}
                  <span className="font-semibold">
                    {result.actualWeatherData.location.region}
                  </span>
                </p>
                <div className="flex">
                  <p className="w-16">Highest:</p>
                  <p className="w-fit">
                    {
                      result.actualWeatherData.forecast.forecastday[0].day
                        .maxtemp_c
                    }
                    °C
                  </p>
                </div>
                <div className="flex">
                  <p className="w-16">Lowest:</p>
                  <p className="w-fit">
                    {
                      result.actualWeatherData.forecast.forecastday[0].day
                        .mintemp_c
                    }
                    °C
                  </p>
                </div>
                <div className="flex">
                  <p className="w-16">Rain:</p>
                  <p className="w-fit">
                    {
                      result.actualWeatherData.forecast.forecastday[0].day
                        .daily_chance_of_rain
                    }
                    %
                  </p>
                </div>
              </article>
            </main>

            {/* SCORE CONDITION */}
            <aside className="w-full sm:min-h-full flex-auto sm:w-1/3 sm:h-3/4 flex flex-col justify-between items-center">
              <section className="w-full grid grid-flow-row grid-cols-3 sm:grid-cols-2 gap-4">
                {/* MAX TEMP */}
                <article className={styleScore}>
                  <CircularProgressBar
                    percentage={result.evaluation.maxTempScore.score * 20}
                  />
                  <h4>Hot</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={iconStyle}
                  >
                    <path
                      fillRule="evenodd"
                      d={result.evaluation.maxTempScore.path}
                      clipRule="evenodd"
                    />
                  </svg>
                </article>

                {/* MIN TEMP */}
                <article className={styleScore}>
                  <CircularProgressBar
                    percentage={result.evaluation.minTempScore.score * 20}
                  />
                  <h4>Cold</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={iconStyle}
                  >
                    <path
                      fillRule="evenodd"
                      d={result.evaluation.minTempScore.path}
                      clipRule="evenodd"
                    />
                  </svg>
                </article>

                {/* HI */}
                <article className={styleScore}>
                  <CircularProgressBar
                    percentage={result.evaluation.heatIndexScore.score * 20}
                  />
                  <span className="flex">
                    <h4>HI</h4>
                    <div className="group relative flex justify-center">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                          />
                        </svg>
                      </button>
                      <span className="absolute z-10 top-0 left-8 w-40 scale-0 rounded bg-white p-2 text-xs text-black group-hover:scale-100">
                        HI (Heat Index) also known as the apparent temperature,
                        is what the temperature feels like to the human body
                        when relative humidity is combined with the air
                        temperature.
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={iconStyle}
                    >
                      <path
                        fillRule="evenodd"
                        d={result.evaluation.heatIndexScore.path}
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </article>

                {/* RAIN */}
                <article className={styleScore}>
                  <CircularProgressBar
                    percentage={result.evaluation.rainScore.score * 20}
                  />
                  <h4>Rain</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={iconStyle}
                  >
                    <path
                      fillRule="evenodd"
                      d={result.evaluation.rainScore.path}
                      clipRule="evenodd"
                    />
                  </svg>
                </article>

                {/* WIND */}
                <article className={styleScore}>
                  <CircularProgressBar
                    percentage={result.evaluation.windScore.score * 20}
                  />
                  <h4>Wind</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={iconStyle}
                  >
                    <path
                      fillRule="evenodd"
                      d={result.evaluation.windScore.path}
                      clipRule="evenodd"
                    />
                  </svg>
                </article>

                {/* UV */}
                <article className={styleScore}>
                  <CircularProgressBar
                    percentage={result.evaluation.uvScore.score * 20}
                  />
                  <h4>UV</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={iconStyle}
                  >
                    <path
                      fillRule="evenodd"
                      d={result.evaluation.uvScore.path}
                      clipRule="evenodd"
                    />
                  </svg>
                </article>
              </section>
              <button
                className="py-3 w-full bg-black text-white h-fit"
                onClick={(): void => {
                  setResult({});
                  setIsGetResult(false);
                }}
              >
                Back
              </button>
            </aside>
          </div>
        ) : (
          <div className="h-full flex flex-col p-4 sm:p-8 gap-4 justify-center items-center w-full rounded-3xl bg-white/70 text-sm leading-6 shadow-lg ring-1 ring-gray-900">
            <h1 className="text-2xl font-semibold text-center">
              {result.error.message}
            </h1>
            <button
              className="py-3 w-full bg-black text-white h-fit max-w-64"
              onClick={(): void => {
                setResult({});
                setIsGetResult(false);
              }}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;
