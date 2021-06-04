import React from "react";

const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    console.log(todo);
    let newTodoList = todos.filter((el) => el.id !== todo.id);
    setTodos(newTodoList);
  };

  const completeHandler = () => {
    console.log(todo);
    let newTodoList = todos.map((el) => {
      if (el.id === todo.id) {
        return {
          ...el,
          completed: !el.completed,
        };
      }
      return el;
    });
    setTodos(newTodoList);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export { Todo };
