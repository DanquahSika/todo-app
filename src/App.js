import React from "react";
import Header from "./components/header";
import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-list";

function App() {
  return (
   <React.Fragment>
    <Header/>
    <AddTodo/>
    <TodoList/>
   </React.Fragment> //react parent element in jsx. It works as a <div> element. It also can be typed  like <></> or this: <div></div>. But it is not recommended to use div every time</s
  );
}

export default App;
