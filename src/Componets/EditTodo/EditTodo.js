import React,{useState} from 'react';

import Modal from 'react-modal';
import {editTodo} from "../JS/Action/Action";
import {useDispatch} from 'react-redux';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const EditTodo =({todo})=>{
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [newTextTodo, setNewTextTodo] = useState(todo.text)
    const dispatch = useDispatch()
    
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
    const handelEdit = () => {
      dispatch(editTodo({ text: newTextTodo, id: todo.id }));
  
      closeModal();
    };
      return (
        <div>
          <i class="fas fa-user-edit" onClick={openModal}></i>
          
          <Modal
            isOpen={modalIsOpen}
           
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <form>
              <input value={newTextTodo} 
              onChange={(e)=>setNewTextTodo(e.target.value)}/>
              
              <button onClick={handelEdit}>add</button>
             
            </form>
          </Modal>
        </div>
      );
  }
 export default EditTodo 