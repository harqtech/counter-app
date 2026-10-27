import { useState } from "react";
import "./App.css";

function App() {
  // Create state for the counter
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>My Counter App</h1>

      <p className="count">{count}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increase</button>

        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
