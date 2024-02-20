// import React from "react";
// import styles from "./index.module.css";

// function AddTodo() {
//     const[todo, setTodo] = React.useState("")
//     return(
//         <section className ={styles.addTodo}>
//             <input onChange={function(event){
//                 console.log(event)
//                 let todo  = event.target.value
//             }}
//             className={styles.addTodoInput}
//             placeholder="Start Typing..." />
//             <button>Create</button>
//         </section>
//     )

// }

// export default AddTodo;


// import styles from "./index.module.css"
// import{useLocalStorage} from "usehooks-ts";

// function AddTodo (){
//      let todo;
//      // recieve input todo
//      function collectTodo(event) {
//          // console.log (event.target.value);
//          todo=event.target.value; }
 
//      // save todo -on button
//      function saveTodo(){
//          // Get existing list of items - todos from localStorage
//          let todoTask = JSON.parse(localStorage.getItem("TODO_KEY")) || [{}];
 
//          // Add new items to existing items
//          todoTask.push(todo)
 
//          // store all items to existing items
//          localStorage.setItem ("TODO_KEY",  JSON.stringify(todo));
//  }
 
//      return (
//          <section className={styles.addTodo}> {}
//              <input
//              onChange={collectTodo} 
//              placeholder="Add a task..."
//              className="{styles.addTodoInput}"/>
            
//             <button
//              onChange={saveTodo} className={styles.addTodoInput}> Add Task
//              </button> 
//          </section>
//      )
// }

// export default AddTodo;

// import styles from "./index.module.css";
// import{useLocalStorage} from "usehooks-ts";

// function AddTodo (){
//     const [todos, setTodos]= useLocalStorage('TODO_KEY',"");

//      let todo;
//      // recieve input todo
//      function collectTodo(event) {
//          // console.log (event.target.value);
//          todo=event.target.value; }

//      function saveTodo(){
//          // Add new items to existing items
//         //  todoTask.push(todo)
 
//          // store all items to existing items
//         setTodos([...todos, todo]);
//  }
 
//      return (
//          <section className={styles.addTodo}> {}
//              <input
//              onChange={collectTodo} 
//              placeholder="Add a task..."
//              className="{styles.addTodoInput}"/>
            
//             <button
//              onChange={saveTodo} className={styles.addTodoInput}> Add Task
//              </button> 
//          </section>
//      )
// }

// export default AddTodo;+




import { useState } from 'react';
import styles from './index.module.css';
import{useLocalStorage} from "usehooks-ts"

function AddTodo (){
    const [todos, setTodos]= useLocalStorage('TODO_KEY',"");

// let todo;
const [todo, setTodo] =useState("");

    return (
        <section className={styles.addTodo}>
            <input 
            onChange={function (event) {
                // todo = event.target.value;
                setTodo(event.target.value);
            }} 
            
            className={styles.addTodoInput} 
            placeholder="Start typing..."/>
            <button onClick={function () {
                // Get existing list of todos from local storage (deserialize into a string for local storage)
    
                // Add new todo to existing list of todos
                setTodos([...todos, todo]);
                // Set all todos in local storage (serialize into a string before storing in local storage)
                localStorage.setItem('TODO_KEY', JSON.stringify(todos));
                
            }}>Create</button>
        </section>
    );
}

export default AddTodo;