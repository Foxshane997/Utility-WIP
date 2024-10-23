import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/Timer.css";

const CountdownTimer = () => {
  const [time, setTime] = useState(2400);
  const [selectedTime, setSelectedTime] = useState(2400);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now();

      intervalRef.current = setInterval(() => {
        const elapsedTime = Math.floor(
          (Date.now() - startTimeRef.current) / 1000
        );
        const newTime = selectedTime - elapsedTime;
        setTime(newTime >= 0 ? newTime : 0);

        if (newTime <= 0) {
          setIsRunning(false);
          clearInterval(intervalRef.current);
        }
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, selectedTime]);

  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value) * 60;
    setSelectedTime(newTime);
    setTime(newTime);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleStart = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setTime(selectedTime);
    setIsRunning(false);
    clearInterval(intervalRef.current);
    startTimeRef.current = null;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  const calculateStrokeOffset = (elapsedTime) => {
    const timeRatio = elapsedTime / selectedTime;
    const offset = circumference * (1 - timeRatio);
    return offset;
  };

  const strokeDasharray = circumference;
  const strokeDashoffset = isRunning
    ? calculateStrokeOffset(time)
    : calculateStrokeOffset(selectedTime);

  return (
    <div className="timer">
      <h1>Countdown Timer</h1>
      <div className="select-wrapper">
        <select value={selectedTime / 60} onChange={handleTimeChange}>
          <option value={5}>5 minutes</option>
          <option value={10}>10 minutes</option>
          <option value={15}>15 minutes</option>
          <option value={20}>20 minutes</option>
          <option value={30}>30 minutes</option>
          <option value={40}>40 minutes</option>
        </select>
      </div>
      <div className="circle">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r={radius} className="background-circle" />
          <circle
            cx="100"
            cy="100"
            r={radius}
            className="progress-circle"
            style={{ strokeDasharray, strokeDashoffset }}
          />
        </svg>
        <div className="time-text">{formatTime(time)}</div>
      </div>
      <div className="controls">
        <button className="start" onClick={handleStart}>
          Start
        </button>
        <button className="stop" onClick={handleStop}>
          Stop
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
