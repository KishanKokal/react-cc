import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import React, { useState } from 'react';

function App() {
  const [showModal, toggleShowModal] = useState(false)

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => toggleShowModal(true)}>Add Todo</button>
      </div>
      <h1>My Todo List</h1>
      <div className="todo__wrapper">
        <Todo
          title="Complete Frontend Simplified"
          para="Code along with Frontend Simplified step-by-step."
        />
        <Todo
          title="Complete Interview Section"
          para="Finish interview questions in next 6 weeks"
        />
        <Todo title="Get a 100k job" para="apply to 100 jobs" />
        {showModal ? <Modal /> : <></>}
        <Counter/>
      </div>
    </div>
  );
}

export default App;
