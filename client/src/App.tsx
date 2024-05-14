import { useState } from "react";
import ClothesSelection from "./components/ClothesSelection";
import CitiesSearch from "./components/CitiesSearch";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
  // USE STATE
  const [inputClothes, setInputClothes] = useState<string>("");
  const [inputLocation, setInputLocation] = useState<string>("");
  const [inputClothesCatagories, setInputClothesCatagories] = useState<any>([]);
  const [isSearchingClothes, setIsSearchingClothes] = useState<boolean>(false);
  const [isSearchingLocation, setIsSearchingLocation] =
    useState<boolean>(false);

  // USE EFFECT

  // HANDLER FUNCTION
  const handleSendUserChoice = async (): Promise<void> => {
    const res = await fetch(`${BASE_URL}/result/today`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clothes: inputClothes,
        catagories: inputClothesCatagories,
        location: inputLocation,
      }),
    });
    const data = await res.json();
  };

  // RETURN
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center text-primary">
      <div className="flex flex-col mt-16 md:flex-row items-center text-2xl">
        {/* INPUT */}
        Can I wear{" "}
        <input
          className="p-2 bg-white/70 text-center mx-2"
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
          className="p-2 bg-white/70 text-center mx-2"
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
        <button
          className="min-w-fit h-fit py-4 px-8 mx-2 lg:ml-8 bg-black text-white text-sm"
          onClick={handleSendUserChoice}
        >
          Search
        </button>
      </div>

      {/* LAYOUT SHIFT */}
      {!isSearchingClothes && !isSearchingLocation ? (
        <div className="w-full h-[520px]"></div>
      ) : null}

      {/* CLOTHE SELECTION */}
      {isSearchingClothes && !isSearchingLocation && (
        <ClothesSelection
          setInputClothes={setInputClothes}
          setInputClothesCatagories={setInputClothesCatagories}
        />
      )}
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
