import React from 'react';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>
          <p>{text}</p>
          <button type="button" onClick={() => onDeleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
