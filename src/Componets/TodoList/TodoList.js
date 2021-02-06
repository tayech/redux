import React from 'react'
import {useSelector} from 'react-redux'
import ToDo from '../ToDo/ToDo'
import './TodoList.css'
const TodoList = ({done,Undone}) => {
const todoList=useSelector((state)=>state.todoList)
    return (
        <div >  
        { done === Undone
         ?todoList.map((todo)=>(
         <ul style={{textDecoration:"none" }}>
         <ToDo todo={todo}/>    
         </ul>
         )):done
          ? todoList
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <ul style={{textDecoration:"none" }}>
                <ToDo todo={todo} />
              </ul>
            )): todoList
            .filter((todo) => todo.isDone === false)
            .map((todo) => (
              <ul style={{textDecoration:"none" }}>
                <ToDo todo={todo} />
              </ul>
            ))
         }   
        </div>
    )
}

export default TodoList

