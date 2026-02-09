import React from 'react';
import ArchivedItem from './ArchivedItem';

function ArchivedList({ archivedTodos, onRestore, onDelete }) {
  return (
    <div className="archived-list-container">
      <h2 className="section-title">Archived Todos</h2>
      {archivedTodos.length === 0 ? (
        <p className="empty-message">No archived todos</p>
      ) : (
        archivedTodos.map((todo) => (
          <ArchivedItem 
            key={todo.id} 
            todo={todo} 
            onRestore={onRestore}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default ArchivedList;
