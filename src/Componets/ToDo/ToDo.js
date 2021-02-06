import React from 'react'
import EditTodo from '../EditTodo/EditTodo'
import {completeTodo, deleteTodo} from "../JS/Action/Action";
import { useDispatch } from "react-redux";

import './ToDo.css'
const ToDo = ({todo}) => {
const dispatch = useDispatch();
    return (
        <div>
          <li >
        <span
         style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
         onClick={() => dispatch(completeTodo(todo.id))}>{todo.text}</span>
             <i class="fas fa-trash-alt"
             onClick={() => dispatch(deleteTodo(todo.id))}></i>  
              <EditTodo todo={todo}/>
          </li>  
        </div>
    )
}

export default ToDo
