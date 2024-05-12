import { useEffect, useState } from "react";
import ClothesSelection from "./components/ClothesSelection";
import CitiesSearch from "./components/CitiesSearch";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  // USE STATE
  const [inputClothes, setInputClothes] = useState<string>("");
  const [inputLocation, setInputLocation] = useState<string>("");
  const [isSearchingClothes, setIsSearchingClothes] = useState<boolean>(false);
  const [isSearchingLocation, setIsSearchingLocation] =
    useState<boolean>(false);

  // USE EFFECT

  // HANDLER FUNCTION
  const handleSendUserChoice = async (): Promise<void> => {
    const res = await fetch(`${BASE_URL}/result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clothes: inputClothes,
        location: inputLocation,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  // const handleGetWeatherData = async (): Promise<void> => {
  // const res = await fetch(
  //   `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputLocation}`
  // );
  // const data = await res.json();
  // console.log(data);
  // };

  // RETURN
  return (
    <div className="w-screen min-h-screen max-h-full flex flex-col justify-center items-center text-primary">
      <div className="flex flex-col lg:flex-row items-center ">
        {/* INPUT */}
        <h1 className="text-center text-pretty">
          Can I wear{" "}
          <input
            className="p-2 bg-white/40 text-center"
            type="search"
            value={inputClothes}
            placeholder="Shirt"
            onClick={(): void => {
              setIsSearchingClothes(true);
              setIsSearchingLocation(false);
            }}
            onChange={(e): void => {
              setInputClothes(e.target.value);
            }}
          />{" "}
          in{" "}
          <input
            className="p-2 bg-white/40 text-center"
            type="search"
            value={inputLocation}
            placeholder="Tokyo"
            onClick={(): void => {
              setIsSearchingClothes(false);
              setIsSearchingLocation(true);
            }}
            onChange={(e): void => {
              setInputLocation(e.target.value);
            }}
          />
          ?
        </h1>
        {inputLocation.length >= 2 && (
          <button
            className="min-w-fit h-fit py-4 px-8 ml-8 bg-black text-white"
            onClick={handleSendUserChoice}
          >
            Search
          </button>
        )}
      </div>

      {/* LAYOUT SHIFT */}
      {!isSearchingClothes && !isSearchingLocation ? (
        <div className="w-full h-[520px]"></div>
      ) : null}

      {/* CLOTHE SELECTION */}
      {isSearchingClothes && !isSearchingLocation ? <ClothesSelection /> : null}
      {isSearchingLocation && !isSearchingClothes && (
        <CitiesSearch
          inputLocation={inputLocation}
          setInputLocation={setInputLocation}
          setIsSearchingLocation={setIsSearchingLocation}
        />
      )}
    </div>
  );
}

export default App;
