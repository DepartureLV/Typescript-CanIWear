import { useState } from "react";

import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  // USE STATE
  const [isGetResult, setIsGetResult] = useState<boolean>(false);
  const [result, setResult] = useState<any>({});

  // USE EFFECT

  // HANDLER FUNCTION

  // RETURN
  return (
    <div className="w-screen min-h-screen z-10 flex flex-col justify-center items-center text-primary">
      {isGetResult ? (
        <Result
          result={result}
          setResult={setResult}
          setIsGetResult={setIsGetResult}
        />
      ) : (
        <Search setIsGetResult={setIsGetResult} setResult={setResult} />
      )}
    </div>
  );
}

export default App;
