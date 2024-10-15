import React, { useEffect, useState } from "react";
import '../assets/styles/Counter.css'

function Counter() {
  let [counter, changeCounter] = useState(1);
  window.changeCounter = changeCounter;

  const handleIncrement = () => {
    changeCounter(counter + 1);
  };

  const handleDecrement = () => {
    changeCounter(counter - 1);
  };

  useEffect(() => {
    document.title = "Counter App";

    return () => {
      document.title = "Counter App";
    };
  }, []);

  return (
    <div className="App">
      <div className="counter-container">
        <h1 className="header">The Current Number is</h1>
        <h2 className="header">{counter}</h2>

        <button className="button-increment" onClick={handleIncrement}>
          +1
        </button>
        <button
          className="button-decrement"
          onClick={handleDecrement}
          disabled={counter <= 0}
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default Counter;
