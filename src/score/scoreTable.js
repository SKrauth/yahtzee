import React, { useState } from "react";
import "./score.css";

const ScoreTable = ({ roll, section, submitScore }) => {
  let [scored, setScored] = useState(new Array(section.length).fill(false));

  const handleClick = (category, index) => () => {
    let temp = new Array(...scored);
    temp[index] = !temp[index];
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
                  {scored[i] ? (
                    row.calc(roll)
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
