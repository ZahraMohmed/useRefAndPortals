import React, { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const handelStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeremaining) => prevTimeremaining - 10);
    }, 10);
    setTimeStart(true);
  };
  const userLost = timeRemaining <= 0;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }
  const handelStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };
  const restTime = () => {
    setTimeRemaining(targetTime * 1000);
  };
  return (
    <>
      <ResultModel
        ref={dialog}
        result="lose"
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        restTime={restTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {userLost && <p>You are lost </p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : " "}
        </p>
        <button onClick={timeIsActive ? handelStop : handelStart}>
          {" "}
          {timeIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "  Time is running ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
