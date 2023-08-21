import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import "./todo.css"
const Todo = () => {
    const [inputData, setInputData]=useState('')
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch()
  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                <figcaption>Add Your List Here ✌️</figcaption>  
                </figure>  

                <div className='addItems' >
                    <input 
                        type='text' 
                        placeholder='✍️ Add Items...' 
                        value={inputData} 
                        onChange={(event) => setInputData(event.target.value )}
                    />

                    
                   <button  onClick={() => dispatch(addTodo(inputData),setInputData(''))}
                    >➕ </button>
                    
                </div>  
                <div className='showItems'>
                    {
                        list.map((elem) => {
                            return(
                                <div className='eachItem' key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <div className='todo-btn'>
                                        <button title='Delete Item' onClick={()=>dispatch(deleteTodo(elem.id))}>❌</button>
                                    </div>
                                </div>
                            )
                            
                        })
                    }
                    
                </div>
                <div>
                    <button className='btn effect04' data-sm-link-text= "remove All"
                    onClick={()=>dispatch(removeTodo())}
                    >
                    <span>Clear List</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo;