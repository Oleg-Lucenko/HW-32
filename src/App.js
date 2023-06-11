import React from 'react';
import { useState } from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { addTask, deleteTask, done} from './redux/reducers/tasks';

function App() {

  const dispatch = useDispatch();

  const todos = useSelector((store) => store.tasks.todos);

  const [task, setTask] = useState('');


  return (
    <div className="App">
      <div className='create-todo-container'>
        <input value={task} type="text" onChange={(e) => setTask(e.target.value)} className='input-text'/>
          <button type='button' onClick={() => {
              if (task.trim()) {
              {dispatch(addTask(task)); setTask('')}
              };
            }
            }>Add task</button>
      </div>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id} onClick={() => dispatch(done(item.id))}>
              <input type="checkbox" className="input-checkbox" checked={item.isDone ? "checked" : ""} readOnly={true} />
              <p>{item.title}</p>
              <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
            </li>
          ) )
        }
      </ul>

    </div>
  );
}

export default App;
