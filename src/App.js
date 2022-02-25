import './App.css';
import Header from "./mycomponents/Header";
import {Footer} from "./mycomponents/Footer";
import {Todos} from "./mycomponents/Todos";
import {Addtodo} from "./mycomponents/Addtodo";
import React, { useState } from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const oncomplete=(todo)=>{
    let index=todos.indexOf(todo);
      return true;
  }; 

  const onDelete=(todo)=>{
    console.log(" delete",todo);
    let index=todos.indexOf(todo);
    todos.splice(index,1);
  
    setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));
}
  const addTodo =(title)=>{
      console.log("adding",title)
      let sno;
      if(todos.length==0){
        sno=0;
      }
      else{
        sno=todos[todos.length-1].sno+1;
      }
      const myTodo={
        sno:sno,
        title:title
      }
      setTodos([...todos,myTodo]);
      console.log(myTodo);
      localStorage.setItem("todos",JSON.stringify(todos));
  }

  const [todos,setTodos]=useState (initTodo);
  return (
  <>
    <Header title="My To do list"/>
    <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} oncomplete={oncomplete} onDelete={onDelete}/>
    <Footer/>
  </>
  );
}
export default App;
