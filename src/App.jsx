import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => console.log("button clicked")}>Add Todo</button>
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
      </div>
    </div>
  );
}

export default App;
