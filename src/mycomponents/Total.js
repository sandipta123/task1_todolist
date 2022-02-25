import React,{useState} from "react";
import { TiTick } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";
import '../App.css';
export const Total = ({todo,onDelete,oncomplete}) => {
  function handleClick() {
    console.log('in cardClick');
}
  const [style, setStyle] = useState("cont");
  
  const changeStyle = () => {
    console.log("you just clicked");
  
    setStyle("cont2");
  };

  return( <div>
   
    <div className={style}>
      <a href="/" onClick={() => handleClick()} >{todo.title }
      <TiDelete className="cross"  onClick={()=>{onDelete(todo)}}>Delete</TiDelete></a>
        <button className="nbutton" onClick={changeStyle}>
          Done 
        </button>
      </div>
    
</div>
  )
}
