import { useState } from "react";

import ClothesSelection from "../components/ClothesSelection";
import CitiesSearch from "../components/CitiesSearch";

const BASE_URL = import.meta.env.VITE_BASE_URL;

type Props = {
  setIsGetResult: Function;
  setResult: Function;
};

function Search({ setIsGetResult, setResult }: Props) {
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

    if (data) {
      setResult(data);
      setIsGetResult(true);
    }
  };

  // RETURN
  return (
    <>
      <div className="flex flex-col mt-16 md:flex-row items-center text-2xl">
        {/* INPUT */}
        Can I wear{" "}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendUserChoice();
          }}
        >
          <input
            className="p-2 bg-white/70 text-center mx-2"
            type="search"
            value={inputClothes}
            autoFocus
            placeholder="Shirt"
            onFocus={(): void => {
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
            onFocus={(): void => {
              setIsSearchingClothes(false);
              setIsSearchingLocation(true);
            }}
            onChange={(e): void => {
              setInputLocation(e.target.value);
            }}
          />
          ?
          <button
            className="min-w-fit h-fit py-4 px-8 mx-2 lg:ml-8 bg-black text-white text-sm disabled:bg-secondary/80"
            onClick={handleSendUserChoice}
            disabled={inputClothes.length < 1 || inputLocation.length < 1}
          >
            Search
          </button>
        </form>
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
    </>
  );
}

export default Search;
