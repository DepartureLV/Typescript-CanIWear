import { useEffect, useState } from "react";

// import "./App.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
  // USE STATE
  const [user, setUser] = useState<[{ name: string; email: string }] | null>(
    null
  );

  // USE EFFECT
  useEffect((): void => {
    handleLoadTestUser();
  }, []);

  // HANDLER FUNCTION
  const handleLoadTestUser = async (): Promise<void> => {
    const res = await fetch(`${BASE_URL}/users`);
    const data = await res.json();
    console.log(data);
    setUser(data);
  };

  // RETURN
  return (
    <>
      <h1>Hello</h1>
      <div>
        {user
          ? user.map((user, index) => (
              <p
                key={index}
              >{`Hi, I'm ${user.name}, my email is ${user.email}`}</p>
            ))
          : "Loading..."}
      </div>
    </>
  );
}

export default App;
