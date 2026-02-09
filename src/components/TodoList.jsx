import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onArchive, onDelete }) {
  return (
    <div className="todo-list-container">
      <h2 className="section-title">Active Todos</h2>
      {todos.length === 0 ? (
        <p className="empty-message">No active todos</p>
      ) : (
        todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onArchive={onArchive}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
