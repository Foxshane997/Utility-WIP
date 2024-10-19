import React, { useState, useEffect } from "react";
import { create, all } from "mathjs";
import "../assets/styles/Calculator.css";

const math = create(all);

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResults] = useState("");

  useEffect(() => {
    const storedInput = localStorage.getItem("calculatorInput");
    const storedResult = localStorage.getItem("calculatorResult");

    if (storedInput) {
      setInput(storedInput);
    }
    if (storedResult) {
      setResults(storedResult);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("calculatorInput", input);
    localStorage.setItem("calculatorResult", result);
  }, [input, result]);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResults("");
  };

  const handleEqual = () => {
    try {
      const sanitizedInput = input.replace(/\s+/g, "");
      const evaluatedResult = math.evaluate(sanitizedInput);
      setResults(evaluatedResult);
    } catch (error) {
      console.error("Error during evaluation:", error);
      setResults("error");
    }
  };

  return (
    <div className="calculator-container">
      <h1>Calculator</h1>
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
        <button className="operator-button" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="operator-button" onClick={() => handleClick("-")}>
          -
        </button>
        <button
          className="operator-button-regular"
          onClick={() => handleClick("*")}
        >
          *
        </button>
        <button
          className="operator-button-regular"
          onClick={() => handleClick("/")}
        >
          /
        </button>
        <button onClick={handleClear} id="clear">
          C
        </button>
        <button onClick={handleEqual} id="equal">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
