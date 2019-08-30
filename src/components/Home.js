import React, { useRef, useEffect, useState } from "react";
import TodosApp from "./hooks/todospp";

function Home() {
  const initialCount = 10;
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);
  const message = useRef(null);

  const [buttonText, setButtonText] = useState("Click");
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    firstNameRef.current.focus();
    setButtonText("Click Me, Please");
  }, []);

  const firstNameDown = e => {
    if (e.key === "Enter") {
      console.log(e.key, buttonText);
      lastNameRef.current.focus();
    }
  };

  const lastNameDown = e => {
    if (e.key === "Enter") {
      console.log(e.key);
      submitRef.current.focus();
    }
  };

  const submitNameDown = e => {
    if (e.key === "Enter") {
      console.log(
        `Hello ${firstNameRef.current.value}, ${lastNameRef.current.value}, Thanks for submitting your details!`
      );

      setButtonText("Submitted");
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <div ref={message} />
      <div className="user">
        <label>First Name:</label>

        <input
          type="text"
          placeholder="First Name"
          ref={firstNameRef}
          onKeyDown={firstNameDown}
        />
      </div>
      <div className="user">
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          ref={lastNameRef}
          onKeyDown={lastNameDown}
        />
        <div>
          <button ref={submitRef} onKeyDown={submitNameDown} className="submit">
            {buttonText}
          </button>
        </div>
      </div>
      <p>
        <div className="count">
          Count: {count}
          <button onClick={() => setCount(initialCount)}>Reset</button>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>
            +
          </button>
          <button onClick={() => setCount(prevCount => prevCount - 1)}>
            -
          </button>
        </div>
      </p>
      <TodosApp></TodosApp>
    </div>
  );
}

export default Home;
