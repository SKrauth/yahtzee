import React, { useState } from "react";
import "./App.css";
import Dice from "./dice/dice";
import Score from "./score/score";
import EndGame from "./endgame/endgame";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


function App() {
  let [turn, setTurn] = useState(0);
  let [totalScore, setTotalScore] = useState(0);
  let [roll, setRoll] = useState([0, 0, 0, 0, 0]);
  let [hold, setHold] = useState([false, false, false, false, false]);
  let [rollCount, setRollCount] = useState(0);

  // key for score component reset, could hold a prev game state too?
  let [gameCount, setGameCound] = useState(0);

  let takeTurn = score => {
    setTotalScore(totalScore + score);
    setTurn(turn + 1);
    setRoll([0, 0, 0, 0, 0]);
    setHold([false, false, false, false, false]);
    setRollCount(0);
  };

  let newGame = () => {
    setTotalScore(0);
    setTurn(0);
    setRoll([0, 0, 0, 0, 0]);
    setHold([false, false, false, false, false]);
    setRollCount(0);
    setGameCound(gameCount + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="header-item pull-left">Turn: {turn} of 13</h2>
        <h2 className="header-item pull-right">Score: {totalScore}</h2>
      </header>
      <AmplifySignOut />
      <div className="container">
        {turn >= 13 ?
          <EndGame handleClick={newGame} score={totalScore} /> :
          <Dice
            roll={roll}
            setRoll={setRoll}
            hold={hold}
            setHold={setHold}
            rollCount={rollCount}
            setRollCount={setRollCount}
          />
        }
        <hr />
        <Score roll={roll} takeTurn={takeTurn} key={gameCount} />
      </div>
    </div>
  );
}

export default withAuthenticator(App);
