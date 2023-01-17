import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
    const [todos,setTodos] = useState([]);
    const [input, setInput] = useState('');




    const handleChange = (e) => {
         setInput(e.target.value);
         
    }

    const addTodos = () => {
        if (input==='') {
            return    
        } else {
            setTodos(prevState => [...prevState, {
                id: todos.length + 1,
                text: input 
            }]) 
        }
        
    }

    const deleteTodo = (todo) => {
       const removedItem = todos.filter( item => item !== todo);
       setTodos(removedItem)
    }

    

  return (
    <>
        <div class="opt">
    <h1> My To Do List</h1>
    <div class="btn">
        <input type="text" placeholder="Title..." value={input} onChange={handleChange}/><button onClick={addTodos}> Add</button>
    </div>
    </div>
    <div className='todos'>
        {
            todos.map((todo) => {
                return  <div id="td1" key={todo.id}>
                            <p>{todo.text}</p>
                             <button className='' onClick={() => deleteTodo(todo)}>Delete</button>
                         </div>
            })
        }

   </div>     
   </> 
  )
}

export default App;
