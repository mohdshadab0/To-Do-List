import React from "react";




const ToDoList = (props) => {
    
           
    
    return ( <>
            <div className="todo_style">
            <div className ="fa fa-times"
             aria-hidden="true"
             onClick={() =>{
                props.onSelect(props.id);
            }} > X </div> 
            
            <li>{props.text}</li>
            </div>
                 
    </>)
}

export default ToDoList;