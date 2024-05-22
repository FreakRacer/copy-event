import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Lable from "./components/Lable";
import Todo from "./components/Todo"
function HomeworkC() {
  const [todos, setTodos] = useState([]);
  const addText = (userInput) => {
    if(userInput){
      const newItem ={
        id: Math.random().toString(36).substr(2, 9 ),
        text: userInput,
        completed: false
      }
      setTodos([...todos, newItem])
      console.log(todos)
    }
  };
//  const removeText = (id) => {
//       setTodos([...todos.filter((item) => item.id !== id)])
//  }
const removeText = (id) => {
  setTodos([...todos.filter(item => {
    if (item.id === id){
      return false
    }return true
  })])
}
  const toggleText = (id) => {
    setTodos([
      ...todos.map((todo) =>
      todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
    )])
  };

  return (
    <div className="App">
      <div className="container-custom">
      <header>
        <h1>how much {todos.length}</h1>
      </header>
      <main>
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              toggleText={toggleText}
              removeText={removeText}
            />
          );
        })}
        <TodoForm addText={addText}/>
      </main>
      </div>
    </div>
  );
}
export default HomeworkC;
