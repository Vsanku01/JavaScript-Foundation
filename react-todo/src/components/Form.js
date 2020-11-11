import React, { useState } from 'react';

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
  // Function to update the state in the App.js which will be further passed into the TodoList Component

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random(1000) },
    ]);
    setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        type='text'
        className='todo-input'
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className='todo-button' type='submit' onClick={submitTodoHandler}>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select name='todos' className='filter-todo' onChange={statusHandler}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
