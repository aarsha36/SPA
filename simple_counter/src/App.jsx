import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="outer-box">
        <h1>Simple Counter</h1>

        <div className="counter">
          <button
            className="button"
            onClick={() => setCount(count - 1)}
          >
            −
          </button>

          <div className="inner-box">{count}</div>

          <button
            className="button"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
