import React from 'react';

function ArchivedItem({ todo, onRestore, onDelete }) {
  return (
    <div className="archived-item">
      <h3 className="item-title">{todo.title}</h3>
      <p className="item-description">{todo.description}</p>
      <div className="button-group">
        <button className="btn-restore" onClick={() => onRestore(todo.id)}>Restore</button>
        <button className="btn-delete" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ArchivedItem;
