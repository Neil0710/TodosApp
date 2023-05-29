import { useEffect, useState } from 'react';
import {Button, FormControl, InputLabel, Input} from '@mui/material';
import './App.css';
import Todo from './Todo.js';
import {db} from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() =>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    // fired when button is clicked
    event.preventDefault();//will stop the refreshing of page

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      setTodos([...todos, input]);
      setInput('');//will clear up the input
  }

  return (
    <div className="App">
      <h1>Hello Nilesh Nirgude</h1>
      <form>
       <FormControl>
        <InputLabel>
        Write A Todo
        </InputLabel>
          <Input type="text" value={input} onChange={event => setInput(event.target.value)}></Input>
       </FormControl>
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained">Add Todo</Button>
      </form>

      <ul>
        {todos.map(todo => {
          return <Todo text={todo}/>
        })}
      </ul>
    </div>
  );
}

export default App;
