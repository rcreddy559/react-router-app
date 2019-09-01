import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Derement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>Counter with reducer</h1>
      </div>
      <div> Count: {state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: "Increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Derement" })}>Derement</button>
      </div>
    </div>
  );
}
