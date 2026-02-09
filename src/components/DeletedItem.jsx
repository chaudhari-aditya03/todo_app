import React from 'react';

function DeletedItem({ todo, onRestore, onDeletePermanently }) {
  return (
    <div className="deleted-item">
      <h3 className="item-title">{todo.title}</h3>
      <p className="item-description">{todo.description}</p>
      <div className="button-group">
        <button className="btn-restore" onClick={() => onRestore(todo.id)}>Restore</button>
        <button className="btn-delete-permanent" onClick={() => onDeletePermanently(todo.id)}>Delete Permanently</button>
      </div>
    </div>
  );
}

export default DeletedItem;
