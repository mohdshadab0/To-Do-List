import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {


  const [inputList,setInputList] =useState();
  const [items,setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  } 
  const listOfItems = () => {
        setItems((oldItems)=>{
          return [...oldItems,inputList];
        });
        setInputList('');
  }

  const deleteItems = (id) => {
          setItems((oldItems) =>{
            return oldItems.filter((arrElem,index) => {
              return index !== id;
            });
          });
  }; 
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type='text' placeholder='add a Items' 
          onChange={itemEvent}
          value={inputList} />
          
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((itemval,ind) => {
              
                 return    <ToDoList
                      key = {ind} 
                      id = {ind} 
                      text ={itemval}
                      onSelect ={deleteItems}
                     />;
             
            }
            )}
          </ol>
        </div>
      </div>
    </>
  )
} 

export default App;