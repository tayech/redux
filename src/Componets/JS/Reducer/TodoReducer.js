
import {ADD_TODO, EDIT_TODO,DELETE_TODO,COMPLETE_TODO} from '../ActionType/ActionType'

const initialState={
    todoList:[
        {
            text:"one",
            id:1,
            isDone:false,
        },
        {
            text:"to",
            id:2,
            isDone:false,
        },
        {
            text:"three",
            id:3,
            isDone:false,
        },
    ],
    }
const todoReducer=(state=initialState,{type,payload})=>{
    switch(type) {
        case ADD_TODO :{
            return{...state,todoList:[...state.todoList,payload]}
                       }
        case EDIT_TODO :{
            return {...state,
                    todoList: state.todoList.map((todo) => {
                    if (todo.id === payload.id) {
                    return { ...todo, text: payload.text };}
                    else {
                    return todo; }
                    }),
                  }; 
                 }
       
        case COMPLETE_TODO:
            return { ...state,
                todoList: state.todoList.map((todo) =>
                todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
 ),};
              
        case DELETE_TODO:
            return {...state,
                todoList: state.todoList.filter((todo) => todo.id !== payload),
                };
        default:
            return state;}};
 export default todoReducer;