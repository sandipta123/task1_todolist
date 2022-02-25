
import React, { useState } from 'react';
import '../App.css';
export const Addtodo = ({addTodo})=> {
  const [title,setTitle]=useState("");
  const submit =(e)=>{
     e.preventDefault();
     if(!title){
         alert("nothing entered")
     }
     else{
     addTodo(title);
     setTitle("");
     }
  }
  return (  
      <div className='container'>
            <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label"><h3>My To Do List</h3>
            <br/>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder='enter your title'/></label>
            <button type="submit" className="btn btn-success">Add todo</button>
        </div>    
        </form>
  </div>)
}
