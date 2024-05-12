import { useEffect, useState } from "react";

// import "./App.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
  // USE STATE
  const [inputClothes, setInputClothes] = useState<string>("");

  // USE EFFECT
  useEffect((): void => {}, []);

  // HANDLER FUNCTION

  // RETURN
  return (
    <>
      <h1 className="text-red-400">
        Can I wear{" "}
        <input
          type="search"
          value={inputClothes}
          onChange={(e) => setInputClothes(e.target.value)}
        />{" "}
        today ?
      </h1>
    </>
  );
}

export default App;
