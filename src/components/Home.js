import React, { useRef, useEffect, useState } from "react";

function Home() {
  const [buttonText, setButtonText] = useState("Click");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);
  const message = useRef(null);

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
        `Hello ${firstNameRef.current.value}, ${
          lastNameRef.current.value
        }, Thanks for submitting your details!`
      );

      setButtonText("Submitted");
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <div ref={message} />
      <div>
        <label>First Name:</label>

        <input
          type="text"
          placeholder="First Name"
          ref={firstNameRef}
          onKeyDown={firstNameDown}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="First Name"
          ref={lastNameRef}
          onKeyDown={lastNameDown}
        />
        <div>
          <button ref={submitRef} onKeyDown={submitNameDown}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
