import React,{useState,useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel,Input} from '@material-ui/core';
import Todo from './components/todo'

import db from './firebase';
import firebase from 'firebase'

function App() {
  const [todos,setTodo] = useState([])
  const [input,setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy("timestamp","desc").onSnapshot(snapshot => {
      console.log("ravi",snapshot.docs )
      setTodo(snapshot.docs.map(doc => doc.data().todo ))
    })
  }, [])

  const addTodo =(event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodo([...todos,input])
    setInput('');
  }
   return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Enter A Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="secondary">
           Add Todo
        </Button>
      </form>
      <ul>
      {todos.map(todo => {
        return(
          <Todo todo={todo}/>
        // <li>{todo}</li>
        )
      })}

      </ul>
      
    </div>
  );
}

export default App;
