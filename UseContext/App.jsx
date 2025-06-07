import React, { createContext, useState } from "react";
import ChildA from "./components/ChildA";

const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("Parmeshwar");
  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </div>
  );
};

export default App;
export { UserContext };
