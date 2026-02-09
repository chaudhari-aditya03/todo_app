import React from 'react';

function TodoItem({ todo, onArchive, onDelete }) {
  return (
    <div className="todo-item">
      <h3 className="item-title">{todo.title}</h3>
      <p className="item-description">{todo.description}</p>
      <div className="button-group">
        <button className="btn-archive" onClick={() => onArchive(todo.id)}>Archive</button>
        <button className="btn-delete" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
