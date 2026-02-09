import React from 'react';
import DeletedItem from './DeletedItem';

function DeletedList({ deletedTodos, onRestore, onDeletePermanently }) {
  return (
    <div className="deleted-list-container">
      <h2 className="section-title">Deleted Todos</h2>
      {deletedTodos.length === 0 ? (
        <p className="empty-message">No deleted todos</p>
      ) : (
        deletedTodos.map((todo) => (
          <DeletedItem 
            key={todo.id} 
            todo={todo} 
            onRestore={onRestore}
            onDeletePermanently={onDeletePermanently}
          />
        ))
      )}
    </div>
  );
}

export default DeletedList;
