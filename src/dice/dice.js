import React from "react";
import "./dice.css";

const Dice = ({ roll, setRoll, rollCount, setRollCount, hold, setHold }) => {
  const handleNewRoll = () => {
    setRollCount(rollCount + 1);
    setRoll(newRoll(roll, hold));
  };

  const handleNewHold = index => () => {
    let temp = new Array(...hold);
    temp[index] = !temp[index];
    setHold(temp);
  };

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
            {val ? (
              <>
                <h3>{val}</h3>
                <button onClick={handleNewHold(i)}>
                  {hold[i] ? "Release" : "Hold"}
                </button>
              </>
            ) : null}
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleNewRoll} disable={(rollCount > 3).toString()}>
          {rollCount < 3 ? `Roll ${rollCount}` : `No Rolls Remaining`}
        </button>
      </div>
    </>
  );
};

export default Dice;
