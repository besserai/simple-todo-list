import './App.css';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import NavBar from './components/NavBar';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import TodoList from './components/TodoList';


function App() {

  const [itemList, setItemList] = useState([{ "id": uuid(), "name": "clean", "done": false },
  { "id": uuid(), "name": "shopping", "done": true }]);

  return (
    <div className="App">

      {/* <NavBar /> */}

      <div className='todo-list'>

        <h1>Todos</h1>

        <TodoList itemList={itemList} setItemList={setItemList} />

      </div >

    </div >
  );
}

export default App;
