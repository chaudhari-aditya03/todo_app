import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onArchive, onDelete }) {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1 w-12 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800">
          Active Tasks
          <span className="ml-3 text-lg font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {todos.length}
          </span>
        </h2>
      </div>
      
      {todos.length === 0 ? (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 text-center border-2 border-dashed border-blue-200">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-lg text-gray-600 font-medium">No active tasks</p>
          <p className="text-sm text-gray-500 mt-2">Add a new task to get started!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onArchive={onArchive}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
