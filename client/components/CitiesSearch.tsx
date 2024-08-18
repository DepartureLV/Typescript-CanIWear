import cities from "../utils/cities";

type Props = {
  inputLocation: string;
  setInputLocation: Function;
  setIsSearchingLocation: Function;
};

export default function CitiesSearch({
  inputLocation,
  setInputLocation,
  setIsSearchingLocation,
}: Props) {
  // USE STATE

  // USE EFFECT

  // HANDLER FUNCTION

  // RETURN
  return (
    <div className="h-[500px] w-screen md:w-3/4 md:max-w-[1200px] overflow-scroll animate-fade bg-white/70 px-4 pt-0 mt-5 rounded-3xl shadow-lg">
      <h3 className="text-lg font-semibold p-4 m-[-16px] sticky top-0 bg-white border-b-[0.5px] border-secondary">
        Search Result
      </h3>
      <ul className="grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-rows-3 text-xs mt-8">
        {inputLocation.length > 0
          ? cities.map((city, index) =>
              city.toLowerCase().includes(inputLocation.toLowerCase()) ? (
                <li
                  className="py-4 px-2 cursor-pointer transition ease-in-out duration-300 hover:bg-primary/60 hover:font-semibold text-center"
                  key={index}
                  onClick={() => {
                    setInputLocation(city);
                    setIsSearchingLocation(false);
                  }}
                >
                  <a className="line-clamp-1">{city}</a>
                </li>
              ) : null
            )
          : cities.map((city, index) => (
              <li
                className="py-4 px-2 cursor-pointer transition ease-in-out duration-300 hover:bg-primary/60 hover:font-semibold text-center"
                key={index}
                onClick={() => {
                  setInputLocation(city);
                  setIsSearchingLocation(false);
                }}
              >
                <a className="line-clamp-1">{city}</a>
              </li>
            ))}
      </ul>
    </div>
  );
}
