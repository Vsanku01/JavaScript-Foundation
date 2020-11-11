import React from 'react';

const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    // Filter returns an array
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      // Mapping all the items and finding the correct item and changing thek completed status of the item
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className='todo'>
      {/* {} inside jsx is for writing JS Code */}
      {/* If the completed flag of the todo is true, then add the "completed" class to the li tag*/}
      <li className={`todo ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </li>
      <button className='complete-btn' onClick={completeHandler}>
        <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={deleteHandler}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
