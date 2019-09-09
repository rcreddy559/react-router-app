import React, { useReducer } from "react";
export default function AddWithReducer() {
  const numbers = [1, 2, 3, 4];
  
  const reducerdNumbers = numbers.reduce((total, number) => {
    return total + number;
  }, 0);
  
  console.log(reducerdNumbers);
  return (
    <div>
      <div>
        <h1>Add with useReducer</h1>{" "}
      </div>

      <div>
        {numbers.map(n => (
          <div key={n}>{n}</div>
        ))}
      </div>
    </div>
  );
}
