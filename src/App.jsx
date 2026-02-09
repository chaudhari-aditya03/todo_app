import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex flex-col">
      <Header />
      
      <Hero />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
        <TodoForm onAddTodo={addTodo} />
        
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
        
        <TodoList 
          todos={todos} 
          onArchive={archiveTodo} 
          onDelete={deleteTodoFromList}
        />
        
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
        
        <ArchivedList 
          archivedTodos={archivedTodos} 
          onRestore={restoreFromArchive}
          onDelete={deleteFromArchive}
        />
        
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
        
        <div className="text-center mb-6">
          <button 
            onClick={() => setShowDeleted(!showDeleted)}
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            <svg className={`w-5 h-5 transition-transform duration-300 ${showDeleted ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showDeleted ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
            <span>{showDeleted ? 'Hide Deleted Tasks' : 'View Deleted Tasks'}</span>
            {deletedTodos.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center animate-pulse">
                {deletedTodos.length}
              </span>
            )}
          </button>
        </div>
        
        {showDeleted && (
          <DeletedList 
            deletedTodos={deletedTodos}
            onRestore={restoreFromDeleted}
            onDeletePermanently={deletePermanently}
          />
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default App
