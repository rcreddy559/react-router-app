import React, { useReducer, useContext, useEffect } from "react";

//Ref: https://www.youtube.com/watch?v=YKmiLcXiMMo

function appReducer(state, action) {
  switch (action.type) {
    case "reset":
      return action.payload;

    case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          compleated: false
        }
      ];
    }
    case "delete":
      return state.filter(item => item.id !== action.payload);
    case "compleated":
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, compleated: !item.compleated };
        }
        return item;
      });
    default:
      return state;
  }
}

const Context = React.createContext();

export default function TodosApp() {
  const [state, dispatch] = useReducer(appReducer, []);

  useEffect(() => {
    const rawData = localStorage.getItem("data");
    dispatch({ payload: JSON.parse(rawData), type: "reset" });
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);
  return (
    <Context.Provider value={dispatch}>
      <h3>Todo app with useReducer() hook</h3>
      <button onClick={() => dispatch({ type: "add" })}> new Todo</button>
      <TodoList items={state}></TodoList>
    </Context.Provider>
  );
}

function TodoList({ items }) {
  return items.map(items => <TodoItem {...items}></TodoItem>);
}

function TodoItem({ id, compleated, text }) {
  const dispatch = useContext(Context);

  return (
    <div key={id}>
      <input
        type="checkbox"
        checked={compleated}
        onChange={() => dispatch({ type: "compleated", payload: id })}
      />
      id: {id}, Text: {text},compleated: {compleated ? "YES" : "NO"}
      <button onClick={() => dispatch({ type: "delete", payload: id })}>
        Delete
      </button>
    </div>
  );
}
