import "./Todo.css";

function Todo({ title, para }) {
  return (
    <div className="test">
      <h2>{title}</h2>
      <p>{para}</p>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
