import React from "react";

const Form = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  //Here I can write javascript function and code

  const handleInput = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Date.now().toString(),
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={handleInput}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={handleSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">ALL</option>
          <option value="completed">COMPLETED</option>
          <option value="notcompleted">NOT COMPLETED</option>
        </select>
      </div>
    </form>
  );
};

export { Form };
