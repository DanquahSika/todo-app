// import React from "react";

// function TodoList(){
//     // let todos = [];
//     const[todos, setTodos] = React.useState([]);

//     function getTodos
//     (){
//         // Get all todos from  local storage //and parse them into a JSON object
//        let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
//         // Update react State
//         setTodos(todos);
//     }

//     React.useEffect(getTodos, []);
//     // return (
//     //     <ul>
//     //         <li>Complete online javascript Course</li>
//     //         <li>Jog around the park three times</li>
//     //         <li>Read a book</li>
//     //     </ul>
//     // );
//     return (
//        <ul>
//         {todos.map(function(todo, index){
//             return<li key={index}>{todo}</li>
//         })}
//        </ul>
//     );
// }

// export default TodoList;

// // The above is how you save a component. []


import {useState, useEffect} from "react";
import {useLocalStorage} from "usehooks-ts"

function TodoList(){
    
    const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);

// function getTodos() {
//     // Getting all todos from local storage and storing it
//     let todos = JSON.parse(localStorage.getItem('TODO_KEY')) || [];
//     // update Reactt state
//     setTodos (todos);
// }

// useEffect(getTodos, []);

    return(
        <ul>
           {todos.map(function(todo, index) {
            return<li key={index}>{todo}</li>
           })}
        </ul>
    );
}

export default TodoList;