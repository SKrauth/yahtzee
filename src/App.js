import React, { useState } from "react";
import "./App.css";
import Dice from "./dice/dice";
import Score from "./score/score";

function App() {
  let [turn, setTurn] = useState(0);
  let [totalScore, setTotalScore] = useState(0);
  let [roll, setRoll] = useState([0, 0, 0, 0, 0]);
  let [hold, setHold] = useState([false, false, false, false, false]);
  let [rollCount, setRollCount] = useState(0);

  let takeTurn = score => {
    setTotalScore(totalScore + score);
    setTurn(turn + 1);
    setRoll([0, 0, 0, 0, 0]);
    setHold([false, false, false, false, false]);
    setRollCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="header-item pull-left">Turn: {turn} of 13</h2>
        <h2 className="header-item pull-right">Score: {totalScore}</h2>
      </header>
      <div className="container">
        <Dice
          roll={roll}
          setRoll={setRoll}
          hold={hold}
          setHold={setHold}
          rollCount={rollCount}
          setRollCount={setRollCount}
        />
        <hr />
        <Score roll={roll} takeTurn={takeTurn} />
      </div>
    </div>
  );
}

export default App;
