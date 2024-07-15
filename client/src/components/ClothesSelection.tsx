import { useEffect, useState } from "react";
import ClothesSelectionSkeleton from "./ClothesSelectionSkeleton";
import { IoShirtOutline } from "react-icons/io5";

const BASE_URL = import.meta.env.VITE_BASE_URL;

type Props = {
  setInputClothes: Function;
  setInputClothesCatagories: Function;
};

type OptionsObjects = {
  [key: string | number]: number | string;
  id: number;
  catagoryName: string;
  maxtemp_resistant: number;
  mintemp_resistant: number;
  wind_resistant: number;
  rain_resistant: number;
  snow_resistant: number;
  heat_resistant: number;
  uv_resistant: number;
};

export default function ClothesSelection({
  setInputClothes,
  setInputClothesCatagories,
}: Props) {
  // USE STATE
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // USE EFFECT
  useEffect(() => {
    handleFetchOptions();
  }, []);

  // HANDLER FUNCTION
  const handleFetchOptions = async () => {
    const res = await fetch(`${BASE_URL}/clothes`);
    const data = await res.json();
    const dataArr = Object.entries(data);
    setCategories(dataArr);
    setIsLoading(false);
  };

  // RETURN
  return (
    <div className="relative animate-fade w-screen md:w-3/4 md:max-w-[1200px]">
      <div className="h-[500px] mt-5 flex">
        <div className="flex-auto w-full overflow-scroll rounded-3xl bg-white/70 text-sm leading-6 shadow-lg ring-1 ring-gray-900">
          {isLoading ? (
            <>
              <ClothesSelectionSkeleton />
            </>
          ) : (
            categories.map((catagory, index) => {
              return (
                <div
                  key={index}
                  className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <IoShirtOutline className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900 mb-2">
                      {catagory[0]}
                    </h2>
                    <ul className="mt-1 text-white flex gap-4 flex-wrap">
                      {catagory[1].map(
                        (clotheOption: OptionsObjects, index: number) => (
                          <button
                            key={index}
                            className="py-[2px] px-4 bg-primary/60 rounded-full hover:bg-primary hover:text-white z-10 font-[500]"
                            onClick={() => {
                              setInputClothes(clotheOption.itemName);
                              setInputClothesCatagories(catagory[0]);
                            }}
                          >
                            {clotheOption.itemName}
                          </button>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
