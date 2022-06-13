import { useState } from "react";
import { MyContext } from "./context/MyContext";
import { User } from "./component/User";

function App() {
  const [state, setState] = useState({
    arr: [],
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      <div className="App container">
        <User />
      </div>
    </MyContext.Provider>
  );
}

export default App;
