import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

type Props = {
  setInputClothes: Function;
};

type OptionsObjects = {
  [key: string | number]: number | string;
  id: number;
  itemName: string;
  maxtemp_resistant: number;
  mintemp_resistant: number;
  wind_resistant: number;
  rain_resistant: number;
  snow_resistant: number;
  heat_resistant: number;
  uv_resistant: number;
};

interface ClothesCatagories {
  [key: string]: OptionsObjects[] | undefined;
}

export default function ClothesSelection({ setInputClothes }: Props) {
  // USE STATE
  const [categories, setCategories] = useState<ClothesCatagories>({});

  // USE EFFECT
  useEffect(() => {
    handleFetchOptions();
  }, []);

  // HANDLER FUNCTION
  const handleFetchOptions = async () => {
    const res = await fetch(`${BASE_URL}/clothes`);
    const data = await res.json();
    setCategories(data);
  };

  // RETURN
  return (
    <div className="relative animate-fade w-screen md:w-3/4 md:max-w-[1200px]">
      <div className="h-[500px] mt-5 flex">
        <div className="flex-auto w-full overflow-scroll rounded-3xl bg-white/70 text-sm leading-6 shadow-lg ring-1 ring-gray-900">
          {Object.keys(categories).map((option: string, index: number) => {
            return (
              <div
                key={index}
                className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60"
              >
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-2">
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                    <span className="absolute inset-0"></span>
                  </h2>
                  <ul className="mt-1 text-secondary flex gap-4 flex-wrap">
                    {categories[option] &&
                      categories[option].map(
                        (option: { itemName: string }, index: number) => (
                          <button
                            key={index}
                            className="py-2 px-6 bg-primary/60 rounded-full hover:bg-primary hover:text-black z-10"
                            onClick={() => {
                              setInputClothes(option.itemName);
                            }}
                          >
                            <a href="#" className="">
                              {option.itemName}
                            </a>
                          </button>
                        )
                      )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
