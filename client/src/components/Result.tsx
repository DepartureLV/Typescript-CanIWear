type Props = {
  result: any;
  setResult: Function;
  setIsGetResult: Function;
};

const styleScore =
  "flex flex-col-reverse gap-2 w-full p-3 mx-auto justify-between items-center bg-secondary/40 border-solid border-primary/60 border-4 rounded-xl";
const iconStyle = "w-6 h-6 text-highlight";

function Result({ result, setResult, setIsGetResult }: Props): JSX.Element {
  console.log("result", result);
  return (
    <div className="relative h-full animate-fade w-screen sm:w-3/4 md:max-w-[1200px]">
      <div className="mt-16 h-[700px] sm:h-[600px] flex">
        <div className="h-full flex sm:mt-0 flex-col sm:flex-row p-4 sm:p-8 gap-4 justify-center items-center w-full rounded-3xl bg-white/70 text-sm leading-6 shadow-lg ring-1 ring-gray-900">
          {/* RESULT MESSAGE */}
          <main className="h-1/2 sm:h-3/4 w-full sm:w-1/2 flex flex-col justify-between items-center">
            <h1 className="w-4/5 sm:aspect-square m-0 min-w-[200px] h-4/5 border-solid border-primary/60 border-8 rounded-2xl flex justify-center items-center bg-secondary/40 shadow-xl text-center">
              <span className="p-0 m-0 font-extrabold">{result.message}</span>
            </h1>
            <article className="w-4/5 mt-3">
              <p className="">
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
          <aside className="w-full h-auto flex-auto sm:w-1/3 sm:h-3/4 flex flex-col justify-between items-center">
            <section className="w-full grid grid-flow-row grid-cols-3 sm:grid-cols-2 gap-4">
              {/* MAX TEMP */}
              <article className={styleScore}>
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
                <h4>HI</h4>
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
              </article>
              {/* RAIN */}
              <article className={styleScore}>
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
      </div>
    </div>
  );
}

export default Result;
