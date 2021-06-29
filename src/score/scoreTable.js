import React, { useState } from "react";
import "./score.css";

const ScoreTable = ({ roll, section, submitScore }) => {
  let [scored, setScored] = useState(new Array(section.length).fill(null));

  const handleClick = (category, index) => () => {
    let temp = new Array(...scored);
    temp[index] = category(roll);
    setScored(temp);
    submitScore(category);
  };

  const sectionTotal = scored.reduce((a, b) => a + b, 0);

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
                  {scored[i] !== null ? (
                    scored[i]
                  ) : row.bonus ? (
                    row.calc(sectionTotal)
                  ) : (
                    <button onClick={handleClick(row.calc, i)}>
                      Submit {row.calc ? row.calc(roll) : ""}
                    </button>
                  )}
                </td>
              </tr>
            ))
          : null}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">Total:</td>
          <td>
            {section[section.length - 1].bonus
              ? sectionTotal + section[section.length - 1].calc(sectionTotal)
              : sectionTotal}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ScoreTable;
