import React from 'react';
import {Total} from "./Total";
export const Todos = (props) => {
  return (
     <div className="aa">
      <h3 className="aa"></h3>
        {props.todos.length===0? "no items":
        props.todos.map((todo)=>{
          return <Total todo={todo} key={todo.sno} onDelete={props.onDelete} />})}
  </div>
  )
}
