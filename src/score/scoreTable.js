import React, { useState } from "react";
import "./score.css";

const ScoreTable = ({ roll, section, submitScore }) => {
  let [scored, setScored] = useState(new Array(section.length).fill(-1));

  const handleClick = (category, index) => () => {
    let temp = new Array(...scored);
    temp[index] = category(roll);
    setScored(temp);
    submitScore(category);
  };

  return (
    <table className="score-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {section.length > 0
          ? section.map((row, i) => (
              <tr key={row.id}>
                <td>{row.category}</td>
                <td>{row.description}</td>
                <td>
                  {scored[i] > -1 ? (
                    scored[i]
                  ) : (
                    <button
                      onClick={handleClick(row.calc, i)}
                      disable={scored[i].toString()}
                    >
                      Submit {row.calc ? row.calc(roll) : ""}
                    </button>
                  )}
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default ScoreTable;
