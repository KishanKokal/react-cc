import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        +
      </button>
      {counter}
      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default Counter;
