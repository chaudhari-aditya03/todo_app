import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title.trim() === '') {
      alert('Please enter a title');
      return;
    }

    onAddTodo({
      id: Date.now(),
      title: title,
      description: description
    });

    setTitle('');
    setDescription('');
  };

  return (
    <div className="todo-form-container">
      <h2>Add New Todo</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input 
            className="form-input"
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea 
            className="form-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <button className="btn-add" type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
