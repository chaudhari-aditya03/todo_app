import React, { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import ArchivedList from './components/ArchivedList'
import DeletedList from './components/DeletedList'

function App() {
  const [todos, setTodos] = useState([]);
  const [archivedTodos, setArchivedTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [showDeleted, setShowDeleted] = useState(false);

  // Add a new todo to the todos array
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Archive a todo from todos list
  const archiveTodo = (id) => {
    const todoToArchive = todos.find(todo => todo.id === id);
    if (todoToArchive) {
      setArchivedTodos([...archivedTodos, todoToArchive]);
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  // Delete a todo from todos list (move to deleted)
  const deleteTodoFromList = (id) => {
    const todoToDelete = todos.find(todo => todo.id === id);
    if (todoToDelete) {
      setDeletedTodos([...deletedTodos, todoToDelete]);
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  // Restore from archive to todos
  const restoreFromArchive = (id) => {
    const todoToRestore = archivedTodos.find(todo => todo.id === id);
    if (todoToRestore) {
      setTodos([...todos, todoToRestore]);
      setArchivedTodos(archivedTodos.filter(todo => todo.id !== id));
    }
  };

  // Delete from archive (move to deleted)
  const deleteFromArchive = (id) => {
    const todoToDelete = archivedTodos.find(todo => todo.id === id);
    if (todoToDelete) {
      setDeletedTodos([...deletedTodos, todoToDelete]);
      setArchivedTodos(archivedTodos.filter(todo => todo.id !== id));
    }
  };

  // Restore from deleted to todos
  const restoreFromDeleted = (id) => {
    const todoToRestore = deletedTodos.find(todo => todo.id === id);
    if (todoToRestore) {
      setTodos([...todos, todoToRestore]);
      setDeletedTodos(deletedTodos.filter(todo => todo.id !== id));
    }
  };

  // Delete permanently from deleted
  const deletePermanently = (id) => {
    setDeletedTodos(deletedTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List App</h1>
      
      <TodoForm onAddTodo={addTodo} />
      
      <hr className="section-divider" />
      
      <TodoList 
        todos={todos} 
        onArchive={archiveTodo} 
        onDelete={deleteTodoFromList}
      />
      
      <hr className="section-divider" />
      
      <ArchivedList 
        archivedTodos={archivedTodos} 
        onRestore={restoreFromArchive}
        onDelete={deleteFromArchive}
      />
      
      <hr className="section-divider" />
      
      <button 
        className="btn-view-deleted" 
        onClick={() => setShowDeleted(!showDeleted)}
      >
        {showDeleted ? 'Hide Deleted' : 'View Deleted'}
      </button>
      
      {showDeleted && (
        <DeletedList 
          deletedTodos={deletedTodos}
          onRestore={restoreFromDeleted}
          onDeletePermanently={deletePermanently}
        />
      )}
    </div>
  )
}

export default App
