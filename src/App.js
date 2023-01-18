import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
    const [todos,setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [editTodo, setEditTodo] = useState('');
    // const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const handleChange = (e) => {
         setInput(e.target.value);     
    }

    // const handleDateChange = (e) => {
    //     setDate(e.target.value);
    // }

    const handleTimeChange = (e) => {
        setTime (e.target.value);
    }

     const addTodos = () => {
        if (input==='' ) {
            return    
        } else {
            setTodos(prevState => [...prevState, {
                id: todos.length + 1,
                text: input, 
                
            }]) 
        }
        
    }
 

    const deleteTodo = (todo) => {
       const removedItem = todos.filter( item => item !== todo);
       setTodos(removedItem)
    }

    
return (
    <>
    <div>
        <div class="cont">
            <h3> Hi ICE!</h3>
           <p>Welcome Back! </p> 
            <input type="text" placeholder="Enter your to do." className='add' onChange={handleChange} value={input}/><button onClick={addTodos}>Add</button> 
            {/* <input type='date' className='date' onChange={handleDateChange} value={date}/>     */}
            <input type='datetime-local' className='time' onChange={handleTimeChange} value={time}/>
        </div>
        <div>
            {
                todos.map(todo => {
                    return <div id="one" key={todo.id}>
                             <p>{todo.text} <span>{todo.date}</span></p>

                              <div>
                                  <button id='delete' onClick={() =>deleteTodo(todo)}>Delete</button>
                                  <button id='edit'>Edit</button>
                             
                             </div>                           </div>
                })
            }
        </div>
        <div id="one">
            <p>Pray <span>7am</span></p>
        </div>
        <div id="two">
            <p> Daily Stand Up Meeting <span>8am</span> </p>
        </div>
        <div id="three">
            <p> Work on project <span>10am</span></p>
        </div>
        <div id="four">
            <p> Practice French <span> 11am & 10:30pm</span></p>
        </div>
        {/* <div id="five">
            <p>Call Spouse <span> 10pm</span></p>
        </div>
        <div id="six">
            <p> Quiet Time <span> 11:30pm</span></p>
        </div>
        <div id="seven">
            <p> Read & Practice <span>12am</span></p>
        </div> */}
    </div>
       
   </> 
  )
}

export default App;
