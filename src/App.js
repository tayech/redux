import logo from './logo.svg';
import './App.css';
import AddTodo from './Componets/AddTodo/AddTodo';
import TodoList from './Componets/TodoList/TodoList';
import Filter from './Componets/Filter/Filter';
import {useState} from 'react'
function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);
  return (
    <div className="App">
     <AddTodo/>
     <Filter setDone={setDone} setUndone={setUndone}/>
     <TodoList done={done} unDone={unDone}/>
    </div>
  );
}

export default App;
