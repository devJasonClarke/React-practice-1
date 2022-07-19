import { useState } from "react";
import Counter from "./components/Counter";
import Person from "./components/Person";

const App = () => {
  const firstName = "James";
  const lastName = "Whitman";
  const [isNameShowing, setIsNameShowing] = useState(true);

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>{isNameShowing ? `${firstName} ${lastName}` : ""}</p>
      <button onClick={() => setIsNameShowing(!isNameShowing)}>change</button>
      <Counter />
      {isNameShowing ? (
        <>
          <Person firstName={firstName} />
          <Person firstName="Jason" lastName={"Clarke"} />
          <Person firstName="George" />
          <Person firstName="Henry" lastName={"stewart"} />
        </>
      ) : (
        lastName
      )}
    </div>
  );
};

export default App;
