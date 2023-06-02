import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <div className='todo__wrapper'>
        <Todo title = "Complete Frontend Simplified"/>
        <Todo title = "Complete Interview Section"/>
        <Todo title = "Get a 100k job"/>
      </div>
    </div>
  );
}

export default App;
