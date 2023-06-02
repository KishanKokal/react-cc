import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 2);
        }}
      >
        +
      </button>
      {counter}
      <button
        onClick={() => {
          setCounter(counter - 2);
        }}
      >
        -
      </button>
    </>
  );
}

export default Counter;
