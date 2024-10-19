import React, { useState } from "react";
import '../assets/styles/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResults] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResults("");
  };

  const handleEqual = () => {
    try {
      setResults(eval(input));
    } catch (error) {
      setResults("error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => handleClick(op)} id={op}>
            {op}
          </button>
        ))}
        <button onClick={handleClear} id="clear">C</button>
        <button onClick={handleEqual} id="equal">=</button>
      </div>
    </div>
  );
};

export default Calculator;
 