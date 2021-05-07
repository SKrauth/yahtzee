import React, { useState } from "react";
import "./dice.css";

const Dice = props => {
  let [roll, setRoll] = useState([0, 0, 0, 0, 0]);
  let [hold, setHold] = useState([false, false, false, false, false]);
  let [rollCount, setRollCount] = useState(0);
  let [disableRoll, setDisableRoll] = useState(false);

  const handleNewRoll = () => {
    setDisableRoll(true);
    setRollCount(rollCount + 1);

    // TODO: repeat 3x times w/ delay to include animation
    setRoll(newRoll(roll, hold));
    setDisableRoll(rollCount < 3 ? false : true);
  };

  const handleNewHold = index => () => {
    let temp = new Array(...hold)
    temp[index] = !temp[index]
    setHold(temp)
  }

  const newRoll = (current, fixed) => {
    let output = [0, 0, 0, 0, 0];

    current.forEach((val, i) => {
      output[i] = fixed[i] ? current[i] : Math.floor(Math.random() * 5) + 1;
    });

    return output;
  };

  return (
    <>
      <div>
        {roll.map((val, i) => (
          <div key={`dice-${i}`} className="dice-box">
            {val ?
              <>
            <h3>{val}</h3>
            <button onClick={handleNewHold(i)} disable={disableRoll}>
              Hold
            </button>
            </>
            : null
          }
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleNewRoll} disable={disableRoll}>
          {rollCount < 3 ? `Roll ${rollCount}` : `No Rolls Remaining`}
        </button>
      </div>
    </>
  );
};

export default Dice;
