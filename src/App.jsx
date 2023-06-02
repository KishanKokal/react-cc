import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <div className='todo__wrapper'>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
